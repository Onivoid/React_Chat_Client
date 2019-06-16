import React, { useState } from 'react';
import { Spinner } from 'evergreen-ui';

function Load(props) {
    return(
        <div className="Load">
            <h1>Connexion aux serveur du Chat en cours</h1>
            <Spinner size={50} className="Spinner" />
        </div>
    )
}

export default Load;