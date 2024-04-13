import {useState} from 'react';

export default function RegisterPage(){
const [username,setUsername]=useState('')
const [password] = useState('');
async function register (ev){
    ev.preventDefault();
    const response= await fetch('http://localhost:3000,/register',{
    method:'POST',
     body:JSON.stringify({username,password}),
    headers:{'Content-Type':'application /json'},

})

if(response.status!==200){
alert('registration failed');
}else{
alert('registration successful')
}
}
return(
<form className="register" onSubmit={register}>
<h2>Register Page</h2>
<input type="text" 
placeholder="username" 
value ="username"
onChange={ev=>setUsername(ev.target.value)}/>
<input type="password" 
placeholder="password"
value={"password"}
onChange={ev=>setUsername(ev.target.value)}/>

<button>Register</button>

</form>

);
}
