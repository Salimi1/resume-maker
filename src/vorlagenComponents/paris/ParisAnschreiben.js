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
        <div className='container-fluid'>
            <div className={`text-xl-end text-center mt-2 ${styles.downloadBtnCon}`}>
                <button style={{backgroundColor: activefarbecode}} onClick={() => dispatch({type: 'DOWNLOAD', cvCon})} className='btn text-light'>Herunterladen</button>
            </div>
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
            <div style={{transform: 'translateY(-185px)'}}>
                <span style={{backgroundColor: activefarbecode}} className='rounded-2 p-2 text-light d-none d-xl-inline'>Paris-Vorlage</span>
            </div>
        </div>
    );
};

export default ParisAnschreiben;