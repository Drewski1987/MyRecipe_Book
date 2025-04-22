import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SignUp from "./SignUp"
import Authenticate from "./Authenticate"



function Login ({}) {

    const [username, setUsername] = useState("");
    const token = localStorage.getItem("token");
    const navigate = useNavigate;


useEffect(()=> {
async function getUsername (event) {
  event.preventDefault();
  

  try{
    console.log("Hey")
    const response = await fetch("https://fsa-recipe.up.railway.app/api/auth/me", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const res = await response.json()
        console.log(res)
        setUsername(res.username)

      
    }catch(error){
      console.log(error)
    }
    }
    if (token) {
        getUsername()
      }
        },[token])

function logOut(){

    localStorage.removeItem("token")
    navigate("/Login")

}

if (!token) {
    return (
        <div>
          <h1>Sign Up to be a User</h1>
          <SignUp />
          <br />
          <h1>Already a user? Sign in here</h1>
          <Authenticate />
        </div>
      )
}

return (
    <div>
      
      <button onClick={logOut}>Log Out</button>
    </div>
  )
}

export default Login