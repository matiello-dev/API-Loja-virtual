import * as formasDePagamentoRepository from "../repositories/formasdepagamentorepository.js";

export function listarFormasDePagamento() {
  console.log("logic")
  return formasDePagamentoRepository.listarFormasDePagamento();
}
