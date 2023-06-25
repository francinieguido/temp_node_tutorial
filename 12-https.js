//creating a server

const http = require('http');
const server = http.createServer((req, res) =>{
    if (req.url === '/'){
        res.write('Welcome to our home page')
    }
    if (req.url === '/about'){
        res.end('Here is our short story')
    }
    res.end('<h1>ooops!</h1>')
    
})

server.listen(5000)


