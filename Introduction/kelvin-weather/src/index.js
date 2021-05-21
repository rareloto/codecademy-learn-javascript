/**
 * Kelvin Weather
 * A project in Introduction to JavaScript on Codecademy
 */

// Today's forecast in Kelvin
const tempInKelvin = 307.15;
// Convert Kelvin to Celsius
const tempInCelsius = tempInKelvin - 273.15;
// Convert Celsius to Fahrenheit (rounded down)
const tempInFahr = Math.floor(tempInCelsius * (9/5) + 32);

// Log the temperature in Fahrenheit to the console
console.log(`Today's temperature is ${tempInFahr} degrees Fahrenheit.`)

/**
 * Extra practice:
 * Celsius to Newton
 */
const tempInNewton = Math.floor(tempInCelsius * (33/100));

console.log(`${tempInKelvin} K
= ${tempInCelsius} degrees Celsius
= ${tempInFahr} degrees Fahrenheit
= ${tempInNewton} degrees Newton`)