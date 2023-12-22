import React, { useState } from 'react'
import Section from './Section/Section'
import FeedbackOptions from './FeedbackOption/FeedbackOptions'
import Statistics from './Statistics/Statistics'
import Notification from './Notification/Notification'

export const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

   
  const handlerClick = ({ target: { name } }) => {
    switch (name) {
      case 'good':
        setGood(prev => prev + 1)
        break;
      case 'neutral':
        setNeutral(prev => prev + 1)
        break;
      case 'bad': setBad(prev => prev + 1)
        break;
      default:
    }
  }

  const countTotalFeedback = () => {
        return good + neutral + bad;
        
  };
  
    const countPositiveFeedbackPercentage = () => {

        return Math.round(good * 100 / countTotalFeedback()) + "%";
    };


  return (
    <>
        <Section title="Please leave feedback" >
          <FeedbackOptions options={Object.keys({good, neutral, bad})} onLeaveFeedback={handlerClick} />
          <h2>Statistics</h2>
          <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positiveFeedback={countPositiveFeedbackPercentage()} >
             <Notification message="There is no feedback" /> 
          </Statistics>
        </Section>
      </>
  )
}
