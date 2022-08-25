class Conta{
    constructor(){
        this._agencia;
        this._numero;
        this._saldo = 1000;
    }

    get agencia(){
        return this._agencia;
    }

    set agencia(agencia){
        this._agencia = agencia;
    }

    get numero(){
        return this._numero;
    }

    set numero(numero){
        this._numero = numero;
    }

    get saldo(){
        return this._saldo;
    }

    deposito(valor){
        if(valor > 0){
            this._saldo = this._saldo + valor;
        }
    }

    saque(valor){
        if(valor > 0 && valor <= this._saldo){
            this._saldo -= valor;
        }else{
            console.log('Falha na operação!');
        }
    }
}