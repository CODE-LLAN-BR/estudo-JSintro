//  Expressões e operadores *****


// Operadores Aritiméticos


// Multiplicação (*)
//console.log(5*5) // = 25

// Divisão (/)
//console.log(12/2) // = 6

// Soma(+)
//console.log(3+7) // = 10

// Subtração (-)
//console.log(55-26) //= 29

// Resto da divisão (%) (Remainder)
//let remainder 
//remainder = 2 % 10
//console.log(remainder)

// Incremento (++)
//let increment = 0
//increment++ (+1) // = 1;
//console.log(increment)

// // Decremento (--)
// let decrement = 5
// decrement--
// console.log(decrement)  // = 4

// Exponencial (**)
// console.log(2**3)

//grouping operator "()"
// let total = 2 + 3 * 5 //= 17

// let total = (2+3) * 5 // = 25
// console.log(total)



//Operadores de comparação  *****

// Irá comparar os valores e retornar um boolean como resposta a comparação

// let one = 1 
// let two = 2

// (==) igual a:
// console.log(two == 1) //false
// console.log(ibe == "1") //true

// (!=) diferente de:
// console.log(one != two)//true
// console.log(one != 1)//false
// console.log(one !="1")//false
// console.log(two != 1)//true
// console.log(two != 2)//false


// (===) estritamente igual a :
// console.log(one === "1") // false
// console.log(one === 1) // true

// (!==) estritamente diferente de :
// console.log(two !== "2") // true
// console.log(two !== 2) // false
// console.log(two !==two) // false

// (>) Maior que :
// console.log(one > two)// false
// console.log(two > one )// true

// (>=) Maior ou igual a
// console.log(one >= 1) // true
// console.log(one >= 0) //true 
// console.log(one >=two) // false

// (<) Menor que :
// console.log(one<two) // true
// console.log(3<two) // false

//(<=)Menor igual a :
// console.log(1<=3)//true
// console.log(3<=one)//false
// console.log(one<=two)//true

// Operadores de atribuição (Assignment)
// let x

// Assignment(atribuição)
// x = 1

// Addition assignment (+=)
// x = x +2
// x += 2

// Subtraction assignment (-=)
// x = x-1
// x -= 1

// Multiplication assignment(*=)
// x = x * 2
// x *= 2

// Division assignment(/=)
// x = x/2
// x /= 2

//remainder (%=)
// x %= 2

//exponetiation (**=)
//  x **= 2





// Operadores lógicos(logical operators)

// - 2 valores booleanos , quando verificados, resultara em verdadeiro(true) ou falso(false)

// let pao = true
// let queijo = true

// // AND (&&) (e)
// console.log(pao && queijo) // = true

// // OR (||) (ou)
// console.log(pao || queijo) // = true

// // Not (!) (negar) se for false se torna true , se for true torna-se false
// console.log(!pao) //= false





// Operador Condicional (Ternário)

// Dependendo do valor da condição, nós receberemos valores diferentes

//Condição então valor 1 se não valor 2
// condition? value1 : value2

// Exemplos:
// Café da manhã top 

// let pao = false
// let queijo = false 

// const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'


// // const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'

// console.log(niceBreakfast)

// Maior de 18

// let age =16
// const canDrive = age >= 18 ? 'Can drive':`Can't drive`

// console.log(canDrive)



// Operador de String (String Operator)

// Comparision (Comparação)
// console.log('a' == 'a') //= true

// // concatenation (Concatenação)
// let alpha = 'alpha'

// // console.log( alpha + 'bet')
// alpha += 'bet'


// // Retorna a união de duas Strings
// console.log(alpha + 380)




/* 
        Type conversion(typecasting) vs Type coersion

// O falsy é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

// /*
// 	Todos os valores abaixo seriam representados como false em um boolean.
// 		false
//     0
//     -0
//     ""
//     null
//     undefined
//     NaN
// */

// console.log( NaN ? 'verdadeiro' : 'falso' )
// já o truthy é o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

// /* 
// 	Todos os valores abaixo seriam representados como false em um boolean.
// 		true
//     {}
//     []
//     1
//     3.23
//     "0"
//     "false"
//     -1
//     Infinity
//     -Infinity
// */

// console.log( Infinity ? 'verdadeiro' : 'falso' )



// Operator precedence
    // Precedência de operadores

// De cima para baixo, do mais importante ao menos importante.

// * grouping                      ( )
// * negação e incremento          ! ++ --
// * multiplicação e divisão       * /
// * adição e subtração            + -
// * relacional                    < <= > >=
// * igualdade                     == != === !==
// * AND                           && 
// * OR                            ||
// * condicional                   ?:
// * assignment (atribuição)       = += -= *= %= 