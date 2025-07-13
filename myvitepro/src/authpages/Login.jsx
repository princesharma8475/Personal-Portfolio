import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom" 
import {Link} from 'react-router-dom'
function login() {
  let navigate=useNavigate()
  let [totalval, settotalval]=useState()
  let [email, setemail]=useState()
  let [pass, setpass]=useState()
  useEffect(()=>{
    axios.get("http://localhost:3000/auth").then((res)=>{
      settotalval(res.data)
    })
  },[])
  let logindata=(e)=>{
    e.preventDefault()
    let fdata=totalval.filter((pro)=>{
      return email===pro.email && pass===pro.password
    })
    if (fdata!=''){
    navigate('/dashboard/read')
    }
    else{
      navigate("/notfound")
    }
  }
  
  return (
    <>
    <div className='container-fluid'>
        <div className='row w-50 m-5 p-5 shadow-lg mx-auto'>
            <h2 className='mb-4 text-center'>Login form</h2>
            <form method='post' onSubmit={logindata}>
                <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email"
                onChange={(e)=>{setemail(e.target.value)}}/>
                </div>
                <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" name="pass" className="form-control" id="exampleFormControlInput1" placeholder="Enter Password"
                onChange={(e)=>{setpass(e.target.value)}}/>
                </div>
                <div className="mb-3">
                <input type="Submit" className="form-control bg-danger" id="exampleFormControlInput1"/>
                </div>
            </form>
            <Link to="./signup">Don't have an account</Link>
        </div>
    </div>
    </>
  )
}

export default login
 