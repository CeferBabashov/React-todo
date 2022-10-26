import React from 'react'
import { Link } from 'react-router-dom'

export default function about() {
    let user = [
        {
            name  : "User1",
            id : 1
        },
        {
            name : "User2",
            id : 2
        },
        {
            name : 'User3',
            id  :3
        },
        {
            name : " User4",
            id : 4
        }
    ]
   
    
  return (
    <div className='container'>
       <div className="row mt-5">
            <div className="col-6 offset-3">
               <ul className='list-group '>
               {
                user.map((item)=> {
                    return (
                         <Link className='list-group-item p-3' to={`/detail/${item.id}`} > {item.name} </Link>
                    )
                    })
               }
               </ul>
            </div>
       </div>
    </div>  
  )
}
