import { useState, useEffect } from 'react';
import '../App.css';
import Logo from './Logo.png';
import User from './User';
import axios,{response} from 'axios';
import TweetCard from './TweetCard';

function TwitterCenter() {
  const[name, setName]= useState("Anonimus");
  const[image, setImage]= useState("https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png");

  const [user,setUser]= useState({});
  const [userId,setId]= useState(localStorage.userId);
  const [tweets,setTweets]= useState([]);

  useEffect(()=>{
 
    axios.get('http://localhost:7000/user/'+ userId,{headers:{ authorization:localStorage.token}})
   
       .then(function (response) {
          
          setName(response.data.user.name);
         
          setImage(response.data.user.image);
          setUser(response.data.user)
         setTweets(response.data.user.tweet);
          
           }
 )},[])
    
  return (
    <div className ="center" justify_content="center">
       <User name = {name} image= {image} />
       

       <div className="container">
                {tweets.map(elemento=>(
         
                <TweetCard key= {elemento.id} tweet={elemento}/>
                ))}; 

            </div>


     {/* <h4>Tweets</h4>
    
     <div className= "tweets">
       <a>Tweet 1</a>
       <br/>
       <a>hola soy el Tweet numero uno</a>
       <button className="radius">ir</button>
     </div>
     <div className= "tweets">
       <a>Tweet 2</a>
       <br/>
       <a>hola soy el Tweet numero dos</a>
       <button className="radius">ir</button>
     </div>
     <div className= "tweets">
       <a>Tweet 3</a>
       <br/>
       <a>hola soy el Tweet numero tres</a>
       <button className="radius">ir</button>
     </div>
     <div className= "tweets">
       <a>Tweet 4</a>
       <br/>
       <a>hola soy el Tweet numero cuatro</a>
       <button className="radius">ir</button>
     </div>
       */}

    
 
    
     
    </div>
  );
}

export default TwitterCenter;