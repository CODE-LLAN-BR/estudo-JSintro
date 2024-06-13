// function expression
// function anonymous

//parâmetros(parameters)
// const sum = function(number1, number2){
//     console.log(number1 + number2)
// }

// (10, 8) - objetos dentro de parenteses são chamados argumentos
// sum(10,8);

// const sum = function(number1, number2){
//     let total = number1 + number2
//     return total
// }

// let number1 = 34;
// let number2 = 25;

// console.log(`O número 1 é ${number1}`)
// console.log(`O número 2 é ${number2}`)
// console.log(`A soma é ${sum(number1,number2)}`)

// console.log()

// Função é um liquidificador

// function fazerSuco(fruta1,fruta2){
//     return `suco de: ` +fruta1+fruta2
// }

// const copo = fazerSuco(`banana`,`maçã`)

// console.log(copo)



//2 - function scope
//nenhum pensamento
// let subject //variavel undefined

// // criação de pensamento
// function createThink(){
//     subject = 'study' // atribuiu valor a variavel
//     return subject //retorno da variavel
// }
// // pensamento trazida pra fora
// console.log(subject)//antes da chamada da função = undefined
// createThink() // chamando função
// console.log(subject) // retorno depois da chamada da função = study



//3 - function hoisting

//a função statement e/ou declaration sofre elevação


// sayMyName()
// sayMyName()

//mesmo sendo criada depois da chamada , ela retorna até o ponto de chamada
// function sayMyName(){
//     console.log('HAHAHAHA')
// }



//expressão de função / expression function 

//feita com essa sintaxe ela não sofre alteração de hoisting ou seja , ela não retorna até a chamada , ela só responde após sua criação

// let sayMyNameName = function(){
//     console.log('HAHAHA')
// }

// sayMyNameName()



//Arrow Function 
//é chamada dessa forma pela sintaxe utilizada depois da chamada de variavel(preferência constante) 
// sintaxe:
// let sintaxe = (argument) => {function};


// const sayMyName= (name) => {
//     console.log(name)
// }
// sayMyName(`Leonardo`)



//callback function

// function sayMyName(name){
//     console.log('antes de executar a função callback')
//     name()
//     console.log('depois de executar a função callback')
// }

// sayMyName(
//     () =>{
//     console.log('estou em uma callback')
//     }
// )


/* Function() constructor

    *expressão new
    *criar um novo objeto
    *this keyworld
*/
//aplicada utilizando a *primeira letra da nome da função Maiuscula* por boas práticas
// function Person(name) {
//     this.name = name
// }
//chamada da função e adicionando um nome ao argumento , adicionamos esse nome a const referente transformando-a em um objeto com a propriedade"name"
// const leo = new Person('Leonardo')
// const maria = new Person('Maria')
// console.log(leo)
// console.log(maria)

