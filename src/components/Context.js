import '../App.css';
import { Switch, BrowserRouter, Route  } from 'react';
import Twitter from '../Twitter';
import React, { useEffect, useState, createContext, useContext} from 'react';
import axios,{response} from 'axios';
import { useHistory } from 'react-router-dom';

const SContext = createContext({
    state:{
        isAuthenticated : false,
        user:{
            email:"", 
            user:""
        }
    
    },
    actions:{
        setUser:(user)=>{}
    }
    });
    
const SProvider=({children})=>{
        const[user,setUser]=useState({});
        const isAuthenticated=false;
    
        const state={
            user,
            isAuthenticated
    
        }
        const action={
            setUser
        }
        return <SContext.Provider value={{state, action}}>{children}</SContext.Provider>
    }
    

const useLogin =() =>{
    const {state, actions} = useContext(SContext);
    const {setUser}= actions.setUser;
    const history= useHistory();
    const login = (data) =>{
        axios.post('http://localhost:7000/login',{data})
        .then(response=>{
            localStorage.setItem("token", response.header.authorization)
             history.push("/home");
        })
        .catch(console.log('authorization denied '));       
       
    }
    return {login};
}



export  {SContext, SProvider, useLogin}