import logo from './logo.svg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter as Router,Routes,Link} from 'react-router-dom';
import { Unity, useUnityContext } from "react-unity-webgl";
import Basicform from './BasicForm';
import BasicExample from './BasicExample';
import ReactDOM from 'react-dom';
import BasicForm from './BasicForm';
import unityld from './Pages/Unityloader'
import Unityloader from './Pages/Unityloader';
import Game2 from './Pages/Game2';

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
    <div>
      <BasicExample className='.App-header'></BasicExample>
       <Router className='.App'>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/signup" element={<BasicForm />} />
       <Route path="/game1" element={<Game1 />} />
       <Route path="/game2" element={<Game2 />} />
       </Routes>

       </Router>
        
      </div>

  
  );
}

function Home() {
  return (
    <div className='App'>
      <h2>What Is GXG</h2>
      <p>GamerXGold is token built on the XRPL with its aim to be the number 1 Crypto for competive gaming</p>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Game1() {
  return <Unityloader></Unityloader>;
}

export default App;
