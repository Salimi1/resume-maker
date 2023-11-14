import React from 'react';
import { useParams, Link } from 'react-router-dom';
//Components
import London from '../vorlagenComponents/londonVorlage/London';
//shared
import MakeResumeContent from '../shared/MakeResumeContent';
import MakeResumeNavbar from '../shared/MakeResumeNavbar';
//Icons
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import { GiSettingsKnobs } from 'react-icons/gi';
import { BiArrowBack } from 'react-icons/bi';

// const obj = [
//     {name: 'london', vorlage: <London />},
//     {name: 'paris', vorlage: 'Hallo'}
// ]

const MakeResume = () => {
    const vorlageName = useParams().name;
    const activeNavItem = useParams().what;
    return (
        <div className='container-fluid'>
            <div className='row justify-content-center h-100'>
                <div className='col-2 col-xl-1 d-none d-sm-block ps-0 pe-0 py-5 border-end'>
                    <MakeResumeNavbar data={{activeNavItem, vorlageName, size:'sm'}} />
                </div>
                <div className='col-10 col-xl-6 p-2 p-sm-4 p-md-5'>
                    <MakeResumeContent data={{activeNavItem, vorlageName}} />
                </div>
                <div className='col-12 col-lg-5 d-none d-xl-flex justify-content-center bg-body-secondary p-4 overflow-hidden align-items-center'>
                    <London />
    	        </div>
            </div>
            <div className='d-block d-sm-none row'>
                <MakeResumeNavbar data={{activeNavItem, vorlageName, size:'s'}} />
            </div>
        </div>
    );
};

export default MakeResume;