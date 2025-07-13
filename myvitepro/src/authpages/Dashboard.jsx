import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../allpages/Menu'
function Dashboard() {
  return (
    <>
    <Menu/>
    <Outlet/>
    </>
  )
}

export default Dashboard
