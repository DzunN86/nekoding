import { IsIn, IsNotEmpty } from "class-validator";

export class UpdateRoleDto {
  @IsNotEmpty()
  @IsIn(["admin", "customer"])
  role: string
}