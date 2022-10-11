import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compareSync } from "bcrypt";
import { LoginDto } from "../dto/login.dto";
import { RegisterDto } from "../dto/registe.dto";
import { UsersService } from "../users.service";

@Controller({
  path: "auth",
  version: "1"
})
export class AuthController {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ){}

  @Post("register")
  async register(@Body() registerDto: RegisterDto) {
    const user = await this.userService.register(registerDto);

    return {
      statusCode: 201,
      success: true,
      message: "user successfully registered",
      user
    }
  }

  @Post("login")
  async login(@Body() loginDto: LoginDto) {
    const user = await this.userService.findEmail(loginDto.email);

    if (!user) {
      throw new UnauthorizedException("email or password wrong !!!");
    } else if (!compareSync(loginDto.password, user.password)) {
      throw new UnauthorizedException("email or password wrong !!!");
    } else if (user.isActive == "t") {
      throw new UnauthorizedException("this user is not active");
    }

    return {
      statusCode: 200,
      success: true,
      message: "user successfully login",
      token: this.jwtService.sign({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
      }),
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
      }
    }
  }
}