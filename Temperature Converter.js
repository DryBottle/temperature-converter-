// today forecast in kelvin temperature 
const Kelvin = 273;
// today forecast in celcius temperature 
let Celsius = Kelvin - 273;
// today forecast in fahrenheit temperature 
let Fahrenheit = Celsius * (9/5) + 32;
// to round down fahrenheit temperature value 
Math.floor(Fahrenheit);
// convert celsius to Newton 
let Newton = Celsius * (33/100);
// to roun down Newton value 
Math.floor(Newton);
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit`);
console.log(`The Temperature is ${Newton} Newton`);