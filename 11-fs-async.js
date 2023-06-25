// reading files content

//utf8 parameter for showin string of content
//otherwise it show the buffer (a bunch of values)
const {readFile, writeFile} = require('fs');

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) =>{
    if (err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err){
            console.log(err)
            return
        }  

        writeFile(
            './content/result-sync.txt', 'Here is the result: ${first} ${second}',
            (err, result) =>{
                if(err) {
                    console.log(err)
                    return
                }
                console.log(result)
            })    
    })
})

console.log('starting next task')