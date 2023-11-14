import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
//Icons
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import { GiSettingsKnobs } from 'react-icons/gi';
import { BiArrowBack } from 'react-icons/bi';
import { AiFillPicture } from 'react-icons/ai';


const MakeResumeNavbar = ({data}) => {
    const {activeNavItem, vorlageName, size} = data;
    return (
        size == 'sm' ? (
            <ul className='nav flex-column align-items-center'>
                <li className='nav-item'>
                    <Link to='/home' className='nav-link text-dark ms-1 fs-4'>
                        <BiArrowBack />
                    </Link>
                </li>
                <Link to={`/vorlagen/${vorlageName}/edit/inhalt`} className={`nav-item nav-link p-0 mt-5 d-flex flex-column align-items-center ${activeNavItem === 'inhalt' ? 'text-primary' : 'text-dark'}`}>
                    <BsFillMenuButtonWideFill />
                    Inhalt
                </Link>
                <Link to={`/vorlagen/${vorlageName}/edit/setting`} className={`nav-item nav-link p-0 mt-5 d-flex flex-column align-items-center ${activeNavItem === 'setting' ? 'text-primary' : 'text-dark'}`}>
                    <GiSettingsKnobs />
                    Einstellungen
                </Link>
                <Link to={`/vorlagen/${vorlageName}/edit/preview`} className={`nav-item d-flex d-xl-none nav-link p-0 mt-5 flex-column align-items-center ${activeNavItem === 'preview' ? 'text-primary' : 'text-dark'}`}>
                    <AiFillPicture />
                    Vorschau
                </Link>
            </ul>
        ) : (
            <ul className='nav justify-content-evenly fixed-bottom bg-primary'>
                <Link to={`/vorlagen/${vorlageName}/edit/inhalt`} className='nav-item'><a className='nav-link text-light'>Inhalt <BsFillMenuButtonWideFill /></a></Link>
                <Link to={`/vorlagen/${vorlageName}/edit/setting`} className='nav-item'><a className='nav-link text-light'>Einstellungen <GiSettingsKnobs /></a></Link>
                <Link to={`/vorlagen/${vorlageName}/edit/preview`} className='nav-item'><a className='nav-link text-light'>Vorschau <AiFillPicture /></a></Link>
            </ul>
        )
    )
};

export default MakeResumeNavbar;