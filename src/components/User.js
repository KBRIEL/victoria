import { useState,useEffect } from 'react';
import '../App.css';
import Search from './Search';
import axios,{response} from 'axios';
import TweetCard from './TweetCard';

function User(props){
    const [user,setUser]= useState(props.user);
    const id= useState(props.user);
    const[name, setName]= useState(props.name);
    const[image, setImage]= useState(props.image);
    const [tweets,setTweets]= useState([]);
 


    useEffect(()=>{
 
        axios.get('http://localhost:7000/user/'+id,{headers:{ authorization:localStorage.token}})
       
           .then(function (response) {
              
              setName(response.data.user.name);
              setImage(response.data.user.image);
             
              
             
               }
     )},[])


    return(
        <di>
            <div className="center">
                <h2>Perfil</h2>
                <img className="foto" src={image} width="10%" alt="logo" />  
                <h3 className="center"  >{name}</h3> 
                

        

           
            </div>

        </di>
    );
}

export default User;