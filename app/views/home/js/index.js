module.exports = function(app){const vcsl = require('vcsl')
vcsl.generateKey()

let mensagem = 'p'
let encrypt = vcsl.encrypt(mensagem)
let decrypt = vcsl.decrypt(encrypt)

console.log("mensagem normal: "+ mensagem +"\n mensagem criptografada: "+encrypt + "\n mensagem descriptografada: "+decrypt);
}
