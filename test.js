const json = require('./index.js')

console.log(json`string:  ${ 'double quote "' }`)
console.log(json`number:  ${ 1337 }`)
console.log(json`boolean: ${ true } & ${ false }`)
console.log(json`null:    ${ null }`)
console.log(json`array:   ${ ['double quote "', null, 1337] }`)
console.log(json`object:  ${ { doubleQuote: '"', doubleNumber: 1.337e+3 } }`)