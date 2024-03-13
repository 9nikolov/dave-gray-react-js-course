import React from 'react'
import { useState } from 'react'

const Content = () => {

const [count, setCount] = useState(0);

const increaseCount = () =>{
  setCount(count + 1);
}

const decreaseCount = () =>{
  setCount(count - 1);
}

const resetCount = () =>{
  setCount(0);
}

  return (
    <main>
        <p style={{ fontSize: '2rem', fontWeight: 500 }}>{count}</p>
        <button className={"button-18"} style={{ marginRight: '0.5rem' }} onClick={increaseCount}>+</button>
        <button className={"button-18"} onClick={decreaseCount}>-</button>
        <br/>
        <button className={"button-18"} style={{ marginTop: '0.5rem' }}onClick={resetCount}>reset</button>
    </main>
  )
}

export default Content