//TEMA --> synthwave 84

//Variaveis (var, let)
//Tipagem dinamica

//Caractere (String, char)
//Numericos (int, float, double, long ...)
//Logicos (boolean)

var nome = 'Augusto';
let sobrenome = 'Miguel';

console.log(nome);
console.log(sobrenome);
console.log(nome + ' ' + sobrenome);

nome = 12;
console.log(nome);

//Constantes 
const PI = 3.1416;

console.log(PI);
//PI = 4; ERRO!

//Tipos primitivos
let disciplina = 'Programação Android'; //String
let cargaHoraria = 80; //Number
let estaAprovado = true; // Boolean
let curso = undefined; //Undefined
let campus = null; //null

console.log(typeof disciplina);
console.log(typeof cargaHoraria);
console.log(typeof estaAprovado);
console.log(typeof curso);
console.log(typeof campus);

//Arrays
let cursos = ['Sistemas de Informação', 'Jogos Digitais', 'Análise de Sistemas'];
console.log(cursos);

console.log("Curso: " + cursos[0]);
console.log("Curso: " + cursos[1]);
console.log("Curso: " + cursos[2]);

cursos[3] = 'Gestão de TI';
console.log("Curso: " + cursos[3]);

cursos[4] = false;
console.log("Curso: " + cursos[4]);

cursos[5] = 77.8;
console.log("Curso: " + cursos[5]);

console.log(typeof cursos);
console.log('Tamanho do vetor: ' + cursos.length);

//Funções
//Declaração da função

function olaMundo(){
    console.log('Olá mundo!');
}

function saudacao(nome){
    console.log('Olá, ' + nome + '. Bem vindo a aula de Dev Mobile.');
}

function calculaMedia(n1, n2, n3){
    return (n1 + n2 + n3) / 3;
}

let soma = function(n1, n2){
    return n1 + n2;
}

//Arrow Notation
let multiplicacao = (n1,n2) => n1 * n2;

//Function call (chamada de função)
olaMundo();
saudacao('Pedro');
console.log('Média: ' + calculaMedia(4,6,8));
console.log('Soma: ' + soma(7, 8));
console.log('Multiplicação: ' + multiplicacao(7,5));

//e-mail: salustiano.oliveira@estacio.br

//Comentario de linha
/*Comentario de bloco*/

//Objeto

/*
    objeto = {
        nomeChave: valor,
        nomeChave: valor,
        ...
    }
*/

let pessoa = {
    nome: 'Carlos',
    sobrenome: 'Oliveira',
    idade: 37,
    profissao: 'Contador',
    email: 'carlos@email.com',
}

console.log('Nome: ' + pessoa.nome);
console.log('Sobrenome: ' + pessoa.sobrenome);
console.log('Idade: ' + pessoa.idade);
console.log('Profissão: ' + pessoa.profissao);
console.log('E-mail: ' + pessoa.email);
console.log('Naturalidade: ' + pessoa.natural);//undefined

pessoa.natural = 'Espirito Santo';
console.log('Naturalidade: ' + pessoa.natural);
console.log(pessoa);

let c1 = new Conta();

c1.numero = 6677;
c1.agencia = 1234;

console.log(c1);

console.log('Agencia: ' + c1.agencia);
console.log('Numero: ' + c1.numero);
console.log('Saldo: ' + c1.saldo);

//c1.saldo = c1.saldo + 500;
//console.log('Novo saldo: ' + c1.saldo);

c1.deposito(700);
console.log('Saldo (deposito R$ 700,00): ' + c1.saldo);

c1.saque(800);
console.log('Saldo (saque R$ 800,00): ' + c1.saldo);