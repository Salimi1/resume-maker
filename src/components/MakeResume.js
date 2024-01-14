import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
//redux
import { useSelector } from 'react-redux/es/hooks/useSelector';
//Styles
import styles from './MakeResume.module.css'
//shared
import MakeResumeContent from '../shared/MakeResumeContent';
import MakeResumeNavbar from '../shared/MakeResumeNavbar';
import { useDispatch } from 'react-redux';

const MakeResume = () => {
    const lebensläufe = useSelector(state => state.vorlagenDateienState.lebensläufe)
    const anschreiben = useSelector(state => state.vorlagenDateienState.anschreiben)
    const pdfRef = useRef()
    const dispatch = useDispatch()
    const vorlageName = useParams().name;
    const vorlageType = useParams().type;
    const activeNavItem = useParams().what;
    const activeVorlage = vorlageType === 'anschr' ? anschreiben.find(vorlage => vorlage.title == vorlageName) : lebensläufe.find(vorlage => vorlage.title == vorlageName)
    return (
        <div className='container-fluid'>
            <div style={{height: '100vh'}} className={`row`}>
                <div className='col-2 col-xl-1 d-none d-sm-block ps-0 pe-0 py-5 border-end'>
                    <MakeResumeNavbar data={{activeNavItem, vorlageName, size:'sm', vorlageType}} />
                </div>
                <div style={{height: '100%'}} className={`col-12 d-flex justify-content-center ${activeNavItem === 'preview' && 'bg-body-secondary'} col-sm-10 col-xl-6 h-100 ${activeNavItem !== 'preview' ? 'overflow-scroll' : 'overflow-hidden'} ${styles.makeResueContentCon}`}>
                    <MakeResumeContent data={{activeNavItem, vorlageType, vorlageName, activeVorlage}} />
                </div>
                <div style={{height: '100%'}} className='overflow-hidden col-lg-5 px-2 d-none d-xl-flex bg-body-secondary'>
                    {activeNavItem !== 'preview' && activeVorlage.vorlage}
                </div>
            </div>
            <div className='d-block d-sm-none row'>
                <MakeResumeNavbar data={{activeNavItem, vorlageName, size:'s', vorlageType}} />
            </div>
        </div>
    );
};

export default MakeResume;