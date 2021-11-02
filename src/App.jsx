import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';


function App(){
    return (
    <div>
    <ReactNotification />
    <Header>
    </Header>
    <Dashboard>
       
    </Dashboard>
    </div>
    );
}


export default App;
