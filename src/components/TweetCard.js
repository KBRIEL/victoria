import { useState, useEffect } from 'react';
import '../App.css';
import Logo from './Logo.png'
import axios,{response} from 'axios'; 


function TweetCard(props) {
const[tweet, setTweet]=useState(props.tweet)


   
  return (
    <div  >
      {/* <h5>{tweet.author.name}</h5> */}
     <a>{tweet.text} </a>
     <img  className="right"  src={tweet.image} width="20%"/>
     
    </div>
  );
}

export default TweetCard;