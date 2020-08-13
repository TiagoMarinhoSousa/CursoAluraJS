console.log(`\n Trabalhando com loops`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}
console.log("\nDestino existe:", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("\nBoa viagem para:", destino, "\n");
} else {
    console.log("\nDesculpe tivemos um erro!")
}

//repetição usando for
// for (let i = 0; i < 3; i++) {
//     if (listaDeDestinos[i] == destino) {
//         destinoExiste = true;
//         break;
//     }
// }