const { PORT } = require('./src/constants.js')

const http = require('http')

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		if (req.method === 'GET') return res.end('Homw Page')
		return res.end('Method not allowed')
	}

	return res.end('404 not found')
})

server.listen(PORT)

console.log(`Server is listening on port ${PORT}`)
