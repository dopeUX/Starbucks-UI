import React from 'react';
import Header from './components/Header';

import Dashboard from './components/Dashboard';
import CoffeeDetails from './components/CoffeeDetails';
import reactNotificationsComponent from 'react-notifications-component';


import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';

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