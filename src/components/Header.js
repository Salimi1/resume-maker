import React from 'react';
//styles
import styles from './Header.module.css'
//assets
import pngLogo from '../assets/logo/header.png.png'
import blueDot from '../assets/logo/Ellipse 8.png'

const Header = () => {
    return (
        <div className={`container-fluid py-md-4 px-5 px-md-5 my-md-5 ${styles.container}`}>
            <div className='row justify-content-between align-items-center'>
                <div className='d-flex d-md-none justify-content-center position-relative'>
                    <img src={blueDot} className={styles.firstBlueDot} />
                    <img id={styles.firstLogo} className={`col-12 col-md-6`} src={pngLogo} />
                    <img src={blueDot} className={styles.secondBlueDot} />
                </div>
                <div className='col-12 col-md-6 pt-md-5 mt-5'>
                    <div>Hallo!</div>
                    <strong className='fs-2 fs-md-1'>Lebenslauf Erstellen und einfach herunterladen</strong>
                    <p className='mt-2 mt-md-5 pt-md-3'>
                    Möchtest du dich für Ausbildung/Praktikum/Job bewerben und hast noch keine Lebenslauf und/oder Anschreiben?
                    Dann los, bei uns kannst du diese schnell und einfach erstellen
                    </p>
                    <button className={`btn btn-lg my-2 mt-md-2 ${styles.erstellBtn}`}>Labenslauf erstellen</button>
                </div>
                <img id={styles.secondLogo} className='col-10 col-md-6 col-lg-4 pt-md-5 mt-5' src={pngLogo} />
            </div>
        </div>
    );
};

export default Header;