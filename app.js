const  app = require('./config/server.js')
const rotaHome =  require('./app/routes/home')(app)

app.listen('3000', function(){
    console.log("Servidor rodando na porta 3000");
    const vcsl = require('vcsl')
    vcsl.generateKey()
    
    let mensagem = 'p'
    let encrypt = vcsl.encrypt(mensagem)
    let decrypt = vcsl.decrypt(encrypt)
    
    console.log("mensagem normal: "+ mensagem +"\n mensagem criptografada: "+encrypt + "\n mensagem descriptografada: "+decrypt);
    
});