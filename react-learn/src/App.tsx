import React from 'react';
import './App.css';
import RegularComponent from './Components/RegularComponent';
import SecretComponent from './Components/SecretComponent';

const [,,wear]=["boots","gloves","hat","scarf"];
console.log(wear);


function App({authorized}:any) {
  return (
    <>
      {authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  );
}

export default App;
