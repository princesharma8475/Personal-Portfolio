import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [inputVal, setInputVal] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const searchdata = (e) => {
    e.preventDefault(); // prevent form submit
    axios.get(`http://localhost:3000/userdetails?name=${inputVal}`)
      .then((res) => {
        setSearchResult(res.data);
      });
  };

  return (
    <>
      <div className='row w-75 mx-auto mt-5 mb-4 shadow-sm'>
        <form className="input-group mb-3" onSubmit={searchdata}>
          <input
            type="search"
            className="form-control"
            placeholder="Search name"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <span className="input-group-text" id="basic-addon2">
            <button className="btn btn-info" type="submit">Search</button>
          </span>
        </form>
      </div>

      <div className='row p-4'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">City</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          {searchResult.length > 0 && (
            <tbody>
              {searchResult.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.city}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}

export default Search;
