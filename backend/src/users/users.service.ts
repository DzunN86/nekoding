import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';
import { hashSync } from 'bcrypt';
import { RegisterDto } from './dto/registe.dto';
import { Sequelize } from 'sequelize-typescript';
import { UpdateRoleDto } from './dto/role.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users) private user: typeof Users,
    private sequelize: Sequelize
  ){
    this.user.beforeCreate(user => {
      user.password = hashSync(user.password, 10)
    });
  }

  async create(createUserDto: CreateUserDto): Promise<void> {
    try {
      await this.sequelize.transaction(async t => {
        await this.user.create({
          name: createUserDto.name,
          email: createUserDto.email,
          password: createUserDto.password,
          role: createUserDto.role,
          isActive: createUserDto.isActive
        }, {
          transaction: t
        });
      })
    } catch (error) {
      if (error.name == "SequelizeUniqueConstraintError") {
        throw new BadRequestException("User already exists !!");
      } else {
        throw new BadRequestException(error.message);
      }
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

  async findAll(limit: number, page: number, order: string): Promise<Users[]> {
    try {
      return await this.user.findAll({
        attributes: ["id", "name", "email", "role", "isActive", "createdAt", "updatedAt"],
        limit,
        offset: limit * page - limit,
        order: [["createdAt", order]]
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
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

  async update(id: string, updateUserDto: UpdateUserDto): Promise<void> {
    try {
      await this.user.update({
        name: updateUserDto.name,
        email: updateUserDto.email,
        isActive: updateUserDto.isActive,
        twitter: updateUserDto.twitter,
        facebook: updateUserDto.facebook,
        instagram: updateUserDto.instagram,
        github: updateUserDto.github,
      }, {
        where: { id }
      });
    } catch (error) {
      if (error.name == "SequelizeUniqueConstraintError") {
        throw new BadRequestException("User already exists !!");
      } else {
        throw new BadRequestException(error.message);
      }
    }
  }

  async updateRole(id: string, roleDto: UpdateRoleDto): Promise<void> {
    try {
      await this.user.update({
        role: roleDto.role
      }, {
        where: { id }
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updateAvatar(id: string, avatar: string): Promise<void> {
    try {
      await this.user.update({
        avatar
      }, {
        where: { id }
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
