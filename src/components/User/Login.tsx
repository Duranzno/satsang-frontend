import React, { useState } from 'react'



const Login : React.FC<Props> = () => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const local = "http://localhost:3001/api/event"

    const handleSubmit = () => {
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
            .then( event => {
              console.log(event)
            })
            .catch(error => console.log(error.message))
    }

    return (
        <>
            <p>Login</p>
            <form onSubmit={() => handleSubmit()}>
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