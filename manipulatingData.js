// Manipulando Strings e Números


// Transformar String em Número e Número em String


// String em Número

// let string = "123";
// console.log(Number(string))


//Número em String

// let number = 321;
// String(number)


//Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

// let word = 'Paralelepipedo'
// console.log(word.length);


//Contar quantas casas de números existem na variavel

// let number = 1234;
// console.log(String(number).length)


//Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

// let number = 137.01031997
// console.log(number);

// .Tofixed(3)faz com que o número quebrado fique com a quantidade de casas do numero que foi passado por argumento(3)

// number = number.toFixed(2).replace(".",",")

//.replace("1","2") faz a troca de caracteres dentro de uma string alterando de "1" para "2";

// console.log(number)


//Transforme letras minúsculas em maiúsculas. Faça o contrario disso tambem

// let word = 'Programar é muito bacana';
// console.log(word);

// .toUpperCase() transforma a string em letras MAIÚSCULAS
// word = word.toUpperCase();
// console.log(word);

// .toLowerCase() transforma a string em letras minúsculas 
// word = word.toLowerCase();
// console.log(word)


//Manipulando Strings e Arrays


//Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array . 

// //Criando Texto
// let phrase = "Eu quero viver o Amor!"
// console.log(phrase)

// // .split() faz com que a string seja separada pelo caractere colocado como argumento
// let myArray = phrase.split(" ")
// console.log(myArray)

//Depois disso , transforme  o array em um texto e onde eram espaços coloque " _ "


// // O método .join() aplicado em um array, junta o array e dentro do argumento é passado o caractere "SEPARADOR"
// let phraseWhitUnderscore = myArray.join("_")

// console.log(phraseWhitUnderscore)


//Verificar se o texto contém a palavra "Amor"


// .includes("") , utilizado para verificar palavras passadas em seu argumento;
// let phrase = "Eu quero viver Amor"
// console.log(phrase.includes("Amor"))




// Criar Array com constructor


// let myArray = new Array('a','b','c')
// console.log(myArray)


// let tenEmptyArray = new Array(10)
// console.log(tenEmptyArray)



// Contar elementos de um array

// let myArray = ["1",2,3,4,5,6]

// .length é usado para verificar a quantidade de itens de um array
// console.log(myArray.length)

// Transformar uma cadeia de caracteres em elementos de um array

// let word = "manipulação";
// let newArray = Array.from(word);
// console.log(newArray);





// // Manipulando Arrays

// let techs = ["html","css","js"]

// // **Adicionar um item no fim
// techs.push("nodejs")


// // **Adicionar um item no começo
// techs.unshift("sql")


// // **Remover item do fim
// techs.pop()


// // **Remover item do começo
// techs.shift()

 
// **Pegar somente alguns elementos do array
// techs.slice(1,3)


// **Remover 1 ou mais itens de qualquer posição do array
//removendo 1 item do array
// techs.splice(1,1)

//removendo mais itens;
// techs.splice(1,3)

// **Encontrar a posição de um elemento no array
// let index = techs.indexOf('css')
// // removendo iten dentro do array
// techs.splice(index,1)



// console.log(techs)