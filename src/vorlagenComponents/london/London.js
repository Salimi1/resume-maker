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
    kompetenzen, sprachen, interessen, stärken, accordionüberschrift1, accordionüberschrift2, accordionüberschrift3, accordionüberschrift4, accordionüberschrift5, accordionüberschrift6, accordionüberschrift7} = state;
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
            dataArray.length > 0 && (
                <div className={`mt-3`}>
                    <span className={`${styles.linkeSeiteÜberschrifte}`}>{key}</span>
                    <ul className={`${styles.ulTag} px-3`}>
                        {dataArray?.map((item, index) => (
                            <li className='pe-4' key={index}>{item.sprache || item.interesse || item.stärke || item.kompetenz}</li>
                        ))}
                    </ul>
                </div>
            )
        )
    }


    const erfahrungBildungProjektHandler = (key, dataArray) => {
        if(dataArray.length > 0 && (dataArray[0].überschrift || dataArray[0].kompetenz)){
            return(
                dataArray.length > 0 && (
                <div>
                    <h4 style={{borderBottom: `2px solid ${activefarbecode}`}} className={`${styles.partTitle}`}>{key}</h4>
                    <div>
                        {dataArray?.map((item, index) =>
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
            )
        } else{
            return (
                dataArray.length > 0 && (
                <div>
                    <h4 style={{borderBottom: `2px solid ${activefarbecode}`}} className={`${styles.partTitle}`}>{key}</h4>
                    {dataArray?.map((item, index) => (
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
            )
        }
    }


    return (
        <div className={`container-fluid d-flex flex-column justify-content-evenly align-items-center ps-lg-0 ${styles.londonVorlageCon}`}>
            <div style={{height: '90vh'}} className='d-flex align-items-center'>
                <div className={`row ${styles.rowDivTag} overflow-hidden`} ref={cvCon}>
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
                            {kompetenzInteresseStärkeHandler(accordionüberschrift5, sprachen)}
                            {kompetenzInteresseStärkeHandler(accordionüberschrift4, kompetenzen)}
                            {kompetenzInteresseStärkeHandler(accordionüberschrift6, interessen)}
                            {kompetenzInteresseStärkeHandler(accordionüberschrift7, stärken)}
                        </div>
                    </div>
                    <div className={`col-8 ${styles.rightSide}`}>
                        <div>
                        <h4 style={{borderBottom: `2px solid ${activefarbecode}`}} className={`${styles.partTitle}`}>Über Mich</h4>
                            <p>{übermich}</p>
                        </div>
                        {erfahrungBildungProjektHandler(accordionüberschrift1, berufserfahrungen)}
                        {erfahrungBildungProjektHandler(accordionüberschrift2, bildung)}
                        {erfahrungBildungProjektHandler(accordionüberschrift3, projekte)}
                    </div>
                </div>
            </div>
            <div style={{height: '10vh'}} className={`text-center d-flex align-items-center mt-2 ${styles.downloadBtnCon}`}>
                <button onClick={() => dispatch({type: 'DOWNLOAD', cvCon})} style={{backgroundColor: activefarbecode}} className={`btn text-light ${styles.downloadBtn}`}>Herunterladen</button>
            </div>
        </div>
    );
};

export default London;