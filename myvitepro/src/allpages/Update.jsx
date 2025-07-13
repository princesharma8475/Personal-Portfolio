import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate} from 'react-router-dom'
function Update() {
  let navigate=useNavigate()
  let[name,setname]=useState()
  let[age,setage]=useState()
  let[city,setcity]=useState()
  let[email,setemail]=useState()
  let {id}=useParams()
  useEffect(()=>{
    axios.get('http://localhost:3000/userdetails/'+id).then((res)=>{
      //console.log(res.data);
      setname(res.data.name)
      setage(res.data.age)
      setcity(res.data.city)
      setemail(res.data.email)
    })
  },[id])
  let updatedata=(e)=>{
    e.preventDefault()
    axios.put('http://localhost:3000/userdetails/'+id,{
        name,age,city,email
    }).then((res)=>{
      navigate('/dashboard/read')
    })
  }
  return (
    <>
     <div className='row w-50 mx-auto mt-4 mb-4 shadow-lg'>
      <form name='frm' method='post' onSubmit={updatedata}>
        <div className="mb-3">
  <label className="form-label">Name :- </label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter name"  
  value={name} onChange={(e)=>{setname(e.target.value)}}/>
   <label className="form-label">Age :- </label>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter age" 
  value={age} onChange={(e)=>{setage(e.target.value)}}/>
   <label className="form-label">City :- </label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter city" 
  value={city} onChange={(e)=>{setcity(e.target.value)}}/>
   <label className="form-label">Email :- </label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter email" 
  value={email} onChange={(e)=>{setemail(e.target.value)}}/>
</div>
<div className="mb-3">
  <input type="submit" className="form-control bg-danger" value="Update" />
</div>
      </form>
    </div>
    </>
  )
}

export default Update
