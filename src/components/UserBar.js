import { useState,useEffect } from 'react';
import '../App.css';
import logo2 from './logo2.png';
import Logo from './Logo.png';
import Search from './Search';
import axios,{response} from 'axios';


function UserBar() {
  
  const[name, setName]= useState("Anonimus");
  const[image, setImage]= useState("https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png");
 





 useEffect(()=>{
 
   axios.get('http://localhost:7000/user',{headers:{ authorization:localStorage.token}})
  
      .then(function (response) {
         setName(response.data.user.name);
         setImage(response.data.user.image);
         
        
          }
)},[])



  return (
    <div className ="ubar" >
      
      <div className="center">
              
           <img className="radius" src={logo2} width="15%" alt="logo" />  
           <img className="foto" src={Logo} width="10%" alt="logo" />  
           
      </div>
      

    
            <Search/>
    
     <div>
              <img  className="right"  src={image} width="20%"/>
              <h4 className="right"  >{name}</h4> 
            
     </div>
   

  </div>
  );
      }
export default UserBar;