import React from 'react';
import { Link } from 'react-router-dom';
//Icons
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import { GiSettingsKnobs } from 'react-icons/gi';
import { BiArrowBack } from 'react-icons/bi';
import { AiFillPicture } from 'react-icons/ai';

const MakeResumeNavbar = () => {
    return (
        <ul className='nav d-flex flex-column align-items-center'>
            <li className='nav-item'>
                <a className='nav-link ms-1 fs-4'>
                    <BiArrowBack />
                </a>
            </li>
            <Link className='nav-item text-dark nav-link p-0 mt-5 d-flex flex-column align-items-center'>
                <BsFillMenuButtonWideFill />
                Inhalt
            </Link>
            <Link className='nav-item text-dark nav-link p-0 mt-5 d-flex flex-column align-items-center'>
                <GiSettingsKnobs />
                Einstellungen
            </Link>
            <Link className='nav-item d-flex d-xl-none text-dark nav-link p-0 mt-5 flex-column align-items-center'>
                <AiFillPicture />
                Vorschau
            </Link>
        </ul>
    );
};

export default MakeResumeNavbar;