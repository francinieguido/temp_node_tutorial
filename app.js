

const http = require('http')
// using Event Emitter API
const server = http.createServer()
// emits request event
// suscribe to it / listen to it / respond to it
server.on('request', (req, res) =>{
    res.end('Welcome')
})

server.listen(5000)
