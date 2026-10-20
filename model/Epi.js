export class Epi {
  #quantidade

  constructor(codigo, nome, ca, quantidade) {
    this.codigo = codigo;
    this.nome = nome;
    this.ca = ca;
    this.#quantidade = quantidade 
  }

  get getQuantidade() {
    return this.#quantidade;
  }

  adicionarQuantidade(valor) {
    if (valor > 0) {
      this.#quantidade += valor;
      return true;
    }
    return false;
  }

  retirarQuantidade(valor) {
    if (valor > 0 && valor <= this.#quantidade) {
      this.#quantidade -= valor;
      return true;
    }
    return false;
  }
}