import * as formasDePagamento from "../logics/formasdepagamentologics.js"

export async function listarFormasDePagamento(request, response) {
  try {
    console.log("chegou na controler")
    const formaPagamento = await formasDePagamento.listarFormasDePagamento();
    return response.status(200).json(formaPagamento);
  } catch (error) {
    console.error(`Erro ao listar formas de pagamento: ${error.message}`);
    return response.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}