import React, { Component } from 'react';
import { Link } from "react-router-dom";
import  SignUp from "./SignUp";
import  SignIn from "./SignIn";
import buttonImage from '../submit.jpg'

import "../App.css";


import Context from '../Context/Context'


class Survey extends Component {

    static contextType = Context;

    constructor(props){
      super(props);

      this.state = {
          user : '',
          email: '',

          answers: {
              answer1: '',
              answer2: '',
              answer3: ''
              
          },
          isLoggedIn: false,
          isSubmitted: false
      };


      this.answerSelected = this.answerSelected.bind(this);
      this.handleSurveySubmit = this.handleSurveySubmit.bind(this);
    }

    handleSurveySubmit(e) {
      
        e.preventDefault();

        this.setState({
            isSubmitted: true
        }, () => {
            console.log(this.state.isSubmitted)
        })
    }

    answerSelected(e) {
        if(e.target.checked) {
            e.target.parentNode.classList.add('label-checked');
        }
        var radios = Array.from(document.querySelectorAll('input[type="radio"]'));
        radios.forEach(radio => {
            if(radio.checked) {
                radio.parentNode.classList.add('label-checked');
            } else {
                radio.parentNode.classList.remove('label-checked');
            }
        });
        var answers = this.state.answers;
        var value = e.target.value;
        var name = e.target.name;
        answers[name] = value;
        this.setState({answers});
        console.log(this.state);
    }

    handleOptionChange = (changeEvent) => {
        this.setState({
          answerSelected: changeEvent.target.value
        });
      }

   

    logUser = (user, Username, email) => {
        this.setState({user, Username, email, isLoggedIn: true });
        console.log(user, Username, email);
    }

  render(){
      let currentDisplay = '';
        
      console.log(this.state.isLoggedIn)

      if(this.context.isAuth === false) {
          currentDisplay = <SignUp logUser={this.logUser} changeUsername={this.changeUsername}/>
      } else if(this.context.isAuth  === true && this.state.isSubmitted === false) {
          currentDisplay = <form onSubmit={this.handleSurveySubmit}>
             <div className='survey-background'>
             <div className="card ">
                 <h3 className="survey-title">Personnel Survey</h3>
                 <div className="survey-question">
                     <h3>Gender</h3>
                     <label className="check-container">
                         <input type="radio" name="answer1" value="M" onClick={this.answerSelected} onChange={this.handleOptionChange}/> Male
                     </label>
                     <label className="check-container">
                         <input type="radio" name="answer1" value="F" onClick={this.answerSelected} onChange={this.handleOptionChange} /> Female
                     </label>
                 </div>
                 
                 <div className="survey-question">
                     <h3>Highest Level of Education</h3>
                     <label className="check-container">
                         <input type="radio" name="answer2" value="High School" onClick={this.answerSelected} onChange={this.handleOptionChange} /> High School
                    </label>
                    <label className="check-container">
                         <input type="radio" name="answer2" value="Associate Degree" onClick={this.answerSelected} onChange={this.handleOptionChange}/> Associate 
                    </label>
                     <label className="check-container">
                         <input type="radio" name="answer2" value="College Degree(Bsc)" onClick={this.answerSelected} onChange={this.handleOptionChange}/> Undergraduate
                    </label>
                     <label className="check-container">
                         <input type="radio" name="answer2" value="Masters" onClick={this.answerSelected} onChange={this.handleOptionChange} /> Graduate
                    </label>
                    
                     <label className="check-container">
                         <input type="radio" name="answer2" value="Masters" onClick={this.answerSelected} onChange={this.handleOptionChange}/> Post-Graduate
                    </label>
                 </div>
                 
                 <div className="survey-question">
                     <h3>Job status</h3>
                     <label className="check-container">
                         <input type="radio" name="answer3" value="Employed" onClick={this.answerSelected} onChange={this.handleOptionChange}/> Employed
                    </label>
                    <label className="check-container">
                         <input type="radio" name="answer3" value="Unemployed" onClick={this.answerSelected} onChange={this.handleOptionChange} /> Unemployed
                    </label>
                    
                    <label className="check-container">
                         <input type="radio" type="radio" name="answer3" value="Student" onClick={this.answerSelected} onChange={this.handleOptionChange}/> Student
                    </label>
                 </div>
                 <button  className="btn btn-sm alert" type="submit" ><img src={buttonImage} width="100vh" height="60vh"></img></button>
                

             </div>
             </div>
        </form>

     } else if (this.state.isSubmitted === true) {
        currentDisplay = <div className='thankyou'>
            <h2>Thanks for taking this survey! </h2>
            <Link to='/results'> Click me for for the results!</Link>

        </div>
     }

    return(
      <div>
         {currentDisplay}
      </div>
    );
  }
}

// TODO: validate survey entry before submission


export default Survey;
