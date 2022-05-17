import { useState } from 'react'
import Statistics from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = good / all * 100;


  return (
    <div>
      <h1>Unicafe</h1>
      <h2>Give Feedback</h2>
      <div className='buttons'>
            <button onClick={() => setGood(good + 1)}>Good</button>
            <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
            <button onClick={() => setBad(bad + 1)}>Bad</button>
          </div>

          <h2>Statistics</h2>
      {all > 0 ? (
        <>

          <Statistics label={"good"} count={good} />
          <Statistics label={"neutral"} count={neutral} />
          <Statistics label={"bad"} count={bad} />
          <Statistics label={"all"} count={bad} />
          <Statistics label={"average"} count={average} />
          <Statistics label={"positive"} count={positive} /></>) : <p>No feedback given</p>
      }

    </div>
  )
}

export default App
