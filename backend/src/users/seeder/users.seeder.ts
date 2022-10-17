import { Seeder, OnSeederInit } from "nestjs-sequelize-seeder";
import { Users } from "../entities/user.entity";

@Seeder({
  model: Users,
  unique: ["email", "id"]
})
export class SeedUsers implements OnSeederInit {
  run() {
    const data = [
      {
        name: "Admin",
        email: "admin@nekoding.com",
        password: "admin123",
        role: "admin",
        isActive: "y"
      }
    ];

    return data;
  }
}