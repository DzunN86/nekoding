import { CanActivate, ExecutionContext, ForbiddenException, Injectable, Request } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { config } from "dotenv";
config();

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService){};

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const accessToken    = context.getArgs()[0].headers.authorization;
    if (typeof accessToken === "undefined") {
      return true;
    }
    const token          = accessToken.split(" ")[1];
    const userPermission = await this.jwtService.verifyAsync(token, {
      secret: process.env.JWT_SECRET_KEY
    });
    const requiredPermission = this.reflector.get("role", context.getHandler());
    
    return userPermission.role === requiredPermission;
  }
}
