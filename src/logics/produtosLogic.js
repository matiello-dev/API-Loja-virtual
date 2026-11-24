import * as produtosRepository from "../repositories/produtosRepository.js";


export function obterCardapio(id) {
  return produtosRepository.buscarPorIdProduto(id);
}


export function listarProdutos() {
  return produtosRepository.listar();
}

export function buscarPorNomeProduto(nome) {
  const produto = produtosRepository.buscarPorNomeProduto(nome);
  if(!produto) {
    const erro = new Error("Produto não encontrado");
    error.status = 404;
    throw erro;
  }
  return produto;
}

export function buscarPorCategoriaProduto(categoria) {
  const produtos = produtosRepository.buscarPorCategoriaProduto(categoria);
  if(!produtos) {
    const erro = new Error("Produtos não encontrados");
    error.status = 404;
    throw erro;
  }
  return produtos;
}
