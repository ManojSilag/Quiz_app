import React from 'react';
import fire from '../../config/fire';
//import firebase from 'firebase';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const style = {
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
}


    class Register extends React.Component {

    signUp(e) {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        console.log(email,password);
        
        fire.auth().createUserWithEmailAndPassword(email, password)
        .then((u) => {
            console.log('Successfully Signed Up');
        })
        .catch((err) => {
            console.log('Error: ' + err.toString());
        })
    }

    login(e) {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        fire.auth().signInWithEmailAndPassword(email, password)
        .then((u) => {
            console.log('Successfully Logged In');
        })
        .catch((err) => {
            console.log('Error: ' + err.toString());
        })
    }

    render(){
        return (
        <form className="ui container form" style={style} >
            <div className="field">
                <div style={{ textAlign: 'center' }} >Email</div>
                <input id="email" placeholder="Enter Email.." type="text"/>
            </div>
            <div className="field">
                <div style={{ textAlign: 'center' }}>Password</div>
                <input id="password" placeholder="Enter Password.." type="text"/>
            </div>
            <div style={{display:'flex'}}>
                <button className="ui green button" style={{margin: '10px'}} onClick={this.login}>Login</button>
                <button className="ui button" style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
            </div>
        </form>
        )
    }
    }

export default Register