import { Component } from "react";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOption/FeedbackOptions";
import Notification from "./Notification/Notification";



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handlerClick = ({ target: { name } }) => {

    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
           
      };
    });
        
  };

      countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
        
  };
  
    countPositiveFeedbackPercentage = () => {

        return Math.round(this.state.good * 100 / this.countTotalFeedback()) + "%";
    };


  render() {
    return (
      <>
        <Section title="Please leave feedback" >
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handlerClick} />
          <h2>Statistics</h2>
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positiveFeedback={this.countPositiveFeedbackPercentage()} >
             <Notification message="There is no feedback" /> 
          </Statistics>
        </Section>
      </>
    );
  };
 
};
