import React,{useState} from 'react'
import {Navigate, useNavigate} from "react-router-dom"
import axios from "axios"
function Create() {
  let navigate=useNavigate()
  let [name, setname]= useState()  
  let [age, setage]= useState()  
  let [city, setcity]= useState()  
  let [email, setemail]= useState()  
  let createdata=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3000/userdetails",{
      name,age,city,email
    }).then((res)=>{
       navigate('/dashboard/read')
    })
  }
  return (
    <>
    <div className='row w-50 mx-auto mt-4 mb-4 shadow-lg'>
      <form name='frm' method='post' onSubmit={createdata}>
        <div className="mb-3">
  <label className="form-label">Name :- </label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter name" 
  onChange={(e)=>{setname(e.target.value)}} />
   <label className="form-label">Age :- </label>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter age" 
  onChange={(e)=>{setage(e.target.value)}}/>
   <label className="form-label">City :- </label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter city" 
  onChange={(e)=>{setcity(e.target.value)}}/>
   <label className="form-label">Email :- </label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter email" 
  onChange={(e)=>{setemail(e.target.value)}}/>
</div>
<div className="mb-3">
  <input type="submit" className="form-control bg-danger"  />
</div>
      </form>
    </div>
    </>
  )
}

export default Create
