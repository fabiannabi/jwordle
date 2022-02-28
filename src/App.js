
import './App.css';
import React, {useState} from 'react';

function App() {


  //VARIABLE SET
  const randomWord = "longword".split('')
  
  const todaysWordState={}



  randomWord.forEach((letter, index)=>{
    if(!todaysWordState[letter]){
      todaysWordState[`word_${index}`] = "" 
    }
    else{
      return
    }
  })

 const inputlist = Object.keys(todaysWordState)

  const [state, setState] = useState(todaysWordState); 


 function checkWord (event) {
  event.preventDefault()
  console.log(state)
 }

 function handleInputChange(event){
  event.preventDefault()
  const value =  event.target.value
  setState( {...state,[event.target.name]:value  } );
 }

  return (
    <div className="App">
      <form onSubmit={checkWord}>
        {
          inputlist.map((letter) => (
            <input key = {letter} name={letter} value={state.letter} onChange={handleInputChange} maxLength ="1"></input>
          ))
        }

        <button type='submit'>send</button>
      </form>
  
      <div>my name is {state.w_1}</div>
      <div>my name is {state.w_2}</div>
    </div>
  );
}

export default App
