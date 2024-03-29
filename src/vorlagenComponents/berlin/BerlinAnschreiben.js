import React, {useRef} from 'react';
//styles
import styles from './Berlin.module.css'
//redux
import { useDispatch, useSelector } from 'react-redux';

const BerlinAnschreiben = () => {
    const state = useSelector(state => state.allVorlagenState)
    const {name, nummer, anschradresse, email, position, activefarbecode, anschreibentext, anschreibenüberschrift, unternehmensdaten, monaten} = state;
    const date = new Date()
    const day = date.getDate()
    const monthe = monaten[date.getMonth()]
    // console.log(date.getMonth);
    const cvCon = useRef()
    const dispatch = useDispatch()
    return (
        <div className={`container-fluid d-flex flex-column justify-content-evenly align-items-center ${styles.berlinVorlageCon}`}>
            <div style={{height: '90vh'}} className='d-flex align-items-center'>
                <div ref={cvCon} className={`row px-5 ${styles.rowDivTag} bg-light`}>
                    <div className='row h-25 mt-5'>
                        <div className={`col-6 d-flex flex-column justify-content-center align-item-end`}>
                            <p className={`${styles.obereSeiteLinkPTag}`}>{name + ` ${anschradresse}`}</p>
                            <div>
                                <pre className={`${styles.preTag}`}>{unternehmensdaten}</pre>
                            </div>
                        </div>
                        <div style={{borderLeft: `2px solid ${activefarbecode}`}} className={`col-6`}>
                            <h4 className='mb-4 pb-1'>{name}</h4>
                            <div className={`p-0 m-0`}>
                                <span className={`${styles.kontaktDatenSpan}`}>Kontaktdaten</span>
                                <p className='p-0 m-0'>{nummer}</p>
                                <p className='p-0 m-0'>{email}</p>
                            </div>
                            <div className={`mt-3`}>
                                <span className={`${styles.anschriftSpan}`}>Anschrift</span>
                                <pre className={`p-0 m-0 ${styles.preTag}`}>{anschradresse}</pre>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.anschreibenUntereSeite} mt-2`}>
                        <div className='text-end py-3'>
                            <span className=''>Darmstadt, den {day}. {monthe} 2024</span>
                        </div>
                        <span className={`${styles.anschreibenTitle}`}>{anschreibenüberschrift}</span>
                        <pre className={`mt-3 ${styles.anschreibenText} ${styles.preTag}`}>{anschreibentext}</pre>
                    </div>
                </div>
            </div>
            <div style={{height: '10vh'}} className={`text-center d-flex align-items-center mt-2 ${styles.downloadBtnCon}`}>
                <button onClick={() => dispatch({type: 'DOWNLOAD', cvCon})} style={{backgroundColor: activefarbecode}} className={`btn text-light ${styles.downloadBtn}`}>Herunterladen</button>
            </div>
        </div>
    );
};

export default BerlinAnschreiben;