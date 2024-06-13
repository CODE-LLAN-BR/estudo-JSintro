 
/* 
    Strings

    *Cadeia de caracteres
    
    "" aspas duplas
    '' aspas simples
    `` template literals ou template strings
    
    */

/*  Number
    *números

    33 = inteiros
    12.5 = reais / float
    NaN = Not a Number
    Infinity = infinito

    */

/*  Boolean
    *boleano
    *somente 2 valores

    True = verdadeiro
    False = falso

*/

/*  Undefined
    *indefinido
    não existe nada 

    Null
    *nulo
    *objedo existe porém não há nada dendtro
    *diferente de indefinido,que não existe
*/

/*  Object
    *objeto
    *propriedades/atributos
    *funcionatilades/métodos

*/

/*   Array (Vetores)
    *uma lista
    *agrupamento de dados

    ["Mayk",38,"Jorje"]



    ### TIPOS DE DADOS ###

    Conforme o ECMAScript standard temos 9 tipos de dados

*Tipos de dados:

    *Data types
        *Primitive / Primitive value

        *Structural

        *Structural Primitive

    
## Primitive (Primitivos)

 *String
 *Number
 *Boolean
 *Undefined
 *Symbol
 *BigInt

 ## Structural (Estruturais)
 *Object
    * Array
    * Map
    * Set
    * Date
    * ...
 *Function
 
 ## Structural primitive(Estrutural primitivo)

 *Null

*/


//1. Declare um variável de nome weight

// let weight;


//2. Que tipo de dado é a variável acima?

//o tipo da variavel é Undefined 
// console.log(typeof weight);


//3. Declare uma variável e atribua valores para cada um dos dados

// let name = `Leonardo`;
// let age = 27;
// let stars = 9.73;
// let isSubscribed = true;


//4. A variável student abaixo é de que tipo de dados?

//4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

//4.2 Mostre no console as seguintes mensagens /* <name> de idade <age> pesa <weight> pelos valores de cada objeto */

// let student = {}
// // student é do tipo "object"
// console.log(typeof student)

// student = {
//     name:`Leonardo`,
//     age:27,
//     weight:97.3,
//     isSubscribed:true

// }
// console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg.`)


//5. Declare uma variável do tipo array, de nome students e atribua nenhum valor, ou seja, somente um array vazio
// let students=[];

//6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

// students=[
//     student
// ]
// console.log(students)

//7. Coloque no console o valor da posição zero do array acima
// console.log(students[0])

//8. Crie um novo student e coloque ele na posição 1 do Array students

// let luiz= {
//         name:`Luiz`,
//         age:22,
//         weight:57.3,
//         isSubscribed:true
    
// }

// students[1] = luiz;
// console.log(students[1])

//9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou
//var a 
//console.log(a) 
//var a = 1 

// primeira linha, declaração.
// segunda linha, console.log(a)"Undefined".
//terceira linha, atribuição de valor para a variavel "a"



    