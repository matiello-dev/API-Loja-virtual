import * as produtosRepository from "../repositories/produtosRepository.js";

// Mantém a rota inicial GET / retornando a primeira tarefa do banco.
export function obterCardapio(id) {
  return produtosRepository.buscarPorIdProduto(id);
}

// A logic coordena a consulta; somente o repository conhece o SQL.
export function listarCardapio() {
  return produtosRepository.listar();
}