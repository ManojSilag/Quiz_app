import React from 'react';
// import Welcome from './Welcome/Welcome';
//import Info from './Info';
import Pages from './Pages';
//import quiz from '../apis/quiz';

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {data: [] }
  }

  // componentDidMount(){
  //   const result =  quiz.get('/search',{
  //   params:{ type: "multiple" },
  // })
  // }

  componentDidMount(){
      fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
      .then(resp => resp.json())
      .then(result =>this.setState({data: result.results}) );
  };
    
    componentDidUpdate(){
     // console.log(this.state.data);
    }
    

  render(){
      return (
        //   <Welcome/>
        // <Info/>
        <Pages data={this.state.data}/>
      )
  }
}

export default App