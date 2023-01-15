import React from 'react'

import getData from './index';

function HospitalSearch() {
    return (
    <div className='container mt-sm-4'>
        <center>
        <br/>
        
        <label>MarksDate</label>
        <input type='text' placeholder='Date...' id = "Date" />
        <br/>
        <br/>       
        <br/>
        <label>User name </label>
        <input type='text' placeholder='Enter Username...' id = "Naame" />
        <br/>
        <br/>
        <br/>
        <label>Hospital </label>
        <input type='text' placeholder='Enter the name of the hospital...' id = "Hospital" />
        <br/>
        <br/>
        <br/>
        <button type='submit' onClick={getData}>Login</button>
        <br/>
        
        </center>
    </div>
  )
}

export default HospitalSearch ;