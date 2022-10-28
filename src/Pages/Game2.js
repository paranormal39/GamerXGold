import React from "react";
import {Route, BrowserRouter as Router} from 'react-router-dom';
import { Unity, useUnityContext } from "react-unity-webgl";

function Game2(){
    const { unityProvider } = useUnityContext({
        loaderUrl: "build/589challengeweb.loader.js",
        dataUrl: "build/589challengeweb.data",
        frameworkUrl: "build/589challengeweb.framework.js",
        codeUrl: "build/589challengeweb.wasm",
      });

    return(
        <>
        <div>
        <Unity unityProvider={unityProvider} style={{ width: 360, height: 720,textAlign:"center",padding:10 }} />
        </div>
        </>
    );
}

export default Game2;