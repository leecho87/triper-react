import React, { useState } from 'react'
import Router from '@router/index'
import Container from '@layout/Container';
import firebase from './myFirebase';

import "./App.scss";


const App = () => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    
    return (
        <Container>
            <Router isLoggedIn={isLoggedIn} />
        </Container>
    )
}

export default App;