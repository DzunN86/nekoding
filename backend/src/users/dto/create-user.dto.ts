import { IsEmail, IsIn, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  password: string

  @IsNotEmpty()
  @IsIn(["admin", "customer"])
  role: string

  @IsNotEmpty()
  @IsIn(["y", "t"])
  isActive: string
}
