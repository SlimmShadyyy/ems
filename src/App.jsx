import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUSer]= useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)
  
useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUSer(userData.role)
    setloggedInUserData(userData.data)
  }
}, [])
  

  const handleLogin = (email, password) => {
    if(email === 'admin@me.com' && password === '123') {
      setUSer('admin') 
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
    } else if(userData) {
      const employee = userData.find((e) => email === e.email && e.password === password)
      if(employee) {
        setUSer('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data:employee }))
      }
    } else {
      alert("Invalid Credentials")
    }
  }


 

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : ''}
    {user == 'admin' ? <AdminDashboard changeUSer={setUSer} /> : (user == 'employee' ? <EmployeeDashboard changeUSer={setUSer} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App