import { useState, useEffect } from 'react';
import '../App.css';
import Logo from './Logo.png'
import axios,{response} from 'axios'; 
import Follower from './Follower';

function Followers() {
const[followers, setFollowers]=useState([])

  useEffect(()=>{
 
    axios.get('http://localhost:7000/user',{headers:{ authorization:localStorage.token}})
   
       .then(function (response) {
          setFollowers(response.data.user.followers);
          
          
         
           }
 )},[])
 
   
  return (
    <div className="followers" >
      
     <a>LISTA DE SEGUIDORES </a>
    
     <div className="container">
                {followers.map(elemento=>(
         
                <Follower key= {elemento.id} follower={elemento}/>
                ))}; 

            </div>
     
    </div>
  );
}

export default Followers;