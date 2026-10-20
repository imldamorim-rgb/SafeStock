import {Epi} from "../model/Epi.js"
import { cadastrar, listar, buscar, atualizar, excluir } from "../repository/epiRepository.js";

export function cadastrarEpi(codigo, nome, ca, quantidade){
    const epi = new Epi(codigo, nome, ca, quantidade);

    cadastrar(epi);
    return "Epi cadastrado com sucesso"
}

export function listarEpi(){
    const lista = listar();
    return lista;
}

export function buscarIndice(indice){
    const busca = buscar(indice)
    return busca;
}

export function atualizarEpi(indice, codigo, nome, ca, quantidade){
    const epi = new Epi(indice, codigo, nome, ca, quantidade)
    
    atualizar(epi)
    return "Atualizado com sucesso"
}

export function excluirEpi(indice){
    excluir(indice)
    return "Excluido com sucesso"
}