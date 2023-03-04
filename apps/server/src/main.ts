import type { Request, Response } from "express";
import express from 'express';
import cors from "cors"
import * as path from 'path';
import data from "./data.json"

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors());

app.use('/api/v1/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api/v1', (req: Request, res: Response) => {
  res.send({
    data
  });
});

app.listen(port, host, () => {
  console.log(`Server running on: http://${host}:${port}`);
});
