import logo from './logo.svg';
import './App.css';
import { useState  } from 'react';
import reactDom from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LoginF from './components/LoginF';
import Twitter from './Twitter';
import {SContext, SProvider} from './components/Context';
import Register from './components/Register';





function App() {
 const Redirecto=()=> <Redirect to="/"/>
  const [token, setToken]= useState("");

  return (
    <div className="App">
         {/* <SProvider> */}
         <BrowserRouter>
         
          <div className="App">
            <div>
               <Switch> 
               <Route exact path="/" component= {LoginF}/>
               <Route path="/home" component= {Twitter}/>
                 {/* <Route path="/" component={Twitter} /> */}
                  <Route path="/login" component={LoginF} />
                  <Route path="/Redirect" component={Redirecto}/>
                <Route path="/register" component={Register} />
                 {/* <Route path="/search?text=?" component={Search} /> 
                 <Route exact path='/user' component={Autor} /> */}
                
                 <Route path ="*" render = {() => <h1> NOT FOUND </h1>}/>
               </Switch>
            </div> 
          </div>
       
        </BrowserRouter> 
 {/* </SProvider> */}



     
    </div>
  );
 
}

export default App;
