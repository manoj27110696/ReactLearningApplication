import React, {useState, useEffect} from 'react';
import './App.css';





function App() {
  const [emotion,setEmotion]= useState("happy");
  const[secondary,setSecondary]= useState("1")
  useEffect(()=> {
    console.log(`Its ${emotion} around here`);
  },[emotion]);

  useEffect(()=> {
    console.log(`Secondary is ${secondary}`);
  },[secondary]);
  
  
  return (
    <>
    <h1>Current emotion is {emotion} and {secondary}</h1>
    <button onClick={() => setEmotion("checking")}>
      Checking
    </button>
    <button onClick={() => setEmotion("happy")}>  Happy</button>
    <button onClick={() => setSecondary("2")}>Secondary</button>
    <button onClick={() => setEmotion("sad")}>Sad</button>
    <button onClick={() => setEmotion("angry")}>Angry</button>
    </>
  );
}

export default App;
