const { PORT } = require('./src/constants.js')

const http = require('http')

const server = http.createServer((req, res) => {
	console.log(req)
	res.end('Welcome (o _ o)/')
})

server.listen(PORT)

console.log(`Server is listening on port ${PORT}`)
