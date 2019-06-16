import io from 'socket.io-client';

const port = process.env.PORT || 3001;
const socket = io.connect(`http://localhost:${port}/`);

export default socket