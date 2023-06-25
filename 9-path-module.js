// In some cases is necessary to get OSs info or the path of a file


// this is  an inbuilt module
const os = require('os')

// info about current user
const user = os.userInfo()
//console.log(user)

// method returns the system uptime in seconds
console.log('The System uptime is ', os.uptime(), 'seconds')

const path = require('path');
console.log(path.sep)

//getting file path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// get path and base file (test.txt)
const base = path.basename(filePath)
console.log(base)

//get absoulte path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)