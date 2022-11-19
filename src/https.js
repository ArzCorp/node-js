import { PORT } from './constants.js'
import http from 'http'
import { readFileSync } from 'fs'

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		if (req.method === 'GET') return res.end('Homw Page')
		return res.end('Method not allowed')
	}

	if (req.url === '/json') {
		const jsonFile = readFileSync('./test.json')
		return res.end(jsonFile)
	}
	const html = readFileSync('./src/static/404.html')
	return res.end(html)
})

server.listen(PORT)

console.log(`Server is listening on port ${PORT}`)
