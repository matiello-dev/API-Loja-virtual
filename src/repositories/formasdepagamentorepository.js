import db from "../database/conexao.js";

export function listarFormasDePagamento() {
    console.log("repository")
  const formasdepagamento = db.prepare("SELECT * FROM formas_pagamento").all();
  return formasdepagamento;
}