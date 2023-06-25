// NODE PACKAGE MANAGER
// npm - global command, comes with node
// npm -- version

// local dependency - use it only in this particulcar project
// npm i <packageName>

// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// dependencies like bootstrap can be installed

const  _= require('loadash')
const items = [1, [2, [3, [4]]]]
const newitems = _.flattenDeep(items)
console.log(newitems)

