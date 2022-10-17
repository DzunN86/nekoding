import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './entities/user.entity';
import { AuthController } from './auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { SeedUsers } from './seeder/users.seeder';

@Module({
  imports: [
    SequelizeModule.forFeature([Users]),
    SeederModule.forFeature([SeedUsers]),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRED_TIME
      }
    })
  ],
  controllers: [UsersController, AuthController],
  providers: [UsersService, JwtStrategy]
})
export class UsersModule {}
