import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4:0,5:0 }
const copy = { ...points }

const Button=({onClick,text})=>{
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [max, setMaxSelected] = useState(0)
  function randomInteger(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
const handleClickRandom=()=>{
  let random=randomInteger(0,5)
  setSelected(random)
}


const handleClickVote=()=>{
// increment the property 2 value by one
  copy[selected] += 1
  
  setMaxSelected(cualEsLaVariableMasAlta(copy))
}

function cualEsLaVariableMasAlta(copy) {

  var max = -Infinity; 
  var maxVar = null;
  for (var key in copy) {
     var num = copy[key];

     if (num > max) {
         max = num;
         maxVar = key;
     }

     max = (num > max && num) || max;
  }

    return maxVar;
  }

  return (
    <div>
      {max}
      <h1>Anecdote of the day</h1>
      <br/>
      {props.anecdotes[selected]}
      <br/>
      has {copy[selected]} votes
      <br/>
      <Button onClick={handleClickVote} text='Vote'/>
      <Button onClick={handleClickRandom} text='next anecdote'/>
      <br/>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[max]}
      <br/>
      has {copy[max]} votes
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)