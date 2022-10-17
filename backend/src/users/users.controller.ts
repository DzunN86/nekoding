import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards, Query, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { PermissionGuard } from 'src/authorization/permission.guard';
import { Role } from 'src/authorization/role.decorator';
import { Roles } from 'src/authorization/roles.enum';
import { UpdateRoleDto } from './dto/role.dto';

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
    await this.usersService.create(createUserDto);
    
    return {
      statusCode: 201,
      success: true,
      message: "user successfully created"
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  async getProfile(@Request() req) {
    const user = await this.usersService.findOne(req.user.id);

    return {
      statusCode: 200,
      success: true,
      message: "user profile successfully retrieved",
      user
    }
  }


  @UseGuards(JwtAuthGuard, PermissionGuard)
  @Role(Roles.Admin)
  @Get()
  async findAll(@Query() query) {
    // get data fron query params
    const { limit = 25, page = 1, order = "desc" } = query;

    // querying data
    const users = await this.usersService.findAll(+limit, +page, order)
    return {
      statusCode: 200,
      success: true,
      message: "data users successfully retrieved",
      users
    }
  }

  @UseGuards(JwtAuthGuard, PermissionGuard)
  @Role(Roles.Admin)
  @Get(":id")
  async getDetailUser(@Param("id") id: string) {
    const user = await this.usersService.findOne(id);

    return {
      statusCode: 200,
      success: true,
      message: "detail user successfully retrieved",
      user
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async update(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    // querying
    await this.usersService.update(req.user.id, updateUserDto); 
  
    return {
      statusCode: 200,
      success: true,
      message: "data successfully updated"
    }
  }

  @UseGuards(JwtAuthGuard, PermissionGuard)
  @Role(Roles.Admin)
  @Patch(":id")
  async changeRole(@Param("id") id: string,@Body() role: UpdateRoleDto) {
    await this.usersService.updateRole(id, role);

    return {
      statusCode: 200,
      success: true,
      message: "role user successfully changed"
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
