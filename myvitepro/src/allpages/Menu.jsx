import React from 'react'
import { Link } from 'react-router-dom'
function Menu() {
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <Link className="navbar-brand" to ="/dashboard/read">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to ="/dashboard/read">Read</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/dashboard/create">Create</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/dashboard/update/1">Update</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/dashboard/search">Search</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}

export default Menu
