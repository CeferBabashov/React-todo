import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik } from 'formik';
import { Get_Edit_Data } from './api';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Edit() {
    const   { id } = useParams();
    const [ data, setData ] = useState('');

    const navigate = useNavigate();

    const get_data  = async () =>{
        let asd = await Get_Edit_Data(id);
        setData(asd);
    }

    useEffect(()=>{
        get_data();
    },[])

    const back = () => {
        navigate('/register');
    }
    
    return (
        <div>
            <h3 className='text-center' >Edit</h3>
            <Formik
                initialValues={{
                    name : ''
                }} 

                onSubmit={(values, actions) => {
                    
                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <div className="d-flex">
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.name}
                                // value={data.name}
                                name="name"
                                className='form-control'
                            />
                            
                                <button className='btn btn-warning' type="submit">Save changes</button>
                        </div>
                        {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                    </form>
                )}
            </Formik>
                
             <p> {id} </p> 
                    
             
                        

            <div className="d-flex justify-content-center mt-5 ">
                <button onClick={back} className='btn btn-primary' >Back</button>
            </div>
        </div>
    )
}
