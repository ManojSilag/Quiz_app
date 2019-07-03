import React from 'react';
import Login from './Login';
import Register from './Register';

class Welcome extends React.Component{
    render(){
        return(
            <Login/>
            <Register/>
        )
    }
}

export default Welcome;