import { promisify } from 'util'
import { readFile } from 'fs'

const getFileData = promisify(readFile)

getFileData('./src/static/text.txt', 'utf8').then((data) => {
	console.log(data)
})
