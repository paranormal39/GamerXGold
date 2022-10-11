import logo from './logo.svg';
import './App.css';
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/webglgxg.loader.js",
    dataUrl: "build/webglgxg.data",
    frameworkUrl: "build/webglgxg.framework.js",
    codeUrl: "build/webglgxg.wasm",
  });

  return (
    <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
  );
}

export default App;
