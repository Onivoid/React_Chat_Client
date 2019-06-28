import React, { useState } from 'react';
import Chat from '../../components/Chat/Chat';
import { Button, TextInput, toaster } from 'evergreen-ui';

function Home(props){

    const [username, setUsername] = useState('');

    const [isAuth, setIsAuth] = useState(false);

    const socket = props.socket;

    function checkUsername(event){
        event.preventDefault()
        return username === '' || username === undefined
            ? toaster.danger("Le champ 'Pseudo' est vide.")
            : (toaster.closeAll(),setIsAuth(true),socket.emit('newUser'))
    }

    return isAuth 
        ? 
            <Chat socket={props.socket} username={username} />
        : 
            (
                <div className="Home">
                    <div>
                        <h1>FoxStudio - React & Socket.io chat</h1>
                    </div>
                    <form onSubmit={checkUsername}>
                        <TextInput placeholder='Votre Pseudo' onChange={ (e) => setUsername(e.target.value) } />
                        <Button onSubmit={checkUsername} marginLeft={10} iconAfter="arrow-right">Entrer dans le chat</Button>
                    </form>
                </div>
            ) 
}

export default Home;