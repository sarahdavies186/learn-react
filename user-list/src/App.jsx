import { useEffect } from 'react'
import { useState } from 'react'
import { User } from "./User"

function App() {
const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(setUsers)
  })

  return (
    <>
     <h1>User List</h1>
     <ul>
    {users.map((user) => (
      <User
      key={user.id}
      user={user}
      />
    ))}
     </ul>
    </>
  )
}

export default App
