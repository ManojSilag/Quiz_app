import React from 'react';
import Clock from './Clock';
// import Questions from './Questions';



class Pages extends React.Component {

constructor(props){
    super(props)
    this.state={nextQuestion: 0}
}
    render(){
        const data1 = this.props.data;
        //console.log(data1);
        data1.forEach(myfunction);
        function myfunction(data){
            
            return console.log(data);
        }

        return (
            <div>
            <Clock/>
             <Questions data={data1}/>
            </div>
        )
    }
}
// <Questions data={data1}/>

export default Pages;
