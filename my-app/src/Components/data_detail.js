import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Get_Data_Detail } from '../api';

export default function Data_detail() {
    const [ data , setData ] = useState('');
    const navigate = useNavigate();
    const  { id , slug} = useParams();
    const back = () => {
        navigate('/list');
    }

    const get = async () =>{
        let asdf = await Get_Data_Detail(id);
        setData(asdf);
    }
    useEffect(()=>{
        get();
    },[])


  return (
    <div className='container'>
       <div className="row mt-5 ">
            <div className="col-6 offset-3">
                <h1 className='text-center' >Data Detail</h1>
                
                    {
                <ul className='list-group my-3' >
                        <li className='list-group-item p-3' > {data.id} </li>
                        <li className='list-group-item p-3' > {data.title} </li>
                </ul>
                    }

                <div className='text-center'>
                    <button onClick={back} className='btn btn-primary ' > Back </button>
                </div>
            </div>
       </div>
    </div>
  )
}




