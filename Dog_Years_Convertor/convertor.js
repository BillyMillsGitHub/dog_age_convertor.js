//creating const variable to display my age, ready for conversion to 'dog years'
const myAge = 28;
//saving value 2 to variable earlyYears, remaining as var as this value will change.
let earlyYears = 2;
earlyYears *= 10.5
//setting result equal to variable called laterYears
let laterYears = myAge - 2;
//calculating number of dog years accounted to laterYears.
laterYears *= 4;
console.log(myAge);
console.log(earlyYears);
console.log(laterYears);
//adding values together to display my age in dog years.
let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);
//initialising my name as a variable and displaying it in lower case.
const myName = 'Billy'.toLocaleLowerCase();
console.log(myName);
/*printing an example of interpolation to the console. Which displays a string containing the myAge
variable as my age in human years, followed by a conversion to my age in dog years through the myAgeInDogYears variable.
*/
console.log(`my name is ${myName}. I am ${myAge} in human years which is ${myAgeInDogYears} 
years old in dog years.`);
