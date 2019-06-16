import React, { useState, useEffect, useRef} from 'react';
import Message from '../Message';
import { TextInput, Button, toaster } from 'evergreen-ui';

function Chat(props) {

    useEffect(() => {
        toaster.closeAll()
        toaster.success('Vous êtes connecté au Chat')
    }, []);

    useEffect(() => {
        socket.on('newMessage', (msg) => {
            setListMessage(listMessage => [...listMessage, msg])
            messageFocus.current.scrollTop = messageFocus.current.scrollHeight;
        })
    }, [])

    const socket = props.socket;

    const username = props.username;

    const [ message, setMessage ] = useState('');

    const [listMessage, setListMessage] = useState([]);

    const messageFocus = useRef(null);

    function emitEvent(e){
        e.preventDefault();
        socket.emit(`newMessage`, {username,message}); 
        setMessage('');
    }


    return(
        <div className="Chat">
            <div className="MessagesDisplayer" ref={messageFocus}>
                { listMessage.map( (n, index) => {
                    return(<Message username={n.username} message={n.message} id={index} />)
                }) }
            </div>
            <form className="MessageWritting"  onSubmit={emitEvent}>
                <TextInput onChange={(e) => setMessage(e.target.value)} value={message} className="MessageInput"/>
                <div>
                    <Button onSubmit={emitEvent} marginLeft={10} iconAfter="direction-right" className="SendMessage">Envoyer</Button>
                </div>
            </form>
        </div>
    )
}

export default Chat;