import React from 'react';
import Clock from './Clock';
import Questions from './Questions';



const Pages= props => {
    

        //console.log(this.props.data);
        const data1 = props.data[0];
        //console.log(data1)
        // const data2 = data1.map(data => {
        //     //console.log(data)
        // return(
        //  <Questions data={data.question}/>
        // )
        // });


        // data1.forEach(data => {
        //     console.log(data)
        // });
    
        //replace(/&quot;/g,'"')
    
        return (
            <div>
            <Clock/>,
            <Questions data={data1}/>
            </div>

        )
    
}

export default Pages;
