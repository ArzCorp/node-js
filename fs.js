const fs = require('fs')
const path = require('path')

const obj = {
	name: 'John Doe',
	age: 30,
	email: 'johnDoe@example.com',
	dos: 'hola',
}
//fs.writeFileSync(path.join(__dirname, 'test.txt'), 'Hola mundo')
fs.writeFileSync(path.join(__dirname, 'test.json'), JSON.stringify(obj))
