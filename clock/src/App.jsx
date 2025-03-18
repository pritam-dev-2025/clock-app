import { useEffect, useState } from 'react';
import './App.css'

function App() {
  //const now = new Date();
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  useEffect(()=>{
    //setTime(now.toLocaleTimeString())
    setInterval(()=>{setTime(new Date().toLocaleTimeString())},1000)
  },[])
  
  
  return (
    <>
    <div className='timerDiv'>
     <h1 className='timer'>{
        time
      }</h1>
      </div>
    </>
  )
}

export default App
