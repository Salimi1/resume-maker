import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
//Icons
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import { GiSettingsKnobs } from 'react-icons/gi';
import { BiArrowBack } from 'react-icons/bi';
import { AiFillPicture } from 'react-icons/ai';


const MakeResumeNavbar = ({data}) => {
    const {activeNavItem, vorlageName, size, vorlageType} = data;
    return (
        size == 'sm' ? (
            <ul className='nav flex-column align-items-center'>
                <li className='nav-item'>
                    <Link to='/home' className='nav-link text-dark ms-1 fs-4'>
                        <BiArrowBack />
                    </Link>
                </li>
                <Link to={`/${vorlageType}/${vorlageName}/edit/inhalt`} className={`nav-item nav-link p-0 mt-5 d-flex flex-column align-items-center ${activeNavItem === 'inhalt' ? 'text-primary' : 'text-dark'}`}>
                    <BsFillMenuButtonWideFill />
                    Inhalt
                </Link>
                <Link to={`/${vorlageType}/${vorlageName}/edit/setting`} className={`nav-item nav-link p-0 mt-5 d-flex flex-column align-items-center ${activeNavItem === 'setting' ? 'text-primary' : 'text-dark'}`}>
                    <GiSettingsKnobs />
                    Einstellung
                </Link>
                <Link to={`/${vorlageType}/${vorlageName}/edit/preview`} className={`nav-item d-flex d-xl-none nav-link p-0 mt-5 flex-column align-items-center ${activeNavItem === 'preview' ? 'text-primary' : 'text-dark'}`}>
                    <AiFillPicture />
                    Vorschau
                </Link>
            </ul>
        ) : (
            <ul className='nav justify-content-evenly fs-6 align-items-center fixed-bottom bg-body-tertiary'>
                <Link to='/home' className='nav-link text-dark'><BiArrowBack /></Link>
                <Link to={`/${vorlageType}/${vorlageName}/edit/inhalt`} className={`nav-link ${activeNavItem === 'inhalt' ? 'text-primary' : 'text-dark'}`}><BsFillMenuButtonWideFill /></Link>
                <Link to={`/${vorlageType}/${vorlageName}/edit/setting`} className={`nav-link ${activeNavItem === 'setting' ? 'text-primary' : 'text-dark'}`}><GiSettingsKnobs /></Link>
                <Link to={`/${vorlageType}/${vorlageName}/edit/preview`} className={`nav-link ${activeNavItem === 'preview' ? 'text-primary' : 'text-dark'}`}><AiFillPicture /></Link>
            </ul>
        )
    )
};

export default MakeResumeNavbar;