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
import { MulterModule } from '@nestjs/platform-express';
import { join } from 'path';
import { diskStorage } from 'multer';

@Module({
  imports: [
    SequelizeModule.forFeature([Users]),
    SeederModule.forFeature([SeedUsers]),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRED_TIME
      }
    }),
    MulterModule.register({
      storage: diskStorage({
        destination(req, file, cb) {
          cb(null, join(__dirname, "../../public/avatar"))
        },
        filename(req, file, cb) {
          cb(null, "avatar-".concat(Date.now().toString()).concat(".png"));
        }
      })
    }),
  ],
  controllers: [UsersController, AuthController],
  providers: [UsersService, JwtStrategy]
})
export class UsersModule {}
