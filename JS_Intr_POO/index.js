import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Tiago", 11122233309);
const conta1 = new ContaCorrente(1001, cliente1);

const cliente2 = new Cliente("Alice", 88822233309);
const conta2 = new ContaCorrente(1002, cliente2);


// //depositar e sacar
// conta1.depositar(100);
// //console.log("Seu saldo é:", conta1._saldo);
// conta1.depositar(100);
// conta1.depositar(100);
// const valorSacado = conta1.sacar(50);
conta1.depositar(500);
conta1.tranferir(200, conta2);

console.log(conta2);

