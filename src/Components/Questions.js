import React from "react";


const wrapper = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: "10px",
  backgroundColor: "#fff",
  color: "#444",
}
const container ={
  marginTop: "5%",
  border: "1vw solid green",
  padding: "2vw",
  borderImage:" radial-gradient(circle, rgba(87,209,167,1) 33%, rgba(232,70,252,1) 100%) 20"
}

class Questions extends React.Component{

    componentDidUpdate(){
        
        const data = this.props.data;
        console.log(data);
        document.querySelector('#expression').innerHTML=`${data.question}`;
        const correctAns = data.correct_answer;
        const answers = data.incorrect_answers;
        answers.push(correctAns);
        console.log(answers);

        function shuffleArray(answers) {
          for (var i = answers.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var temp = answers[i];
              answers[i] = answers[j];
              answers[j] = temp;
          }
          //console.log(answers);

          answers.forEach(myFunction);
          function myFunction(item) {
            document.getElementById("domo").innerHTML += `
            <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="example2"/>
              <label id="1">${item}</label>
            </div>
          </div>
          `
          }
        }
          shuffleArray(answers);
    }
    render(){
        return (
                <div className="ui container" style={container}>
                  <div style={{display:'flex',flexDirection:'column'}}>
                    <h2 className="ui header">
                    <i className="lightbulb icon"></i>
                    <div className="content">
                      <p id ="expression"></p>
                    </div>
                    </h2>
                    <div>
                      <div class="ui form" style={{marginTop: "5%"}}>
                        <div class="grouped fields" id="domo" style={wrapper}></div>
                      </div>
                    </div> 
                  </div>
                  <div style={{marginTop: "10%"}}>
                    <div class="ui buttons">
                      <button class="ui button positive">save</button>
                        <div class="or"></div>
                      <button class="ui  button">Visit Later</button>
                    </div>
                    <button class="ui red button" style={{float:'right'}}>End Test</button>
                  </div>
                </div>
        )
    }
}

export default Questions
