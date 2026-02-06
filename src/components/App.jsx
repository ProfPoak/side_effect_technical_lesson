import { useEffect, useState } from 'react'
import '../App.css'

function App() {
  const [userName, setUserName] = useState ("Guest")
  const [userData, setUserData] = useState(null)

  useEffect(()=> {
    document.title = `Welcome, ${userName}`
  }, [userName])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
      setUserData(data)
    })
    .catch(error => console.error("Error fetching user:", error))
  }, [])
  useEffect(() => {
    const handleWindowClick = () => {
      console.log("Window was clicked!")
    }
    window.addEventListener("click", handleWindowClick)

    return () => {
      window.removeEventListener("click", handleWindowClick)
    }
  },[])

  return (
    <div>
      <h1>Hello, {userName}!</h1>
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      {userData && (
        <div>
            <h2>User Info</h2>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
      )}
    </div>
  )
}

export default App
