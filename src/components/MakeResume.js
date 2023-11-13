import React from 'react';
import { useParams, Link } from 'react-router-dom';
//Components
import London from '../vorlagenComponents/londonVorlage/London';
//shared
import MakeResumeInfoBox from '../shared/MakeResumeInfoBox';
import MakeResumeNavbar from '../shared/MakeResumeNavbar';
//Icons
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import { GiSettingsKnobs } from 'react-icons/gi';
import { BiArrowBack } from 'react-icons/bi';




const MakeResume = () => {
    const vorlageName = useParams().name;
    return (
        <div className='container-fluid'>
            <div className='row h-100'>
                <div className='col-xl-1 col-lg-2 d-none d-md-block ps-0 pe-0 py-5 border-end'>
                    <MakeResumeNavbar />
                </div>
                <div className='col-10 col-xl-6 p-5'>
                    <MakeResumeInfoBox />
                </div>
                <div className='col-12 col-lg-5 d-none d-xl-flex justify-content-center bg-body-secondary p-4 overflow-hidden align-items-center'>
                    <London />
    	        </div>
            </div>
            <div className='d-block d-md-none row w-100 bg-primary'>
                <ul className='nav justify-content-center'>
                    <li className='nav-item'><a className='nav-link text-light'>Inhalt <BsFillMenuButtonWideFill /></a></li>
                    <li className='nav-item'><a className='nav-link text-light'>Einstellungen <GiSettingsKnobs /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default MakeResume;