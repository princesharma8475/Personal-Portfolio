import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './authpages/Login'
import SignUp from './authpages/SignUp'
import Dashboard from './authpages/Dashboard'
import Headerandfooter from './authpages/Headerandfooter'
import Read from './allpages/Read'
import Create from './allpages/Create'
import Update from './allpages/Update'
import Search from './allpages/Search'
function App() {
  return (
    <>
    <BrowserRouter>
    <Headerandfooter name="demo Project" bcolor="orange" pd="40px" fsize="38px" col="blue"/>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/dashboard' element={<Dashboard/>}>
    <Route index element={<Dashboard/>}/>
    <Route path='read' element={<Read/>}/>
     <Route path='create' element={<Create/>}/>
     <Route path='update/:id' element={<Update/>}/>
     <Route path='search' element={<Search/>}/>
      </Route>
      <Route path='/notfound' element={<h2>Page not found</h2>} />
    </Routes>
    <Headerandfooter name="copyright@2025 ducat india" bcolor="black" pd="20px" fsize="20px" col="white"/>
    </BrowserRouter>
    </>
  )
}
 
export default App
