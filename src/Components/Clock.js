import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';

class Clock extends React.Component{


    render(){
        return (
            <div style={{float:'right',marginRight:'10px',marginTop: '10px'}}>
                <ReactCountdownClock seconds={600}
                color="#00663d"
                alpha={0.9}
                size={100}
                weight={2}
                />
             </div>
        )
    }
}

export default Clock;

//onComplete={myCallback}