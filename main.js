function Pessoa(nome, cpf, dataNasc){
    _nome = nome;
    _cpf = cpf;
    _dataNasc = dataNasc;

    this.getNome = function(){
        return _nome;
    }

    this.getcpf = function(){
        return _cpf;
    }

    this.getdataNasc = function(){
        return _dataNasc;
    }
}

function Cliente(nome, cpf, dataNasc, registro){
    Pessoa.call(this,nome, cpf, dataNasc);
    _registro  = registro;
    _divida = 0;

    this.getRegistro = function(){return _registro;}
    this.getSaldoDevedor = function() {return _divida;}

    this.novaDivida = function (valorCompra){
        _divida = _divida + valorCompra;
        console.log("Valor do saldo devedor: " + this.getSaldoDevedor());
    }

    this.novoPagamento = function (valorPagamento){
        _divida = _divida - valorPagamento;
        console.log( "Valor do saldo devedor: " + this.getSaldoDevedor());
    }
}

function Funcionario (nome, cpf, dataNasc, cargo, salario){
    Pessoa.call(this,nome, cpf, dataNasc);
    _cargo = cargo;
    _salario = salario;

    this.getCargo = function (){return _cargo;}
    this.getSalario = function (){return _salario;}

    this.setCargo = function (novoCargo) {
        _cargo = novoCargo;
    } 

    this.setSalario = function (novoSalario) {
        _salario = novoSalario;
        console.log("Valor do novo salário: " + this.getSalario());
    }

    this.aumentoPadraoSalario = function(){
        _salario = _salario * 1.05;
        console.log("Valor do novo salário: " + this.getSalario());
    }
}

let joao = new Pessoa ('Joao', 11122233344, '01/01/2000');

let jose = new Cliente('Jose', 11122233344, '02/02/2001', '012');
jose.novaDivida(400);

let maria = new Funcionario('Maria', 11122233344, '03/03/2002', 'Supervisora', 3500);
maria.aumentoPadraoSalario();