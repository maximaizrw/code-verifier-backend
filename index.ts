import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// Configuracion .env
dotenv.config();

// Inicializacion de express
const app: Express = express();
const port: number = Number(process.env.PORT) || 3000;

// Rutas
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hola World!");
  });



// Inicializacion del servidor
app.listen(port, () => {
  console.log(`Ejemplo app listening at http://localhost:${port}`);
});
