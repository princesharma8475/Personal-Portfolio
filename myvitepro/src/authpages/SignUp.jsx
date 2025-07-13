import React,{useState} from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
function SignUp() {
  let navigate=useNavigate()
  let[name,setname]=useState()
  let[email,setemail]=useState()
  let[password,setpassword]=useState()
  let submitdata=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3000/auth" ,{
      name,email,password
    }).then((res)=>{
      navigate('/')
    })
  }
  return (
    <>
    <div className='container-fluid'>
        <div className='row w-50 m-5 p-5 shadow-lg mx-auto'>
            <h2 className='mb-4 text-center'>SignUp form</h2>
            <form method='post' onSubmit={submitdata}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name"
                onChange={(e) => {setname(e.target.value)}}/>
                </div>
                
                <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email"
                onChange={(e) => {setemail(e.target.value)}}/>
                </div>
                <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" name="pass" className="form-control" id="exampleFormControlInput1" placeholder="Enter Password"
                onChange={(e) => {setpassword(e.target.value)}}/>
                </div>
                <div className="mb-3">
                <input type="Submit" className="form-control bg-danger" id="exampleFormControlInput1"/>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default SignUp
