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
    if (name === 'good') setGood(prev => prev + 1)
    else if (name === 'neutral') setNeutral(prev => prev + 1)
    else setBad(prev=>prev +1)    
  };

  const countTotalFeedback = () => {
        return good + neutral + bad;
        
  };
  
    const countPositiveFeedbackPercentage = () => {

        return Math.round(good * 100 / countTotalFeedback()) + "%";
    };


  return (
    <>
        <Section title="Please leave feedback" >
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handlerClick} />
          <h2>Statistics</h2>
          <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positiveFeedback={countPositiveFeedbackPercentage()} >
             <Notification message="There is no feedback" /> 
          </Statistics>
        </Section>
      </>
  )
}
