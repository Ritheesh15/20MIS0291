import './Login.css';
import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";


function Login(){

    const navigate=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/Login",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    navigate("/home")
                   
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);

        }
    }

    return(
        <div className='background'>
        <div className="login">
          <p id="h1">Welcome To Top N products</p>
          <br></br>
          <br></br>
          <h1 id="h2">User Login</h1>
          <br></br>
          <form action="POST">
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" id="e1"/><br></br>
            <br></br>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" id="p1" /><br></br>
            <br></br>

        <input type="submit" id="b1"onClick={submit}/>
          </form>

          <br />
          <br></br>
          <p id="l1">Don't Have an account ?  <Link to="/Signup" id="lnew">Signup Here</Link>
</p>
        </div>
        </div>
    )
}

export default Login