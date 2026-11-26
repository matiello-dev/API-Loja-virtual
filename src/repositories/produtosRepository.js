import db from "../database/conexao.js";

export function listar() {
  const produtos = db.prepare("SELECT * FROM produtos ORDER BY id").all();
  console.log("produtos", produtos)

  return produtos;
}

// Retorna um produto pelo id ou null quando ele não existe.
export function buscarPorIdProduto(id) {
  const produto = db.prepare("SELECT * FROM produtos WHERE id = ?").get(id);

  return produto;
}

export function buscarPorNomeProduto(nome) {
  const produto = db.prepare("SELECT * FROM produtos WHERE nome = ?").get(nome);
  return produto;
}
export function buscarPorCategoriaProduto(categoria) {
  const produto = db.prepare("SELECT * FROM produtos WHERE categoria = ?").all(categoria);
  return produto;
}
