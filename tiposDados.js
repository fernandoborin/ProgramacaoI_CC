//string
console.log('thiago ngarcia');
console.log("thiago garcia");
//console.log("thiago garcia'");
//console.log('thiago garcia`);

//Expressões de linguagem
console.log(`thiago garcia 000 ${1 + 1}`); // Interpolação
console.log("thiago garcia 222 ${1 + 1}");
console.log('thiago garcia 111 ${1 + 1}');
console.log('thiago garcia' + 2 + 2);

//number
console.log(12.5 + 2);
console.log(12.5 / "thiago"); // Nan
console.log(12.5 === Infinity); // não é infinity
console.log(Infinity);

//Bollean
console.log(true);
console.log(false);

//Undefined vs null
console.log(undefined);
console.log(null);

console.log(null === null);

//Object
console.log({
    animal:"cachorro",
    idade:5,
    andar: function(){
        console.log('andar');
    }
})

//Array
console.log([
    "Coração", 
    "Figado", 
    "Rins", 
    10, 
    15, 
    30 
]);

console.log([
    "Leite", 
    "Batata", 
    "Ovo", 
    2, 
    15, 
    30 
]);


