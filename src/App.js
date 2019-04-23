import React, { Component } from 'react';
import  Head from './components/Head/head';
import  Body from './components/Body/body';
import './App.css';

class App extends Component {
    render() {
        return (
        <div>
            <Head/>
            <Body/>
        </div>
        );
    }
}

export default App;
