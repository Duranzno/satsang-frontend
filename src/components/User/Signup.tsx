import React, { useState } from 'react'

const Signup: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const local = 'http://localhost:3001/api/event'

  const handleSubmit = () => {
    fetch(local, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user)
      })
      .catch((error) => console.log(error.message))
  }

  return (
    <>
      <p>Signup</p>

      <form onSubmit={() => handleSubmit()}>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <br></br>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <input type="submit" />
      </form>
    </>
  )
}

export default Signup
