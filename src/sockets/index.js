import io from 'socket.io-client';

let socket;

(process.env.NODE_ENV === 'dev') ? socket = io.connect(`http://localhost:3001/`) : socket = io.connect(`https://chat-react-socketio.herokuapp.com`);

export default socket