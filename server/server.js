const io = require('socket.io')(8080, {
    cors: {
        origin: ['http://localhost:3000'],
    },
})

io.on('connect', (socket) => {
    io.emit('new-socket', socket.id)
    socket.on('slot-rotation', (rotation) => {
        console.log(rotation)
    })
})
