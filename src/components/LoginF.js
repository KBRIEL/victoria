
import '../App.css';
import React, { useEffect, useState,  useContext,Provider } from 'react';
import axios,{response} from 'axios';

import {SContext, SProvider, useLogin} from './Context';
import {BrowserRouter, Redirect, Route, Switch, useHistory} from "react-router-dom";






export default function LoginF() {

    const history = useHistory();
    const [error, setError] = useState("");
    const [btnPush, setPush] = useState(false);
    const {state} = useContext(SContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
      
    const {login} = useLogin();

    const [userID, setID] = useState("not login"); 
    const[user, setUser] = useState("")   
    
    
    const updateEmail = (event)=> {
    setEmail(event.target.value)
    };
    
    const updatePassword = (event)=>{
        setPassword(event.target.value);
        
    } 
       
    const [authorization,setAuthorization]= useState("no autorized");
    const [enviar,setEnviar] = useState(false);
    const [author,setAuthor] = useState({});
    
    
   const getUser =()=> userID;

  
 

     function seteo(a){
        setAuthorization(a.token);
        setID(a.id);
       
     

     }
     
        return (
       
       
        <div className="background2">
               <div className="login2 col-md-2  ">
                   
                    <form >
                        <br/>
                        <h3>Login</h3>
                      <h4>{error}</h4>
                        
                        <div className="form-group">
                            <div>
                                <label>Email </label>
                            </div>
                            
                             <input className="forgot-password centrado"  type="text" name="email"  value={email} onChange={updateEmail} required/>
                        </div>


                        <div className="form-group">
                            <div>
                                <label>Password </label>
                            </div>
                        
                            <input type="password" name="pass" value={password} onChange={updatePassword} required/>
                            <div color="white">
                                 <em><a className="forgot-password centrado"  onClick={() => { alert("Te enviamos un email para restaurar tu contraseña") }}>Olvidé mi contraseña</a></em>
                            </div>
                           
                        </div>
                        <div className="custom-control custom-checkbox">
                            <link type="checkbox" className="custom-control-input" id="customCheck1" />
                         
                        </div>
                        
                         <a className="enlaceboton" type="button" onClick={btn_login}>Login</a> 
                        
                    </form>
                </div >
            </div >
            
        );
   

    //    const reload = () => {
    //         window.location.reload(true);
    //     }
       
       function btn_login() {
      

        if(email!="" && password!=""){
    
        const head = {"Content-Type": "application/json"};
        const param = {headers:head, "responseType":"json"}
        axios.post('http://localhost:7000/login',{
               
                   email:email,
                   password:password
                
            },param)
          
            .then(function (response) {
                localStorage.setItem("token",response.headers.authorization);
                localStorage.setItem("userId",response.data.id);
                seteo(response.data);

                if(response.data.result != "ok"){
                   
                   history.push('/home'); 

                }else{
                    setError('email or password invalid');
                    history.push('/');  
                   // reload()
                   
                }

                
                
            } )
          
           .catch(console.log('authorization denied '));           
        }
  
//   setPush(true);


}

}  