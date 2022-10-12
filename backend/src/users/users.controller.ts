import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards, SetMetadata } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { PermissionGuard } from 'src/authorization/permission.guard';
import { Role } from 'src/authorization/role.decorator';
import { Roles } from 'src/authorization/roles.enum';

@Controller({
  version: "1",
  path: "users"
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard, PermissionGuard)
  @Role(Roles.Admin)
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    
    return {
      statusCode: 201,
      success: true,
      message: "user successfully created",
      user
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  async getProfile(@Request() req) {
    const user = await this.findOne(req.user.id);

    return {
      statusCode: 200,
      success: true,
      message: "user profile successfully retrieved",
      user
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req) {
    return req.user;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
