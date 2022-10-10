import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Users extends Model {
  @Column({ allowNull: false, primaryKey: true, type: DataType.UUID })
  id: string

  @Column({ allowNull: false })
  name: string

  @Column({ allowNull: false, unique: true })
  email: string

  @Column({ allowNull: false })
  password: string

  @Column({ allowNull: false, type: DataType.ENUM, values: ["sysadmin", "admin", "customer"] })
  role: string

  @Column({ allowNull: false, type: DataType.ENUM, values: ["y", "t"] })
  isActive: string

  @Column
  twitter: string

  @Column
  facebook: string

  @Column
  instagram: string

  @Column
  github: string
}
