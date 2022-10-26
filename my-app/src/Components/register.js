import React from 'react'
import { Formik } from 'formik'
import schema from './registerValidate';
import { Send_Data, Get_Data, Remove_Data } from './api';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Get_Edit_Data } from './api';

export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState('')
    const [editD, setEditD] = useState('')

    const get = async () => {
        let asd = await Get_Data();
        setData(asd);
    }

    useEffect(() => {
        get();
    }, [])

    const remove = (id) => {
        Remove_Data(id);
           
        setData(data.filter((item) => {
            return item.id != id;
        }))
    }

    const get_edit = async (id) =>{
        let asdf = await Get_Edit_Data(id)
        // setEditD(asdf);
    }


    return (
        <div>
            <h3 className='text-center' >To Do List</h3>
            <Formik
                initialValues={{
                    name: ''
                }}
                onSubmit={async (values,actions) => {
                    let result = await Send_Data(values);

                    setData(gs => {
                        return [...gs, result];
                    })

                    actions.resetForm();
                }}

                validationSchema={schema}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <div className="d-flex mt-5">
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.name}
                                name="name"
                                className={`form-control ${props.errors.name ? 'is-invalid' : ''}`}
                            />
                            <button className='btn btn-success' type="submit">Submit</button>
                        </div>
                        {props.errors.name && <div className='badge bg-danger' id="feedback">{props.errors.name}</div>}
                    </form>
                )}
            </Formik>

            <ul className='list-group mt-5'>

                {
                    data &&
                    data.map((item, ind) => {
                        return (    
                            <li key={ind} className='list-group-item d-flex justify-content-between' > {item.name}
                                <div>
                                    <Link to={`/edit/${item.id}`} onClick={()=>{get_edit(item.id)}}  className='btn btn-warning me-2' data-toggle="modal" data-target="#exampleModal"><i className='bi bi-pencil'></i></Link>
                                    <button onClick={() => { remove(item.id,ind) }} className='btn btn-danger' ><i className='bi bi-x' ></i></button>
                                </div>
                            </li> 
                        )
                    })
                }
            </ul>

           
        </div>
    )
}
