import React, { useState } from 'react';
import './App.css';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import UserContextProvider from './components/context/UserContext';
import UserInfo from './components/context/UserInfo';
import Input from './components/DemoProps/Input';
import Main from './components/DemoProps/Main';
import Couter from './components/hooks/Couter';
import User from './components/hooks/User';
import DomRef from './components/ref/DomRef';
import MutableRef from './components/ref/MutableRef';

function App() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log("Cliked: ", event, id);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  }

  return (
    <div className="App">
      <h2>Typescript with type</h2>
      <Main 
      show={show} 
      setShow={setShow} 
      handleClick={handleClick}
      styles={{padding: '5px 10px', backgroundColor: 'skyblue', margin: '5px'}}
      />
      <Input value={value} handleChange={handleChange}/>
      <h2>Typescript with Hooks</h2>
      <h3>useState in TS</h3>
      <User/>
      <h3>useReducer in TS</h3>
      <Couter/>
      <h3>useContext in TS</h3>
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <UserContextProvider>
        <UserInfo/>
      </UserContextProvider>
      <h3>useRef in TS</h3>
      <DomRef/>
      <MutableRef/>
    </div>
  );
}

export default App;
