import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/user.entity';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "mysql",
      host: process.env.MYSQL_HOST,
      port: +process.env.MYSQL_PORT,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_NAME,
      models: [Users],
      autoLoadModels: true
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
