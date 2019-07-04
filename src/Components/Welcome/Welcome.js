import React from 'react';
//import Login from './Login';
import Register from './Register';
import Info from '../Info';
import fire from '../../config/fire';


class Welcome extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          user: null,
        };
    
        this.authListener = this.authListener.bind(this);
      }

      componentDidMount() {
        this.authListener();
      }

      authListener() {
        fire.auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({ user });
          } else {
            this.setState({ user: null });
          }
        })
      }

    render(){
        return(
        
            <div>
                { this.state.user ? ( <Info /> ) : ( <Register/> ) }
            </div>
        )
    }
}

export default Welcome;