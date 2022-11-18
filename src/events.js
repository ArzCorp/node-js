import { EventEmitter } from 'events'

const eventEmitter = new EventEmitter()

eventEmitter.on('event', (data) => {
	console.log(data)
})

eventEmitter.emit('event', { message: 'Hello World' })
