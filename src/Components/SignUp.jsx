import { useState } from 'react'

function SignUp ({}) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState(null);
    console.log(userName)
    console.log(password)

async function handleSubmit (event) {
  event.preventDefault();
  

  try{
    const response = await fetch("https://fsa-recipe.up.railway.app/api/auth/register", 
    {
    method: "POST",
    headers: { "Content-Type": "application/json"} , 
    body: JSON.stringify({
      username: userName,
      password: password
    })
    })
  const result = await response.json() 
  console.log(result)
  localStorage.setItem("token", result.token)
  setSuccessMessage("Account Created");
  
}catch(error){
  console.log(error)
}
}
  
  return (
    <>
   
      <form onSubmit={handleSubmit}>
        <label>
            
           Create Userame:
            <input name="username" value={userName}
            onChange={(event)=> setUserName(event.target.value)}/>
        </label>
        <label>
           Create Password:
            <input name="password" value={password}
            onChange={(event)=> setPassword(event.target.value)}/>
        </label>
       
        {
                (password && password.length <= 6) && 
                <p><strong>Password must be longer than 6 characters.</strong></p>
            }
            <br/>
            <button>Sign Up!</button>

      </form>
      {
        successMessage && <p>{successMessage}</p>
      }
    </>
  )
}

export default SignUp
