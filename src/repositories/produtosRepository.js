import db from "../database/conexao.js";

export function listar() {
  const produtos = db.prepare("SELECT * FROM produtos ORDER BY id").all();
  console.log("produtos", produtos)

  return produtos;
}

// Retorna um produto pelo id ou null quando ele não existe.
export function buscarPorIdProduto(id) {
  // O ? mantém o valor separado do SQL e evita montar a consulta com strings.
  const produto = db.prepare("SELECT * FROM produtos WHERE id = ?").get(id);

  return produto;
}
