import "reflect-metadata"
import { DataSource } from 'typeorm'

import * as dotenv from 'dotenv';
dotenv.config();

const db: DataSource = new DataSource({
  type: "mysql",
  host: process.env.NODE_MYSQL_HOST || "",
  port: Number(process.env.NODE_MYSQL_PORT) || 0,
  username: process.env.NODE_MYSQL_USER || "",
  password: process.env.NODE_MYSQL_PASSWORD || "",
  database: process.env.NODE_MYSQL_DB || "",
  entities: [ __dirname + '/../**/Models/*.{js,ts}',],
  synchronize: true,
  logging: true,
})

export default db