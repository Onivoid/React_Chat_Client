import React, {useState, useEffect} from 'react';
import { toaster } from 'evergreen-ui';

function Message(props){

    return(
        <div className="Message">
            <p>{props.username} : {props.message}</p>
        </div>
    )
}

export default Message;