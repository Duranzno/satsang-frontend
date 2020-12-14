import React, { useState } from 'react'



const Login : React.FC<Props> = () => {

    const [email, setEmail] = useState("ex@example.com")
    const [password, setPassword] = useState("password")
    const local = "http://localhost:3001/api/auth/login"



    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(local,{
            method: "POST",
            headers: {
              'Access-Control-Allow-Origin':'*',
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({
              email,
              password
            })
          })
            .then(response => response.json())
            .then( user => {
              localStorage.setItem("session", user.id)
            })
            .catch(error => console.log(error.message))
    }

    return (
        <>
            <p>Login</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" onChange={(e)=> setEmail(e.target.value)}/>
                <br>
                </br>
                <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
                <br>
                </br>
                <input type="submit"/>
            </form>
        </>
    )
}


export default Login