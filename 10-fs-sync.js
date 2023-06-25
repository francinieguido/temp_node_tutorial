// reading files content

const {readFileSync, writeFileSync} = require('fs');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

//write file with the content od 'first' and 'second' txt files
writeFileSync(
    './content/result-sync.txt', 'Here is the result: ${first}, ${second}',
    {flag: 'a'}
)
