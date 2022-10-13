import logo from './logo.svg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import { Unity, useUnityContext } from "react-unity-webgl";
import Basicform from './BasicForm';
import BasicExample from './BasicExample';
import ReactDOM from 'react-dom';
import BasicForm from './BasicForm';
import unityld from './Pages/Unityloader'
//import { autofill } from 'xrpl/dist/npm/sugar';

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/webglgxg.loader.js",
    dataUrl: "build/webglgxg.data",
    frameworkUrl: "build/webglgxg.framework.js",
    codeUrl: "build/webglgxg.wasm",
  });

  const h1 = <h1>header test</h1>
  
  return (
    
   
    <>
    <BasicExample />
    <div className='App-header'>
      <h1>
       
        
      </h1>
      
      <div  className='App'>
     
      <Basicform/>
      
      </div>
    </div>
    
    </>
   

  );
}


export default App;
