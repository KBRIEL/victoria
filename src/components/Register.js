import '../App.css';
import React, { useEffect, useState,  useContext,Provider } from 'react';
import axios,{response} from 'axios';
import {BrowserRouter, Redirect, Route, Switch, useHistory} from "react-router-dom";






export default function Register() {

    const history = useHistory();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
      
    
    const [userID, setID] = useState("not login"); 
    

    const updateName= (event)=> {
        setName(event.target.value)
        };
        
        const updateImage = (event)=>{
            setImage(event.target.value);
            
        } 
    
    const updateEmail = (event)=> {
    setEmail(event.target.value)
    };
    
    const updatePassword = (event)=>{
        setPassword(event.target.value);
        
    } 
       
    const [authorization,setAuthorization]= useState("no autorized");
  
    
    
   

  
 

     function seteo(a){
        setAuthorization(a.token);
        setID(a.id);
       
     

     }
     
        return (
       
       
        <div className="background2">
               <div className="login2 col-md-2  ">
                   
                    <form >
                        <br/>
                        <h3>Register</h3>
                                               
                        <div className="form-group">
                            <div>
                                <label>nombre </label>
                            </div>
                            
                             <input className="forgot-password centrado"  type="text" name="name"  value={name} onChange={updateName} required/>
                        </div>

                        <div className="form-group">
                            <div>
                                <label>Email </label>
                            </div>
                            
                             <input className="forgot-password centrado"  type="text" name="email"  value={email} onChange={updateEmail} required/>
                        </div>
                        <div className="form-group">
                            <div>
                                <label>Image </label>
                            </div>
                            
                             <input className="forgot-password centrado"  type="text" name="image"  value={image} onChange={updateImage} required/>
                        </div>


                        <div className="form-group">
                            <div>
                                <label>Password {authorization}</label>
                            </div>
                        
                            <input type="password" name="pass" value={password} onChange={updatePassword} required/>
                            <div color="white">
                                 <em><a className="forgot-password centrado"  onClick={() => { alert("Te enviamos un email para restaurar tu contraseña") }}>Olvidé mi contraseña</a></em>
                            </div>
                           
                        </div>
                        
                        <div className="custom-control custom-checkbox">
                            <link type="checkbox" className="custom-control-input" id="customCheck1" />
                         
                        </div>
                        
                         <a className="enlaceboton" type="button"  onClick={btn_register}>Accept</a> 
                        
                    </form>
                </div >
            </div >
            
        );
   


       
       function btn_register() {
        if(email!="" && password!="" && name!=""){
    
        const head = {"Content-Type": "application/json"};
        const param = {headers:head, "responseType":"json"}
        axios.post('http://localhost:7000/register',{
               
                   email:email,
                   password:password,
                   image: image,
                   name:name
                
            },param)
          
            .then(function (response) {
                localStorage.setItem("token",response.headers.authorization);
                seteo(response.data);
                if(response.data.result != "ok"){
                   
                    history.push('/login'); 
 
                 }
                
            } )
          
           .catch(console.log('authorization denied '));           
        }
  

          
   } }