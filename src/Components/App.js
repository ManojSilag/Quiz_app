import React from 'react';
import Welcome from './Welcome/Welcome';
// import Info from './Info';
import Pages from './Pages';
//import quiz from '../apis/quiz';
//import fire from '../config/fire';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends React.Component {

  // authListener() {
  //   fire.auth().onAuthStateChanged((user) => {
  //     console.log(user);
  //     if (user) {
  //       this.setState({ user });
  //       //localStorage.setItem('user', user.uid);
  //     } else {
  //       this.setState({ user: null });
  //       //localStorage.removeItem('user');
  //     }
  //   });
  // }

  constructor(props){
    super(props)
    this.state = { user:{} ,data: [] }
  }


  // componentDidMount(){
  //   const result =  quiz.get('/search',{
  //   params:{ type: "multiple" },
  // })
  // }
  //https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple

  componentDidMount(){
      fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
      .then(resp => resp.json())
      .then(result =>this.setState({data: result.results}) );
      //this.authListener()
  };
    
    componentDidUpdate(){
     // console.log(this.state.data);
    }
    

  render(){
      return (
        <Router>
         <Route path="/" exact component={Welcome}/>
         <Route path="/Pages" render={(props) => <Pages {...props} data={this.state.data} />}/>

        </Router>
      )
  }
}

export default App

// <Info/>
// <Pages data={this.state.data}/>