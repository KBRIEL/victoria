import axios,{response} from 'axios';






export const register =(email,name,password,photo)=>axios.post(`http://localhost:7000/register`,{name:name,email:email, password:password,image:image},{headers:{ Authorization:response.headers.authorization}})
                                                    

export const login=(email, password)=>axios.post(`http://localhost:7000/login`, {email:email, password:password});


export const getUser=()=>axios.get('http://localhost:7000/user',{headers:{ Authorization:response.headers.authorization}})
                                .then(response=> this.setState({user: response.data}));

export const getUserId=(idUser)=>axios.get(`http://localhost:7000/user/${id}`,{headers:{ Authorization:response.headers.authorization}})
                                .then(response=> this.setState({userId: response.data}));

export const follow=(userId)=>axios.put(`http://localhost:7000/${userId}/follow`, {headers:{ Authorization:response.headers.authorization}})
                                   // .then(response=> this.setState({notes: response.data}));
                                
export const search=(text=>axios.get(`http://localhost:7000/search?text=${text}`,{headers:{ Authorization:response.headers.authorization}}))
                                 //.then(response=> this.setState({notes: response.data}));

export const getTweetId=(id)=>axios.get(`http://localhost:7000/tweet/${id}/like`,{headers:{ Authorization:response.headers.authorization}})
                                //.then(response=> this.setState({note: response.data}));

export const getComment=()=>axios.post(`http://localhost:7000/tweet/${id}/coment`,{headers:{ Authorization:response.headers.authorization}})
                                //.then(response=> this.setState({notes: response.data}));











