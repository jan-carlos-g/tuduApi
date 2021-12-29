import express from "express";
import routes from "./routes";
import 'express-async-errors'
import cors from 'cors'

const app = express();
const port = process.env.PORT ? process.env.PORT : 4000

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Server running in port ${port}!`));