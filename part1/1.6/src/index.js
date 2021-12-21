import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button=({onClick,text})=>{
  return( 
      <button onClick={onClick}>{text}</button>
  )
}

const Statistic=({text,value})=>{
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {text==='positive'?'%':''}</td>
    </tr>
  )
}

const Statistics=(props)=>{

  const all=props.good+props.neutral+props.bad
  
  const average=(props.good-props.bad)/all

  const positive=props.good/all

  if(props.good===0 && props.neutral===0 && props.bad===0){
    return (
      <div>
        No feedback given
      </div>
    )
  }else{
    return(
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <Statistic text='good' value={props.good}/>
            <Statistic text='neutral' value={props.neutral}/>
            <Statistic text='bad' value={props.bad}/>
            <Statistic text='All' value={all}/>
            <Statistic text='average' value={average}/>
            <Statistic text='positive' value={positive}/>
         </tbody>
        </table>
      </div>
    )
  }

  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedBack</h1>
      <br/>
      <Button onClick={handleGoodClick} text='good'/>
      <Button onClick={handleNeutralClick} text='neutral'/>
      <Button onClick={handleBadClick} text='bad'/>
      <br/>

      <br/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)