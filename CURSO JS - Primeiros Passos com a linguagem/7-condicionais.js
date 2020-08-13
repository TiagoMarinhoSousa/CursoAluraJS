console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de Idade");
//     listaDeDestinos.splice(1, 1);//exclui um elemento da lista se comprador maior de idade
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompnahado")
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Não é maior de idade e não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(1, 1);//exclui um elemento da lista se comprador maior de idade
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem\n");
} else if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem\n");
} else {
    console.log("Você não pode embarcar\n")
}

// console.log(idadeComprador > 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);
