import React from 'react';
import Clock from './Clock';



const Pages= props => {
    

        //console.log(this.props.data);
        const data1 = props.data;
        console.log(data1)
        const data2 = data1.map(data => {
        return(
            <h2 class="ui header">
            <i class="lightbulb icon"></i>
                <div class="content">
                {data.question} 
                </div>
            </h2>
        )
        });
    
    
        return (
            <div>
            <Clock/>,
            {data2}

            </div>
            
            // <Clock/>
        )
    
}

export default Pages;