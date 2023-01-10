// Abrir no Console
console.log("Jonathan Santos");

// Variáveis
let value = 23;
// Constantes
const nome = "Jonathan";
console.log(nome + ' ' + value);
// Mostrar Tipo da Variável
console.log(typeof(value));
console.log(`${nome}`);

// Tipos Primitivos
let name = "John"; // string
let age = 23; // number
let estaAprovado = true; // boolean
let sobrenome = undefined; // Undefined
let corSelecionada = null; // Vazio

// Objeto
let pessoa = {
    name: "John",
    age: 23,
    estaAprovado: true,
    sobrenome: "Santos"
};
console.log(pessoa);
console.log(pessoa.name);

// Adicionando propriedade ao Objeto
pessoa.profissao = "Desenvolvedor de Aplicativos";
console.log(pessoa);
console.log(pessoa.profissao);

// Array
let frutas = ['maçã', 'pêra', 'uva', 'melância'];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[1]);

// Função que não retorna
function dizerNome() {
    console.log("Jonathan Santos de Souza");
}

dizerNome();

// Função que retorna
function multiplica(num) {
    return num * 2;
}

let result = multiplica(5);
console.log(result);

// Operadores Aritméticos
let salario = 600;

console.log(salario + salario); // Soma
console.log(salario - salario); // Subtração
console.log(salario * salario); // Multiplicação
console.log(salario / salario); // Divisão
console.log(salario ** salario); // Exponencial
console.log(++salario); // Incremento
console.log(--salario); // Decremento

// Operadores de Atribuição
let valorTecladoGamer = 255;
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);

// Operadores de Igualdade
console.log('1' === 1); // Estrita
console.log('1' == 1); // Solta

// Operador Ternário
// Cliente > 100 = Premium; Cliente < 100 = Comum;
let pontos = 200;
let tipo = pontos > 100 ? 'Premium' : 'Comum';
console.log(tipo);

// Operadores Lógicos
let e = true && false; // E
let ou = true || false; // OU
let not = !true; // NOT
console.log(e);
console.log(ou);
console.log(not);

// Exercício 1: Troca de Cores
let a = 'Vermelho';
let b = 'Azul';

c = a;
a = b;
b = c;

console.log(a);
console.log(b);

// Estruturas Condicionais
// If | Else 
let data = new Date();
let hora = data.getHours();

if (hora > 6 && hora < 12) {
    console.log("Bom Dia");
} else if (hora > 12 && hora < 18) {
    console.log("Boa Tarde");
} else {
    console.log("Boa Noite");
}

// Switch | Case
let permissao = ''; // Comum, Gerente, Diretor e Falha

switch (permissao) {
    case 'comum':
        console.log('Usuário Comum');
        break;

    case 'gerente':
        console.log('Usuário Gerente');
        break;
    
    case 'diretor':
        console.log('Usuário Diretor');
        break;

    default:
        console.log('Usuário Desconhecido');

}

// Estruturas de Repetição | Laços | Loops
// For
for (let i = 1; i <= 7; i++) {
    if (i % 2 !== 0) {
        console.log('Estou Aprendendo!', i);
    }
}

// While
let j = 7;

while (j >= 1) {
    if (j % 2 !== 0) {
        console.log('Estou Aprendendo!', j);
    } j--;
}

// Do..While
let k = 0;

do {
    console.log('Aprendi', k);
    k++
} while (k <= 3);

// For..In
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// For..Of
for (let fruta of frutas) {
    console.log(fruta);
}

// Exercício 2: Função que retorna maior entre 2 números
function maiorNum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

let valor = maiorNum(10,5);
console.log(valor);

// Exercício 3: FizzBuzz - Função que retorna...
// Fizz => Se entrada for divisível por 3
// Buzz => Se entrada for divisível por 5
// FizzBuzz => Se entrada for divisível por ambos
// 'entrada' => Se não for divisível por nenhum
// "Não é um Número" => Se não for um número
let saida = fizzBuzz('');
console.log(saida);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number') {
        return "Não é um Número";
    } else if (entrada % 3 == 0) {
        if (entrada % 5 == 0) {
            return "FizzBuzz"
        } else { return "Fizz" }
    } else if (entrada % 5 == 0) {
        return "Buzz"
    } else { return entrada }
}

// Exercício 4: Medidor de Velocidade
// Velocidade Máx Permitida => até 70km = 'ok'
// A cada 5km acima da VMP ganha 1 ponto
// Caso pontos forem maior ou igual a 12 => 'Carteira Suspensa'
let lombada = medidor(130);
console.log(lombada);

function medidor(entrada) {
    const vmp = 70;
    const ptPorKm = 5;
    if (entrada <= vmp) {
        return "ok"
    } else {
        const pontos = Math.floor(((entrada - vmp) / ptPorKm));
        return pontos >= 12 ? "Carteira Suspensa" : "Pontos: " + pontos
    }
}

// Exercício 5: Ler uma quantidade de números e determinar se é Par ou Ímpar
looping(5);

function looping(quant) {
    for (let i=0; i<=quant; i++) {
        i % 2 == 0 ? console.log(i, 'PAR') : console.log(i, 'ÍMPAR');
    }
}

// Exercício 6: Ler as propriedades de um objeto e exibir apenas as tipo string
// OBS: adicionei um sinalizador para as que não são strings.
const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}

exibirPropriedades(filme);

function exibirPropriedades() {
    for (let key in filme) {
        if (typeof filme[key] === 'string') {
            console.log(key, filme[key]);
        } else {
            console.log("A propriedade '" + key + "' não é string")
        }
    }
}

// Exercício 7: Função que retorna a soma dos múltiplos de 3 e 5
somaMult(10);

function somaMult(limite) {
    let mult3 = 0;
    let mult5 = 0;
    for (i=0; i<=limite; i++) {
        if (i % 3 === 0) {
            mult3 += i
        }
        if (i % 5 === 0) {
            mult5 += i
        }
    }
    console.log(mult3 + mult5);
}

// Exercício 8: Nota Escolar - Determinar a Média de Acordo com o Array
// 0 - 49: F
// 50 - 59: E
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A
const array = [80, 80, 80];

console.log(mediaAluno(array));

function mediaAluno(array) {
    const media = calcMedia(array);

    if (media < 49) return 'F';
    if (media < 59) return 'E';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A';
}

function calcMedia(array) {
    let soma = 0;
    for (nota of array) {
        soma += nota;
    }
    return soma / (array.length);
}

// Exercício 9: Função que exibe a quantidade de * por linha
exibirAsteriscos(5);

function exibirAsteriscos(quant) {
    let ast = '';
    for (i=0; i < quant; i++) {
        ast += '*';
        console.log(ast);
    }
}

// Exercício 10: Exibir apenas os números primos dado um limite
exibirNumPrimos(15);

function exibirNumPrimos(limite) {
    for (let numero=2; numero <= limite; numero++) {
        if (checkNumPrimo(numero)) {
            console.log(numero);
        }
    }
}

function checkNumPrimo(numero) {
    for (let divisor=2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;
}

// Factory Functions (Funções de Fábrica)
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...")
        }
    }
}

let celulares = [
    criarCelular("ASUS", 5.5, 5000),
    criarCelular("Samsung", 5.0, 4000)
];
console.log(celulares);

for (let cell of celulares) {
    console.log(cell.marcaCelular, cell.tamanhoTela, cell.capacidadeBateria, cell.ligar);
}

// Constructor Function
class Disciplina {
    constructor(nome, professor, minimoFaltas) {
        this.nome = nome;
        this.professor = professor;
        this.minimoFaltas = minimoFaltas;
    }
}

const disciplina1 = new Disciplina("Português", "Roberta Moura", 15);
console.log(disciplina1);

for (let disc in disciplina1) {
    console.log(disc, disciplina1[disc]);
}

// Clonando Objetos
const copiaObjeto1 = Object.assign({
    vilao: "Loki"
}, filme);

console.log(copiaObjeto1);

const copiaObjeto2 = {...filme};
console.log(copiaObjeto2);

// Recurso Math - Neste caso o Random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
console.log(getRandomInt(2,5));

// Dicas de Strings - Ver usos na documentação oficial
// Tipo Primitivo
const mensagem = "Olá Mundo!";
console.log(typeof(mensagem));

// Tipo Objeto
const outraMensagem = new String("Bom Dia!");
console.log(typeof(outraMensagem));

console.log(mensagem.indexOf("M"));
console.log(mensagem[4]);
csl = console;
csl.log(outraMensagem);
csl.log(mensagem)

for (i=0; i<mensagem.length; i++) {
    csl.log(mensagem[i]);
}

csl.log(outraMensagem.split(' '));

// Escape Sequence - Ver outros na documentação
const escapeSequence = "Testando escape... \n é assim que pula linha"
csl.log(escapeSequence);

// Template Literal
const email = 
`Olá, meu nome é ${nome} ${pessoa.sobrenome}.
Meu apelido é ${pessoa.name}, tenho ${pessoa.age} anos.

Isso foi um teste do Template Literal...`

csl.log(email);

// Exercício 11: Criar Objeto Endereço(Rua, Cidade, CEP) e uma f(exibirEndereco)
class Endereco {
    constructor(cep, rua, cidade) {
        this.cep = cep;
        this.rua = rua;
        this.cidade = cidade;
    }
}

const endereco1 = new Endereco(50690080, "R. Tacima", "Recife");

function exibirEndereco() {
    for (let key in endereco1) {
        csl.log(key, endereco1[key]);
    }
}

exibirEndereco();

// Exercício 12: Criar um segundo objeto e comparar...
// Se as propriedades são iguais
// Se a referência do objeto aponta para o mesmo local na memória
const endereco2 = new Endereco(50690080, "R. Tacima", "Recife");

function saoIguais(endereco1, endereco2) {
    return [
        endereco1.cep === endereco2.cep &&
        endereco1.rua === endereco2.rua &&
        endereco1.cidade === endereco2.cidade
    ];
}

function temEnderecoMemoriaIguais(endereco1, endereco2) {
    return endereco1 === endereco2;
}

csl.log(saoIguais(endereco1, endereco2));
csl.log(temEnderecoMemoriaIguais(endereco1, endereco2));

// Exercício 13: Criar um objeto Postagem
let postagem = {
    titulo: "Criando Objeto",
    mensagem: "Aqui vamos criar um objeto",
    autor: "Jonathan",
    visualizacoes: 120,
    comentarios: [
        { autor: "Bruno", mensagem: "Muito Bom!" },
        { autor: "Cintia", mensagem: "Gostei!" }
    ],
    estaAoVivo: false
}

for (let key in postagem) {
    if (key === 'comentarios') {
        for (let key2 of postagem.comentarios) {
            csl.log(key, key2);
        }
    } else {
        csl.log(key, postagem[key]);
    }
}

// Adicionando Elementos no Array
const numeros = [1,2,3];
csl.log(numeros);

// No Início
numeros.unshift(0)
csl.log(numeros);

// No Meio
numeros.splice(1,0,"a");
csl.log(numeros);

// No Fim
numeros.push(4);
csl.log(numeros);

// 