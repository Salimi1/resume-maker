import React from 'react';
//styles
import styles from './Header.module.css'
//assets
import pngLogo from '../assets/logos/header.png.png'
import blueDot from '../assets/logos/Ellipse 8.png'

const Header = () => {
    return (
        <div className={`container-fluid py-md-4 px-4 px-md-5 my-md-5 ${styles.container}`}>
            <div className='row'>
                <div className='d-flex d-md-none justify-content-center position-relative'>
                    <img src={blueDot} className={styles.firstBlueDot} />
                    <img id={styles.firstLogo} className='col-12 col-md-6 mt-4' src={pngLogo} />
                    <img src={blueDot} className={styles.secondBlueDot} />
                </div>
                <div className='col-12 col-md-6 pt-md-5 mt-5'>
                    <div>Hallo!</div>
                    <strong className='fs-2 fs-md-1'>Lebenslauf Erstellen und einfach herunterladen</strong>
                    <p className='mt-2 mt-md-5 pt-md-3'>
                    Front-End devel oper based in Bekasi, Indonesian
                    I’am coding with a clean and beautiful problem
                    solving in mind.
                    </p>
                    <button className='btn btn-primary my-2 mt-md-2'>Erstelle Labenslauf</button>
                </div>
                <img id={styles.secondLogo} className='col-10 col-md-6 col-lg-4 mt-5' src={pngLogo} />
            </div>
        </div>
    );
};

export default Header;