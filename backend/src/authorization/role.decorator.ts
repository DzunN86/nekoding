import { SetMetadata } from "@nestjs/common";
import { Roles } from "./roles.enum";

export const Role = (data: Roles) => {
  return SetMetadata("role", data)
};