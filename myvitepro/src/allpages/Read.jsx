import React,{useState, useEffect} from 'react'
import axios from "axios"
import { MdDelete, MdEdit } from "react-icons/md";
import { Link,useNavigate } from "react-router-dom"
function Read() {
  let navigate=useNavigate()
  let [val,setval]=useState()
  let getdata=()=>{
     axios.get('http://localhost:3000/userdetails').then((res)=>{
      //console.log(res.data);
      setval(res.data)
    })
  }
  useEffect(()=>{
    getdata()
  },[])
  let deletedata=(data)=>{
    axios.delete("http://localhost:3000/userdetails/"+data).then((res)=>{
      getdata()
      navigate('/dashboard/read')
    })
    
  }
  return (
    <>
   <div className='row p-4'>
     <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">City</th>
      <th scope="col">Email</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  {val?<tbody>
    {val.map((item)=>{
      return(
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.city}</td>
          <td>{item.email}</td>
          <td><Link to="#" onClick={()=>{deletedata(item.id)}}><MdDelete /></Link></td>
          <td><Link to={'/dashboard/update/'+item.id}><MdEdit /></Link></td>
        </tr>
      )
    })}
  </tbody>:""}
</table>
   </div>
    </>
  )
}

export default Read
