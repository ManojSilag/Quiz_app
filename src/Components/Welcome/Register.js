import React from 'react';
//import fire from '../../config/fire';

const style = {
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
}

    class Register extends React.Component {


        constructor(props) {
            super(props)
            this.state={ email:'',password:''}
        }

        // signup(e){
        // e.preventDefault();
        // fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        // }).then((u)=>{console.log(u)})
        // .catch((error) => {
        //     console.log(error);
        //     })
        // }

        componentDidUpdate(){
            console.log(this.state.email, this.state.password);
        }


    render(){
        return (
    <div>
    <div>
        <button class="ui button" type="submit" style={{marginTop: '20px',float: 'right', marginRight: '20px'}}>Login</button>
    </div>
    <form class="ui container form" style={style}>
        <div class="field">
            <label>Set UserName</label>
            <input type="text" name="name" placeholder="Name" onChange={e => this.setState({email:e.target.value})}/>
        </div>
        <div class="field">
            <label>Set Password</label>
            <input type="password" name="password" placeholder="Password" onChange={e => this.setState({password:e.target.value})}/>
        </div>
        <div class="field">
        </div>
        <button class="ui primary button" type="submit" onSubmit={this.signup}>Register</button>
    </form>
    </div>

        )
    }
    }

export default Register