import socketio from 'socket.io-client';

const socket = socketio('http://192.168.42.130:3234', {
    autoConnect: false
});

function subscribeToNewDevs(subscribeFunction) {
    socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    }

    socket.connect();

}

function disconnect() {
    if(socket.connected) {
        socket.disconnect();
    }
}

export {connect, disconnect, subscribeToNewDevs};