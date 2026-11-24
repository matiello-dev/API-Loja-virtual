import * as produtosLogic from "../logics/produtosLogic.js";


export async function obterProduto(request, response) {
  try {
  
    const id = Number(request.params.id);
  if(isNaN(id) ){
    return response.status(400).json({ mensagem: "ID precisa ser um número válido" });
  }
      
    const produto = await produtosLogic.obterProduto(id);

    if(!produto){
      return response.status(404).json({
        mensagem: "Produto não encontrado",
      });
    }
    return response.status(200).json(produto);
  } catch (error) {
    console.error(`Erro ao obter Produto: ${error.message}`);

    return response.status(500).json({
      mensagem: "Erro interno do servidor",
    });
  }
}

export async function listarProdutos(request, response) {
  try {
    const produtos = await produtosLogic.listarProdutos();

    return response.status(200).json(produtos);
  } catch (error) {
    console.error(`Erro ao listar produtos: ${error.message}`);

    return response.status(500).json({
      mensagem: "Erro interno do servidor",
    });
  }
}
export async function buscarPorNomeProduto(request, response) {
  try {
    const nome = request.params.nome;
    const produto = await produtosLogic.buscarPorNomeProduto(nome);
    return response.status(200).json(produto);
  } catch (error) {
    console.error(`Erro ao buscar produto por nome: ${error.message}`);
    return response.status(error.status || 500).json({  mensagem: error.message || "Erro interno do servidor" });
  }
}

export async function buscarPorCategoriaProduto(request, response) {
  try {
    const CATEGORIAS = [
      'eletronicos', 'Eletrônicos',
      'roupas', 'Roupas',
      'casa', 'Casa',
      'livros', 'Livros',
      'cervejas', 'Cervejas',
      'carnes', 'Carnes',
      'refrigerantes', 'Refrigerantes',
      'chocolates', 'Chocolates',
      'cachorro-quente', 'Cachorro-quente'
    ];
    const categoria = request.params.categoria;
    if (!CATEGORIAS.includes(categoria)) {
      return response.status(400).json({ mensagem: "Categoria inválida" });
    }
    const produtos = await produtosLogic.buscarPorCategoriaProduto(categoria);
    return response.status(200).json(produtos);
  } catch (error) {
    console.error(`Erro ao buscar produtos por categoria: ${error.message}`);
    return response.status(error.status || 500).json({ mensagem: error.message || "Erro interno do servidor" });
  }
}