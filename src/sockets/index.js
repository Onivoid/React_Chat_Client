import io from 'socket.io-client';

//let socket = io.connect(`http://localhost:3001/`);
let socket = io.connect(`https://chat-react-socketio.herokuapp.com`);

export default socket