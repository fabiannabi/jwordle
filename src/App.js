
import './App.css';
import React, {useState} from 'react';

function App() {


  const [state, setState] = useState({
    w_1:"", 
    w_2:""
  }); 

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
        <input name='w_1' value={state.w_1} onChange={handleInputChange} maxLength ="1"></input>
        <input name="w_2" value={state.w_2} onChange={handleInputChange} maxLength ="1"></input>
        <button type='submit'>send</button>
      </form>
  
      <div>my name is {state.w_1}</div>
      <div>my name is {state.w_2}</div>
    </div>
  );
}

export default App
