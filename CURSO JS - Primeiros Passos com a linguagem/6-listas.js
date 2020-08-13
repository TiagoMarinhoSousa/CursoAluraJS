console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); //adicionando um item na lista
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);//exclui um elemento da lista (pos, quantidade)
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]); //mostra o elemento da lista [pos]

const destino = listaDeDestinos[listaDeDestinos.length-1];//mostra o último elemento da lista
console.log(destino);

console.log(listaDeDestinos.length);//quantidade de itens da lista


