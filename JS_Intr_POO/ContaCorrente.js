import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;//total de contas existentes
    agencia;
    _cliente;
      //saldo = 0;
    _saldo = 0;
    numDaConta;//numero atribuido a conta do cliente


    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }
  
    get saldo(){
        return this._saldo;
    }


    

    constructor (agencia, cliente){
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroDeContas +=1;//contador das contas
        this.numDaConta = ContaCorrente.numeroDeContas + 505;//numero da conta, pode ser qualquer numero aleatório mais o contador
    }



    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        } else {
            console.log("\nVocê tentou sacar R$", valor);
            console.log("Saldo insuficiente! Seu saldo é R$", this._saldo);
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}