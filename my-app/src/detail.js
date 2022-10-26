import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Detail() {
  const navigate = useNavigate();
  const { id, name } = useParams();
  const back = () => {
    navigate('/about')
  }
  return (
    <div className='container'>
      <h3 className='text-center'> Id : {id}</h3>
      <div className='d-flex justify-content-center mt-5'>
        <button onClick={back} className='btn btn-primary' >Back</button>
      </div>
    </div>
  ) 
}
