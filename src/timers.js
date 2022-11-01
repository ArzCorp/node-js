let currentTime = 1

setInterval(() => {
	console.log('tick:', currentTime++)
}, 1000)

setTimeout(() => {
	console.log('Hola')
}, 2000)
