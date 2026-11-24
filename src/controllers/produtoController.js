import * as produtosLogic from "../logics/produtosLogic.js";


export async function obterProduto(request, response) {
  try {
  
    const id = Number(request.params.id);
  if(isNaN(id) ){
    return response.status(400).json({ mensagem: "ID precisa ser um número válido" });
  }
      
    const produto = await produtosLogic.obterCardapio(id);

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

export async function listarCardapio(request, response) {
  try {
    const cardapio = await produtosLogic.listarCardapio();

    return response.status(200).json(cardapio);
  } catch (error) {
    console.error(`Erro ao listar cardapio: ${error.message}`);

    return response.status(500).json({
      mensagem: "Erro interno do servidor",
    });
  }
}