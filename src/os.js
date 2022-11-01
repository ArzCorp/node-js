const os = require('os')

setTimeout(() => {
	console.log(os.uptime())
}, 2000)

console.log(os.userInfo())
