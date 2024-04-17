import * as dotenv from 'dotenv'
dotenv.config()
import express, { Application } from "express";
import morgan from 'morgan';
import Router from "./Router/Router";
import db from './DataBase';

const PORT = process.env.PORT || 3000;
const app: Application = express();

app.use(express.json());
app.use(morgan('short'));
app.use(express.static("public"));

app.use(Router);

//#region App initializer
db.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((error: any) => {
    console.error("Error during Data Source initialization", error)
  })
//#endregion