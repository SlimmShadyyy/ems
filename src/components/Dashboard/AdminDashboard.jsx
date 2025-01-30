import React from 'react'
import Header from '../other/Header'
import  CreateTask  from '../other/CreateTask'
import AllTask from '../other/AllTask'
CreateTask

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-7'>
        <Header changeUSer={props.changeUSer} />
        <CreateTask />
        <AllTask/>
    </div>
  )
}

export default AdminDashboard