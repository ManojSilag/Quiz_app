import React from 'react';
import fire from '../../config/fire';

    class Login extends React.Component {

        constructor(props){
            super(props)
            this.state={ email:'',password:''}
        }

        login(e) {
            e.preventDefault();
            fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            }).catch((error) => {
                console.log(error);
              });
          }

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
            <input type="text" name="name" placeholder="Name" onChange={e => this.setState({email:e.target.value})}/>
        </div>
        <div class="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" onChange={e => this.setState({password:e.target.value})}/>
        </div>
        <div class="field">
        </div>
        <button class="ui primary button" type="submit" onSubmit={this.onSubmit}>Login</button>
    </form>
    </div>

        )
    }
    }

export default Login