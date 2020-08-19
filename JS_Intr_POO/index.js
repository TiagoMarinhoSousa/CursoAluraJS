import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js"
const cliente1 = new Cliente();
cliente1.nome = "Tiago";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteTiago = new ContaCorrente();
contaCorrenteTiago.agencia = 1001;

contaCorrenteTiago.depositar(100);
contaCorrenteTiago.depositar(100);
contaCorrenteTiago.depositar(100);

const valorSacado = contaCorrenteTiago.sacar(50);
console.log("Você sacou R$", valorSacado);

console.log(contaCorrenteTiago);


