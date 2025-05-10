function volumeEsfera (raio){
    let pi = 3.14159
    let volume = (4.0 / 3) * pi * Math.pow (raio, 3)
    return volume
}

let resultado1 = volumeEsfera (3)
let resultado2 = volumeEsfera (15)
let resultado3 = volumeEsfera (1523)

console.log(`VOLUME = ${resultado1.toFixed(3)}`)
console.log(`VOLUME = ${resultado2.toFixed(3)}`)
console.log(`VOLUME = ${resultado3.toFixed(3)}`)