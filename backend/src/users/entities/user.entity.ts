import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/helpers/roles.enum";

@Table
export class Users extends Model {
  @Column({ allowNull: false, primaryKey: true, type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string

  @Column({ allowNull: false })
  name: string

  @Column({ allowNull: false, unique: true })
  email: string

  @Column({ allowNull: false })
  password: string

  @Column({ allowNull: false, type: DataType.ENUM, values: ["admin", "customer"] })
  role: Role[]

  @Column({ allowNull: false, type: DataType.ENUM, values: ["y", "t"] })
  isActive: string

  @Column
  avatar: string

  @Column
  twitter: string

  @Column
  facebook: string

  @Column
  instagram: string

  @Column
  github: string
}
