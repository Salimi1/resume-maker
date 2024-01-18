import React, {useRef} from 'react';
//styles
import styles from './Paris.module.css'
//redux
import { useDispatch, useSelector } from 'react-redux';
//icons
import { FaStar } from "react-icons/fa";

const ParisAnschreiben = () => {

    const cvCon = useRef()
    const dispatch = useDispatch()
    const state = useSelector(state => state.allVorlagenState)
    const {name, nummer, anschradresse, email, position, activefarbecode, anschreibentext, anschreibenüberschrift, unternehmensdaten} = state;


    return (
        <div className={`container-fluid d-flex flex-column justify-content-evenly align-items-center ${styles.berlinVorlageCon}`}>
            <div style={{height: '90vh'}} className='d-flex align-items-center'>
                <div ref={cvCon} className={`px-5 row ${styles.rowDivTag} bg-light`}>
                    <div className={`${styles.obereTeil}`}>
                        <div style={{backgroundColor: activefarbecode}} className={`${styles.starCon}`}>
                            <FaStar className='fs-5 text-light' />
                        </div>
                        <h5 className='text-center mt-1 fw-bolder'>{name}</h5>
                    </div>
                    <div className={`${styles.mittlereTeil}`}>
                        <div className='my-4 pt-2 fw-bolder'>
                            <pre className={`mt-0 ${styles.preTag}`}>{unternehmensdaten}</pre>
                        </div>
                        <div className='mt-4 pt-2'>
                            <span className={`${styles.anschreibenTitle}`}>{anschreibenüberschrift}</span>
                            <pre className={`mt-3 ${styles.anschreibenText} ${styles.preTag}`}>
                                {anschreibentext}
                            </pre>
                        </div>
                    </div>
                    <div className={`d-flex justify-content-between ${styles.untereTeil}`}>
                        <span>{nummer}</span>
                        <span>{email}</span>
                    </div>
                </div>
            </div>
            <div style={{height: '10vh'}} className={`text-center d-flex align-items-center mt-2 ${styles.downloadBtnCon}`}>
                <button onClick={() => dispatch({type: 'DOWNLOAD', cvCon})} style={{backgroundColor: activefarbecode}} className={`btn text-light ${styles.downloadBtn}`}>Herunterladen</button>
            </div>
        </div>
    );
};

export default ParisAnschreiben;