import React from 'react';
import fire from '../config/fire';
import {Link} from 'react-router-dom';


class Info extends React.Component {

  logout() {
    fire.auth().signOut();
  }
  render(){
      return (
        <div>
        <button class="ui button" style={{marginTop: '20px',float: 'right', marginRight: '20px'}} onClick = {this.logout}>Logout</button>

        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',height:'100vh'}}>
            <h2 class="ui center aligned icon header">
            <i class="circular chess icon"></i>
            Quiz game<br/>
            Type: General Knowledge<br/>
            Questions: 10<br/>
            Duration: 15min
            </h2>
            <Link to="/Pages">
            <button class="ui green button">start</button>
            </Link>
        </div>
        </div>
      )
  }
}

export default Info