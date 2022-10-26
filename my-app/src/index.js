import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import About from './about';
import Home from './home';
import Detail from './detail';
import './style.css'
import List from './Components/List';
import Data_detail from './Components/data_detail';
import Register from './Components/register';
import Edit from './Components/edit';
import { QueryClient , QueryClientProvider } from 'react-query';

export default function Index() {

    const queryClient = new QueryClient();

    <QueryClientProvider client={queryClient}>
        <List />
    </QueryClientProvider>

    return (
        <div>
            <Router>
                <Navbar />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-6 offset-3">
                            <Routes>
                                <Route path='/about' element={<About />} />
                                <Route path='/' element={<Home />} />
                                <Route path='/detail/:id' element={<Detail />} />
                                <Route path='/list/' element={<List />} />
                                <Route path='/data_detail/:slug/:id' element={<Data_detail />} />
                                <Route path='/register' element={<Register />} />
                                <Route path='/edit/:id' element={<Edit/>}  />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>
        </div>
    )
}

let id_root = document.querySelector('#root');
let root = createRoot(id_root);
root.render(<Index />);