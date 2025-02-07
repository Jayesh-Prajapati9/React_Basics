import { useRef } from 'react'
import './App.css'

// useRef is a reference to a value , such that when you changed the value the component does not RE-Renders like it does in case of useState

function App() {
  const inputRef = useRef();
  return (
    <>
      useRef Example: 
      <input ref={inputRef} type="text" />
      <button onClick={getInput} type="submit"></button>
    </>
  )

  function getInput() {
    inputRef.current().focus();
  }
}

export default App
