import React from 'react';


class Info extends React.Component {
  render(){
      return (
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',height:'100vh'}}>
            <h2 class="ui center aligned icon header">
            <i class="circular chess icon"></i>
            Quiz game<br/>
            Type: General Knowledge<br/>
            Questions: 10<br/>
            Duration: 15min
            </h2>
            <button class="ui green button">start</button>
        </div>
      )
  }
}

export default Info