//Домашнее задание по теме: regular expression

let string = 'He asked: \'Aren\'t we going to find out what is going on here?\'. She replied: \'We aren\'t.\'';
let regExp = /'(?!t)/ig;
console.log(string.replace(regExp, '"'));


//aren(?<arent>')t