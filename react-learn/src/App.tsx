import React, {useState} from 'react';
import './App.css';




function App() {
  const[checkedValue,setChecked]= useState(true);
  function toggle() {
  setChecked((checkedValue: any) => !checkedValue);
}

 
  return (
    <>
    <input type="checkbox" 
           checked={checkedValue}
           onChange={toggle}
    />
     <p>{checkedValue ? "checked" :"not checked"}</p>
 
    </>
  );
}

export default App;
