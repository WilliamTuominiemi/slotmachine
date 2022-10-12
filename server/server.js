const io = require('socket.io')(8080, {
    cors: {
        origin: ['http://localhost:3000'],
    },
})

const slots = [
    {number: 0, name: 'Heart',      color: 'black'},
    {number: 1, name: 'Northstar',  color: 'red'},
    {number: 2, name: 'Lightning',  color: 'black'},
    {number: 3, name: 'Davidsstar', color: 'red'},
    {number: 4, name: 'Salmiak',    color: 'black'},
    {number: 5, name: 'Piru',       color: 'red'},
]

io.on('connect', (socket) => {
    io.emit('new-socket', socket.id)
    socket.on('slot-rotation', (rotation) => {
        console.log(rotation)
    })
})
