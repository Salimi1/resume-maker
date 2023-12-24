import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
//redux
import { useSelector } from 'react-redux/es/hooks/useSelector';
//Components
import Paris from '../vorlagenComponents/paris/Paris';

//shared
import MakeResumeContent from '../shared/MakeResumeContent';
import MakeResumeNavbar from '../shared/MakeResumeNavbar';
//Icons
// import { BsFillMenuButtonWideFill } from 'react-icons/bs';
// import { GiSettingsKnobs } from 'react-icons/gi';
// import { BiArrowBack } from 'react-icons/bi';
// import { TbSchool } from 'react-icons/tb';
//Styles

const MakeResume = () => {
    const lebensläufe = useSelector(state => state.vorlagenDateienState.lebensläufe)
    const anschreiben = useSelector(state => state.vorlagenDateienState.anschreiben)
    const pdfRef = useRef()
    const vorlageName = useParams().name;
    const vorlageType = useParams().type;
    const activeNavItem = useParams().what;
    const activeVorlage = lebensläufe.find(vorlage => vorlage.title == vorlageName)
    return (
        <div className='container-fluid'>
            <div className={`row`}>
                <div className='col-2 col-xl-1 d-none d-sm-block ps-0 pe-0 py-5 border-end'>
                    <MakeResumeNavbar data={{activeNavItem, vorlageName, size:'sm', vorlageType}} />
                </div>
                <div className='col-10 col-xl-6 p-2 p-sm-4 p-md-5'>
                    <MakeResumeContent data={{activeNavItem, vorlageName}} />
                </div>
                <div style={{height: '110vh'}} className='col-12 overflow-hidden col-lg-5 px-3 py-1 d-none mb-3 d-xl-flex bg-body-secondary'>
                    {activeVorlage.vorlage}
    	        </div>
            </div>
            <div className='d-block d-sm-none row'>
                <MakeResumeNavbar data={{activeNavItem, vorlageName, size:'s', vorlageType}} />
            </div>
        </div>
    );
};

export default MakeResume;