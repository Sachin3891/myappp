import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Rating from './Rating';
import { Link } from 'react-router-dom';

export default function Newproduct() {
    return (
        <div className='container-fluid mt-2 bg-dark'>
            <div className='row'>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="image\1.jpg" className="d-block w-100" alt="..." height={450} />
                        </div>
                        <div className="carousel-item">
                            <img src="image\2.jpg" className="d-block w-100" alt="..." height={450} />
                        </div>
                        <div className="carousel-item">
                            <img src="image\3.jpg" className="d-block w-100" alt="..." height={450} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='row my-4 text-center'>
                <div className='col-md-4'>
                <div className="card">
                    <img src="image\day 1.png" className="card-img-top" alt="..." height='250px'/>
                    <div className="card-body bg-dark-subtle">
                        <h5 className="card-title">FirstComponent</h5>
                        <p className="card-text"></p>
                        <Link className="btn btn-outline-dark" to='/firstComponent'>Click</Link>
                    </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card">
                    <img src="image\day 2.png" className="card-img-top" alt="..." height='250px'/>
                    <div className="card-body bg-dark-subtle">
                        <h5 className="card-title">Demo22</h5>
                        <p className="card-text"></p>
                        <Link className="btn btn-outline-dark" to='/demo22'>Click</Link>
                    </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card">
                    <img src="image\day 3.png" className="card-img-top" alt="..." height='250px'/>
                    <div className="card-body bg-dark-subtle">
                        <h5 className="card-title">Algebric</h5>
                        <p className="card-text"></p>
                        <Link className="btn btn-outline-dark" to='/algebric'>Click</Link>
                    </div>
                </div>
                </div>
            </div>
            <div className='row mb-4 text-center'>
                <div className='col-md-4'>
                <div className="card">
                    <img src="image\day 4.png" className="card-img-top" alt="..." height='250px'/>
                    <div className="card-body bg-dark-subtle">
                        <h5 className="card-title">Bootstrap</h5>
                        <p className="card-text"></p>
                        <Link className="btn btn-outline-dark" to='/bootstrap'>Click</Link>
                    </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card">
                    <img src="image\day 5.png" className="card-img-top" alt="..." height='250px'/>
                    <div className="card-body bg-dark-subtle">
                        <h5 className="card-title">Diffproduct</h5>
                        <p className="card-text"></p>
                        <Link className="btn btn-outline-dark" to='/diffproduct'>Click</Link>
                    </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card">
                    <img src="image\day 6.png" className="card-img-top" alt="..." height='250px'/>
                    <div className="card-body bg-dark-subtle">
                        <h5 className="card-title">Gallery1</h5>
                        <p className="card-text"></p>
                        <Link className="btn btn-outline-dark" to='/gallery1'>Click</Link>
                    </div>
                </div>
                </div>
            </div>
            <div className='row mb-4 text-center'>
                <div className='col-md-4'>
                <div className="card">
                    <img src="image\day 7.png" className="card-img-top" alt="..." height='250px'/>
                    <div className="card-body bg-dark-subtle">
                        <h5 className="card-title">Inline Css</h5>
                        <p className="card-text"></p>
                        <Link className="btn btn-outline-dark" to='/inlinecss'>Click</Link>
                    </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card">
                    <img src="image\day 8.png" className="card-img-top" alt="..." height='250px'/>
                    <div className="card-body bg-dark-subtle">
                        <h5 className="card-title">Product</h5>
                        <p className="card-text"></p>
                        <Link className="btn btn-outline-dark" to='/product'>Click</Link>
                    </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card">
                    <img src="image\day 9.png" className="card-img-top" alt="..." height='250px'/>
                    <div className="card-body bg-dark-subtle">
                        <h5 className="card-title">Counter component</h5>
                        <p className="card-text"></p>
                        <Link className="btn btn-outline-dark" to='/countercomp'>Click</Link>
                    </div>
                </div>
                </div>
            </div>
            <div className='row mb-4 text-center'>
                <div className='col-md-4'>
                <div className="card">
                    <img src="image\day 10.png" className="card-img-top" alt="..." height='250px'/>
                    <div className="card-body bg-dark-subtle">
                        <h5 className="card-title">Like Dislike</h5>
                        <p className="card-text"></p>
                        <Link className="btn btn-outline-dark" to='/likedislike'>Click</Link>
                    </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card">
                    <img src="image\day 11.png" className="card-img-top" alt="..." height='250px'/>
                    <div className="card-body bg-dark-subtle">
                        <h5 className="card-title">Local storage</h5>
                        <p className="card-text"></p>
                        <Link className="btn btn-outline-dark" to='/local'>Click</Link>
                    </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card">
                    <img src="image\day 12.png" className="card-img-top" alt="..." height='250px'/>
                    <div className="card-body bg-dark-subtle">
                        <h5 className="card-title">To do List</h5>
                        <p className="card-text"></p>
                        <Link className="btn btn-outline-dark" to='/todo'>Click</Link>
                    </div>
                </div>
                </div>
            </div>
            <footer className='text-center my-4'>
                <p style={{ color: "white" }}>Copyright Sachin. <span className='heart'>&#10084;</span></p>
            </footer>
        </div>
    )
}
