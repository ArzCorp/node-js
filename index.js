const fs = require('fs')

fs.writeFileSync('./src/static/text.txt', ' Hello World', {
	flag: 'a',
})

const fileContent = fs.readFileSync('./src/static/text.txt', 'utf8')
console.log(fileContent)
