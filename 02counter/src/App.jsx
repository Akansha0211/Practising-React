import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, hiteshCounter] =useState(15);
 //let counter = 5;
 const addValue = ()=>{
  if(counter <20){
    counter = counter+1;
    hiteshCounter(counter)
  }
  
 }
 const removeValue = ()=>{
  if(counter >0){
    hiteshCounter(counter-1);
  }
  
 }

  return (
    <>
     <h1>React hooks</h1>
     <h2>Counter value : {counter}</h2>
     <button onClick={addValue}>Add value{counter}</button>
     <br />
     <button onClick={removeValue}>Remove value{counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
