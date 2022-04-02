import React from 'react';
import Person from'./component/login';
import './App.css';
import { initializeApp } from "firebase/app";
import {useNavigate} from "react-router-dom"
import firebaseConfig from './firebaseconfig';
const app = initializeApp(firebaseConfig);
function App(){
  const navigate = useNavigate()
  const demohandler=() => {  
    navigate("login")
  }
  return (
    <>
    <h1>Home</h1>
    <div> Assesement</div>
    </>

  
    
    
  );
}

export default App;
