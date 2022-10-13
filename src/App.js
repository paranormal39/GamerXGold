import logo from './logo.svg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import basic from "./BasicExample"
import { Unity, useUnityContext } from "react-unity-webgl";
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
    <><h1>
    
    </h1>
    
    <div style={{textAlign:'center'}}>
      <Unity unityProvider={unityProvider}style={{ width: 800, height: 600}} />
      </div></>

  );
}

export default App;
