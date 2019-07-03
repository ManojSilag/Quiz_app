import React from 'react';

    class Login extends React.Component {
    render(){

        const style = {
            height: '90vh',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center'
            
        }

        return (
    <div>
    <div>
    <button class="ui button" style={{marginTop: '20px',float: 'right', marginRight: '20px'}}>Register</button>
    </div>
    <form class="ui container form" style={style}>
        <div class="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name"/>
        </div>
        <div class="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />
        </div>
        <div class="field">
        </div>
        <button class="ui primary button" type="submit">Login</button>
    </form>
    </div>

        )
    }
    }

export default Login