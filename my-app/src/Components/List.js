import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Get_Data } from '../api';

export default function List() {
    const [ data , setData ] = useState('');


  const get = async () => {
    let result = await Get_Data();
    setData(result);
  }  
  useEffect(()=>{
    get();
  },[])

   
  return (
    <div className='container'>
        <div className="row mt-5">
            <div className="col-6 offset-3">
                <ul className="list-group">
                    {
                        data && 
                        data.map((item , ind)=>{
                            return (
                                <Link to={`/data_detail/${item.title}/${item.id}`} key={ind} className='list-group-item p-3' > {item.title} </Link>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}