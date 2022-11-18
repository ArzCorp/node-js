import { writeFileSync, readFileSync } from 'fs'

writeFileSync('./src/static/text.txt', ' Hello World', {
	flag: 'a',
})

const fileContent = readFileSync('./src/static/text.txt', 'utf8')
console.log(fileContent)
