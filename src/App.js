
import './App.css';
import React, {useState} from 'react';
import { isCompositeComponentWithType } from 'react-dom/cjs/react-dom-test-utils.development';

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
  const [answer, setAnswer] = useState([]); 


  function checkWord (event) {
    event.preventDefault()
    let attemptLetter = Object.values(state)
    let attemptWord = attemptLetter.join('')
    
    wordleCheck (attemptWord)
    letterCheck (attemptLetter)
    console.log(answer)
  }

  function wordleCheck (attemptLetter){
    if (attemptLetter === randomWord.join('')){
      console.log('corect')
    }
    else{
      console.log('incorrect')
    }
  }

  function letterCheck (attemptWord){
    let coloIndex = []
    attemptWord.forEach((letter, i)=>{
        console.log(randomWord[i])
      if( randomWord[i] === letter){
        coloIndex.push(i)
      }
      else{
        return
      }
    })
    colorChange(coloIndex)
  }


function colorChange(coloIndex){
  let inputs =  document.getElementsByTagName('input');
  let a= Object.values(inputs)
  console.log(inputs)
  coloIndex.forEach((cell)=>{
    inputs[cell].style.background = 'green'
  })

  for (var i = 0; i < inputs.length; i++){
   
   if(inputs[i].style.background === 'green'){
   }
   else{
    inputs[i].style.background = 'red'
   }
  }

}



  function handleInputChange(event){
    event.preventDefault()
    const value =  event.target.value.toLowerCase()
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
