export class ContaCorrente {
    agencia;
    //saldo = 0;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        } else {
            console.log("Saldo insuficiente! Seu saldo é R$", contaCorrenteTiago._saldo);
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }
}