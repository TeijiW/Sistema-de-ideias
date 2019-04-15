import React, { Component } from 'react';
import  Head from './components/Head/head';
import  Body from './components/Body/body';
import './App.css';

class App extends Component {
    render() {
        return (
        <React.Fragment>
            <Head/>
            <Body/>
        </React.Fragment>
        );
    }
}

export default App;
