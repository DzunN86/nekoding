import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';
import { hashSync } from 'bcrypt';
import { RegisterDto } from './dto/registe.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users) private user: typeof Users
  ){
    this.user.beforeCreate(user => {
      user.password = hashSync(user.password, 10)
    });
  }

  async create(createUserDto: CreateUserDto): Promise<Users> {
    try {
      return await this.user.create({
        name: createUserDto.name,
        email: createUserDto.email,
        password: createUserDto.password,
        role: createUserDto.role,
        isActive: createUserDto.isActive
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async register(registerDto: RegisterDto): Promise<Users> {
    try {
      return await this.user.create({
        name: registerDto.name,
        email: registerDto.email,
        password: registerDto.password,
        role: "customer",
        isActive: "y"
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  async findEmail(email: string): Promise<Users> {
    try {
      return await this.user.findOne({
        where: { email },
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string): Promise<Users> {
    try {
      return await this.user.findOne({
        where: { id },
        attributes: ["id", "name", "email", "role", "isActive", "twitter", "facebook", "instagram", "github", "createdAt", "updatedAt"]
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
