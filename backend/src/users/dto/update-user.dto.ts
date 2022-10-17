import { IsEmail, IsIn, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsIn(["y", "t"])
  isActive: string

  twitter: string
  facebook: string
  instagram: string
  github: string

}
