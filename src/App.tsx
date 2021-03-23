import React from 'react'
import "./App.scss";
import Router from '@router/index'
import Container from '@layout/Container';

import firebase from './Firebase';

const App = () => {

    console.log('firebase', firebase)
    return (
        <Container>
            <Router />
        </Container>
    )
}

export default App;