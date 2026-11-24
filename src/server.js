import express from "express";
import { fileURLToPath } from "node:url";
import * as usuarioController from "./controllers/usuarioController.js";
import * as produtosController from "./controllers/produtoController.js";
import { autenticar } from "./middlewares/autenticar.js";


const app = express();
const PORTA = Number(process.env.PORT || 3000);

app.use("/app",express.static("public"))

// Permite que o SimuladorRequest.html seja aberto fora deste projeto.
app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,OPTIONS",
  );
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization",
  );

  if (request.method === "OPTIONS") {
    return response.sendStatus(204);
  }

  next();
});

app.use(express.json());

app.get("/status", (request, response) => {
  response.status(200).json({ mensagem: "API ON" });
});

app.post("/usuarios", usuarioController.cadastrar);
app.post("/login", usuarioController.login);
app.get("/produtos", autenticar, produtosController.listarCardapio);


if (process.argv[1] === fileURLToPath(import.meta.url)) {
  app.listen(PORTA, () => {
    console.log(`API disponível em http://localhost:${PORTA}`);
  });
}

export default app;
