// Repeat structure(Estruturas de repetição)
//for - sintaxe para loop

// for (let i=0 ; i < 10;i++)

        
// // Break- para a execução do loop
// for (let i = 1; i < 10 ; i++){
//     if(i === 5){
//         break;
//     }
//     console.log(i)
// }

// //continue- pula a execução do "momento"
// for (let i = 1; i < 10 ; i++){
//     if(i === 5){
//         continue;
//     }
//     console.log(i)
// }



// Repeat Structure While

//while
// let i = 0;
// while(i < 10){

//     i++
//     console.log(i)
    
// }
// console.log(i)

// Descobrindo parada com while ****

// let i = 3789216873;

// while( i > 10){
//     console.log(i)
//     i /= 35;
// }
// console.log(i)



// for ... of ****

// let name =`Leonardo`;

// for(let char of name) {
//     console.log(char)
// }



//for ... of (arrays) ****

// let names = [`Leonardo`,`Jorge`,`Soraya`]

// for (let name of names){
//     console.log(name)
// }




// // for ... in (usado para acessar propriedades dentro de objetos)

// let person ={
//     name:'Leon',
//     age:25,
//     weight:92.3
// }

// //sintaxe para pegar a propriedade do objeto
// for(let property in person){
//     console.log(property)
//     console.log(person[property])
// }



// let namesArray =[`Leonardo`,`Verza`,`Kelvyn`,`Kolu`,`Thomas`]




// function sourceName(name){
//     let nameUppercase = name
//     nameUppercase = nameUppercase.toUpperCase()
     

//     for(let i= 0 ;i < namesArray.length; i++){
        
//         if(namesArray[i].toUpperCase() === nameUppercase){
//             return `Entrada de ${name} permitida`
//         } 
//     } 
//     return `Entrada não permitida`
// }

// console.log(sourceName(`VERZA`))

// let nome = prompt(`Qual o seu nome?`)
// alert(`Olá , ${nome}`);