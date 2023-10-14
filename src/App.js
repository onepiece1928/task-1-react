
import './App.css';

import {useState} from 'react'

function App() {

  const [count,setCount] = useState(0)

  return (
    <div className="App">
      <div className='container'>
        <h1>Responsive Paragrah Word Counter</h1>
        <textarea name="textarea" id="" cols="30" rows="10" onChange={(e)=>{
          let text = e.target.value
          let words = text.trim().split(/\s+/);
          setCount(words.length)
        }} ></textarea>
        <div className='result' >Word Count: {count}</div>
      </div>
    </div>
  );
}

export default App;