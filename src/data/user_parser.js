var fs = require('fs');

var data = fs.readFileSync('./users.csv')
  .toString() // convert Buffer to string
  .split('\n') // split string to lines
  .map(e => e.trim()) // remove white spaces for each line

var header = data[0].split(',')
var content = data.slice(1)

var arr = content.map(e => {
  var col = e.split(',')
  console.log(col)
  var obj = {}  
  for (let i=0; i<col.length; ++i)
    obj[header[i]] = col[i]
  return obj
})

arr.map(a => {
  a.courses = a.courses.split('.')
  return a
})

var users = {}
for (let i=0; i<arr.length; ++i)
  users[arr[i].id] = arr[i]

console.log(users)
