import React from 'react';
//Styles
import styles from './Navbar.module.css'
const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-md bg-body-tertiary'>
            <div className={`container-fluid px-4 px-md-5 ${styles.container}`}>
                <a href='#' className='navbar-brand'>CV maker</a>
                <button data-bs-toggle='offcanvas' data-bs-target='#navbar' className='navbar-toggler'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='offcanvas offcanvas-end' id='navbar'>
                    <div className='offcanvas-header'>
                        <h2 className='offcanvas-title'>CV maker</h2>
                        <button className='btn-close' data-bs-dismiss='offcanvas'></button>
                    </div>
                    <div className='offcanvas-body justify-content-start justify-content-md-end'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a role='button' className='nav-link'>Lebensläufe</a>
                            </li>
                            <li className='nav-item'>
                                <a role='button' className='nav-link'>Anschreiben</a>
                            </li>
                            <li className='nav-item'>
                                <a role='button' className='nav-link'>Blogs</a>
                            </li>
                            <li className='nav-item'>
                                <a role='button' className='btn btn-primary px-3 mt-2 mt-md-0 ms-md-2'>Kontakt</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;