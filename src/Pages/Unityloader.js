import React from "react";
import {Route, BrowserRouter as Router} from 'react-router-dom';
import { Unity, useUnityContext } from "react-unity-webgl";

function Unityloader(){
    const { unityProvider } = useUnityContext({
        loaderUrl: "build/webglgxg.loader.js",
        dataUrl: "build/webglgxg.data",
        frameworkUrl: "build/webglgxg.framework.js",
        codeUrl: "build/webglgxg.wasm",
      });

    return(
        <>
        <div>

        </div>
        </>
    );
}

export default Unityloader;