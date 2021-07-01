import { useState, useEffect } from 'react';
import '../App.css';
import Logo from './Logo.png'
import axios,{response} from 'axios'; 


function Followers(props) {
const[follower, setFollower]=useState(props.follower)


   
  return (
    <div  >
      
     <a>{follower.name} </a>
     <img  className="right"  src={follower.image} width="20%"/>
     
    </div>
  );
}

export default Followers;