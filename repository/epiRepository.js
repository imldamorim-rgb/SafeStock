const epis = []

export function cadastrar(epi){
    epis.push(epi);
}

 export function listar(){
    return epis;
 }

 export function buscar(indice){
    return epis[indice];
 }

 export function atualizar(indice, epi){
    epis[indice] = epi 
 }

 export function excluir(indice){
    epis.splice(indice, 1)
 }