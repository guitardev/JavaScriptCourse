let fname  = 'thanamwat';
const height = 171;
let isMale = true;
let city=null;
let bigNumber=10n;


console.log(fname,height,isMale,city,bigNumber);

const person = {
    name: 'Thanawat',
    height : 175,
    city: 'Bangkok'

}
console.log(person);

person.height=180;
console.log(person)
person.weight = 60;
console.log(person)

const numbers = [1,1,2,3,54,6,7,8,90]
console.log(numbers[4])

numbers.push(3)

console.log(numbers)

numbers.pop()
numbers.unshift(88)
console.log(numbers)

numbers.shift(3)
console.log(numbers)

let result = 17 / 2 * 3;
console.log(result);

const age = 17;
if ( age === 18){
    console.log('age more than 18');
} else {
    console.log( 'age less than or equal to 18');
}