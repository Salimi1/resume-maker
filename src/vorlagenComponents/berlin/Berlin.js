import React, {useRef, useEffect} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
//styles
import styles from './Berlin.module.css'
//Icons
import { MdOutlinePhone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
//Bilder
import defaultBild from '../../assets/pictures/Group 42.png'
//Redux
import { useDispatch, useSelector } from 'react-redux';

const Berlin = () => {
    const cvCon = useRef()
    const imgTagRef = useRef()
    const dispatch = useDispatch()
    const state = useSelector(state => state.allVorlagenState)
    const {name, nummer, cvadresse, übermich, email, position, activefarbecode, bild, accordionüberschrift1, accordionüberschrift2, accordionüberschrift3, accordionüberschrift4, accordionüberschrift5, accordionüberschrift6, accordionüberschrift7, accordionüberschrift8, berufserfahrungen, bildung, projekte,
    kompetenzen, sprachen, interessen, stärken} = state;

    useEffect(() => {
        if(!bild){
          imgTagRef.current.setAttribute('src', defaultBild)
        } else{
          const reader = new FileReader()
          reader.onload = (e) => {
              const imgData = e.target.result
              imgTagRef.current.src = imgData
          }
          reader.readAsDataURL(bild);
      }
      },[bild])

    const sprachenInteressenKompetenzenundStärkenReturnVorlageHandler = (title, dataArray) => {
        return(
            <div className='mb-2'>
                <h5 style={{borderBottom: `1px solid ${activefarbecode}`}} className={`${styles.h5Tag}`}>{title.toUpperCase()}</h5>
                <div className={`${styles[title]}`}>
                    {dataArray?.map((item, index)=> (
                        <span className='d-block' key={index}>{item.kompetenz || item.sprache || item.interesse || item.stärke}</span>
                    ))}
                </div>
            </div>
        )
    }

    const berufserfahrungBildungProjekteReturnVorlageHandler = (title, dataArray) => {
        return (
            dataArray.length > 0 && (
                <div className={`${styles.berufserfahrungen}`}>
                    <h5 style={{borderBottom: `1px solid ${activefarbecode}`}} className={`${styles.h5Tag}`}>{title?.toUpperCase()}</h5>
                    {dataArray.map((item, index) => (
                        title === 'Projekte' ? (
                            <div className='mb-1'>
                                <span>{item.title}: </span>
                                <span>{item.link}</span>
                            </div>
                        ) : (
                            <div>
                                <div className={`${styles[title]} d-flex justify-content-between mb-1`}>
                                    <span>{item.überschrift || item.schule}</span>
                                    <span>{item.arbeitgeber || item.datum}</span>
                                </div>
                                {title === 'berufserfahrungen' && (<p className='mb-2'>{item.datum}</p>)}
                            </div>
                        )
                    ))}
                </div>
            )
        )
    }

    const returnEmailundNummerMitIconHandler = (nummerOdreEmail, icon, className) => {
        return(
            <div className={`${className}`}>
                {icon}
                <span className='ms-1' style={{borderBottom: `1px solid ${activefarbecode}`}}>{nummerOdreEmail}</span>
            </div>
        )
    }

    return (
        <div className={`container-fluid d-flex flex-column justify-content-evenly align-items-center ${styles.berlinVorlageCon}`}>
            <div style={{height: '90vh'}} className='d-flex align-items-center'>
                <div ref={cvCon} className={`row text-light mb-4 m-sm-0 ${styles.rowDivTag} overflow-hidden`}>
                    <div style={{backgroundColor: activefarbecode}} className={`${styles.obereSeite} row m-0`}>
                        <div className={`col-6 d-flex flex-column justify-content-center align-items-center`}>
                            <img src={defaultBild} ref={imgTagRef} className={`col-6 p-0 ${styles.bild}`} />
                        </div>
                        <div className={`col-6 d-flex flex-column justify-content-center ${styles.persönlicheDsten}`}>
                            <span>{position}</span>
                            <div className={`${styles.name}`}>
                                {name}
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.mitlereSeite} col-12 text-dark overflow-hidden`}>
                        <div className='row'>
                            <div className={`${styles.mitlereSeiteLinks} col-5 ps-4`}>
                                {sprachenInteressenKompetenzenundStärkenReturnVorlageHandler(accordionüberschrift4, kompetenzen)}
                                {sprachenInteressenKompetenzenundStärkenReturnVorlageHandler(accordionüberschrift6, interessen)}
                                {sprachenInteressenKompetenzenundStärkenReturnVorlageHandler(accordionüberschrift5, sprachen)}
                                {sprachenInteressenKompetenzenundStärkenReturnVorlageHandler(accordionüberschrift7, stärken)}
                            </div>
                            <div className={`${styles.mitlereSeiteRechts} col-7 ps-2 pe-4`}>
                                <div>
                                    <h5 style={{borderBottom: `1px solid ${activefarbecode}`}} className={`${styles.h5Tag}`}>{accordionüberschrift8?.toUpperCase()}</h5>
                                    <p className='my-1 pb-1'>{übermich}</p>
                                </div>
                                {berufserfahrungBildungProjekteReturnVorlageHandler(accordionüberschrift1, berufserfahrungen)}
                                {berufserfahrungBildungProjekteReturnVorlageHandler(accordionüberschrift2, bildung)}
                                {berufserfahrungBildungProjekteReturnVorlageHandler(accordionüberschrift3, projekte)}
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.untereSeite} col-12 text-dark pt-2`}>
                        <div className='row'>
                            {returnEmailundNummerMitIconHandler(email, <CgMail />, 'col-5 ps-4')}
                            {returnEmailundNummerMitIconHandler(nummer, <MdOutlinePhone />, 'col-7 text-end')}
                        </div>
                    </div>
                </div>

            </div>
            <div style={{height: '10vh'}} className={`text-center d-flex align-items-center mt-2 ${styles.downloadBtnCon}`}>
                <button onClick={() => dispatch({type: 'DOWNLOAD', cvCon})} style={{backgroundColor: activefarbecode}} className={`btn text-light ${styles.downloadBtn}`}>Herunterladen</button>
            </div>
            {/* <div style={{transform: 'translateY(-185px)'}}>
                <span style={{backgroundColor: activefarbecode}} className='rounded-2 p-2 text-white d-none d-xl-inline'>Berlin-Vorlage</span>
            </div> */}
        </div>
    );
};

export default Berlin;