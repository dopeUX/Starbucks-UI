import React from 'react';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';

function Notifications(){
return <div className="app-container">
    { store.addNotification({
    title: "Wonderful!",
    message: "teodosii@react-notifications-component",
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
    duration: 5000,
    container: 'top-right',
    onScreen: true
     }
   })
   }
    </div>
}

export default Notifications;