import React from "react";
import {Route, BrowserRouter as Router,useNavigate} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { getGoals,reset } from '../features/goals/goalSlice'
import {useEffect} from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";

function Game2(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state)=> state.auth)
    const{goals,isLoading,isError,message} = useSelector(
        (state) => state.goals
    )

    useEffect(()=>{
        if(isError){
            console.log(message)
        }
        if(!user){
            navigate('/login')
        }

        return()=>{
            dispatch(reset())
        }
    },[user,navigate,isError,message,dispatch])

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