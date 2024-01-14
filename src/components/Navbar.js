import React from 'react';
import { Link } from 'react-router-dom';
//Styles
import styles from './Navbar.module.css'
const Navbar = () => {
    return (
        <nav className='navbar fixed-top navbar-expand-md bg-body-tertiary'>
            <div className={`container-fluid px-4 py-2 px-md-5 ${styles.container}`}>
                <Link className="navbar-brand" to="home"><img alt='NavbarLogo' src='https://i.ibb.co/M9z0hcC/cv.png' style={{width: '30px', height: '30px'}} className="fa-solid mb-2 fa-shop me-2" />
                <strong>CV maker</strong></Link>
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
                                <a role='button' className={`btn px-3 mt-2 mt-md-0 ms-md-2 ${styles.kontaktBtn}`}>Kontakt</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;