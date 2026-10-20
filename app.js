import { cadastrarEpi, listarEpi, buscarIndice, atualizarEpi, excluirEpi } from "./controller/epiController.js";

const capacete = cadastrarEpi("011", "Capacete", 222, 12);
console.log(capacete);

const oculos = cadastrarEpi("022", "Oculos", 333, 5);
console.log(oculos);

const luva = cadastrarEpi("033", "Luva", 444, 6)
console.log(luva);

const lista = listarEpi()
console.log(lista);

const busca = buscarIndice(2)
console.log(busca);

const adicionar = busca.adicionarQuantidade(8)
if (adicionar === true){
    console.log("quantidade adicionada com sucesso")
}else{
    console.log("Erro ao adicionar")
};

const retirar = busca.retirarQuantidade(2)
if (retirar === true){
    console.log("quantidade retirada com sucesso")
}else{
    console.log("Erro ao retirar")
};

const retirar1 = busca.retirarQuantidade(25)
if (retirar1 === true){
    console.log("quantidade retirada com sucesso")
}else{
    console.log("Erro ao retirar")
};

const atualizar = atualizarEpi(1, '055', 'Sapato', 888, 68)
console.log(atualizar)

const excluir = excluirEpi(0)
console.log(excluir)

console.log(lista)