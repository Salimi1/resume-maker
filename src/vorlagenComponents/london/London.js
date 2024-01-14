import React, {useRef, useEffect} from 'react';
//JsPdf
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
//Pictures
import defaultBild from '../../assets/pictures/Group 42.png'
//Icons
import { TbSchool } from 'react-icons/tb';
import { TbPointFilled } from "react-icons/tb";
import { TbPoint } from "react-icons/tb";
//styles
import styles from './London.module.css'
//Redux
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const London = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.allVorlagenState)
    const {name, nummer, cvadresse, email, position, übermich, activefarbecode, bild, berufserfahrungen, bildung, projekte,
    kompetenzen, sprachen, interessen, stärken,} = state;
    const imgTagRef = useRef()
    const cvCon = useRef()

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
    }, [bild])      

    const kompetenzInteresseStärkeHandler = (key, dataArray) => {
        return(
            <div className={`mt-3`}>
                <span className={`${styles.linkeSeiteÜberschrifte}`}>{key}</span>
                <ul className={`${styles.ulTag} px-3`}>
                    {dataArray.map((item, index) => (
                        <li className='pe-4' key={index}>{item.sprache || item.interesse || item.stärke || item.kompetenz}</li>
                    ))}
                </ul>
            </div>
        )
    }


    const erfahrungBildungProjektHandler = (key, dataArray) => {
        if(dataArray[0].überschrift || dataArray[0].kompetenz){
            return(
                <div>
                    <h4 style={{borderBottom: `2px solid ${activefarbecode}`}} className={`${styles.partTitle}`}>{key}</h4>
                    <div>
                        {dataArray.map((item, index) =>
                            <div key={index} className={`${styles.partTitlesRows}`}>
                                <span className={item.überschrift && 'fw-bolder'}>{item.überschrift || item.title}</span>
                                {item.überschrift ? (
                                    <div className={item.überschrift && 'd-flex justify-content-between mt-1'}>
                                        <span>{item.arbeitgeber}</span>
                                        <span>{item.datum}</span>
                                    </div>
                                ) : (
                                    <div className='mt-1'>
                                        {Array(item.niveau).fill(<TbPointFilled />)}
                                        {Array(5 - item.niveau).fill(<TbPoint />)}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )
        } else{
            return (
                <div>
                    <h4 style={{borderBottom: `2px solid ${activefarbecode}`}} className={`${styles.partTitle}`}>{key}</h4>
                    {dataArray.map((item, index) => (
                        <div key={index}>
                            {item.link ? (
                                <div className='d-flex flex-column mt-2'>
                                    <span className='fw-medium'>{item.title}</span>
                                    <span>{item.link}</span>
                                </div>
                            ) : (
                                <div className='d-flex justify-content-between mt-1'>
                                    <span className='fw-medium'>{item.schule}</span>
                                    <span>{item.datum}</span>
                                </div>
                            )}
                        </div>

                    ))}
                </div>
            )
        }
    }


    return (
        <div className='container-fluid ps-lg-0'>
            <div className={`text-xl-end text-center mt-2 ${styles.downloadBtnCon}`}>
                <button style={{backgroundColor: activefarbecode}} onClick={() => dispatch({type: 'DOWNLOAD', cvCon})} className='btn text-light'>Herunterladen</button>
            </div>
            <div className={`row ${styles.rowDivTag}`} ref={cvCon}>
                <div style={{backgroundColor: activefarbecode}} className={`col-4 ${styles.leftSide}`}>
                    <div className={`mt-4`}>
                        <img ref={imgTagRef} className={styles.bild} />
                    </div>
                    <div className='mt-2'>
                        <span className={`fs-5`}>{name}</span>
                        <p className={`text-text-body-tertiary`}>{position}</p>
                    </div>
                    <div>
                        <div className={`${styles.kontaktBox}`}>{nummer}</div>
                        <div className={`${styles.kontaktBox}`}>{email}</div>
                        <div className={`${styles.kontaktBox}`}>{cvadresse}</div>
                    </div>
                    <div>
                        {kompetenzInteresseStärkeHandler('Sprachen', sprachen)}
                        {kompetenzInteresseStärkeHandler('Kompetenzen', kompetenzen)}
                        {kompetenzInteresseStärkeHandler('Interessen', interessen)}
                        {kompetenzInteresseStärkeHandler('Stärken', stärken)}
                    </div>
                </div>
                <div className={`col-8 ${styles.rightSide}`}>
                    <div>
                    <h4 style={{borderBottom: `2px solid ${activefarbecode}`}} className={`${styles.partTitle}`}>ÜBER MICH</h4>
                        <p>{übermich}</p>
                    </div>
                    {erfahrungBildungProjektHandler('BERUFSERFAHRUNGEN', berufserfahrungen)}
                    {erfahrungBildungProjektHandler('BILDUNG', bildung)}
                    {erfahrungBildungProjektHandler('PROJEKTE', projekte)}
                </div>
            </div>
            <div style={{transform: 'translateY(-185px)'}}>
                <span style={{backgroundColor: activefarbecode}} className='rounded-2 p-2 text-light d-none d-xl-inline'>London-Vorlage</span>
            </div>
        </div>
    );
};

export default London;