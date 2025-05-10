//arrow function
let media = ( nota1, nota2) =>(( nota1 * 3.5) + (nota2 * 7.5)) / 11

let media1  = media(5, 7.1)
let media2  = media(0, 7.1)
let media3  = media(10, 10)

console.log(`MÉDIA = ${media1.toFixed(5)}`)
console.log(`MÉDIA = ${media2.toFixed(5)}`)
console.log(`MÉDIA = ${media3.toFixed(5)}`)