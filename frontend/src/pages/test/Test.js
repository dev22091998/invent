import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import './test.css';

export default function Test() {
    const [plan, setPlan] = useState([])
    const [updateUI, setUpdateUI] = useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/plans/getplan`)
            .then(res => {
                console.log(res)
            })
    }, [updateUI])
  return (
    <div>
        <h1>Test</h1>
        <div className="container-table">
      <h1>Chiroyli Jadval</h1>
      <table className="custom-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Model</th>
            <th>Detal raqami</th>
            <th>Kunlik plan</th>
            <th>1-smena</th>
            <th>2-smena</th>
            <th>Ishlab chiqarildi</th>
            <th>Farqi</th>
          </tr>
        </thead>
        <tbody>
          {}
        </tbody>
      </table>
    </div>
    </div>
  )
}
