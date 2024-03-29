import React, {useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
//styles
import styles from './London.module.css'

const LondonAnschreiben = () => {
    const cvCon = useRef()
    const dispatch = useDispatch()
    const state = useSelector(state => state.allVorlagenState)
    const {name, nummer, anschradresse, email, position, activefarbecode, anschreibentext, anschreibenüberschrift, unternehmensdaten} = state;

    return (
        <div className={`container-fluid d-flex flex-column justify-content-evenly align-items-center ${styles.berlinVorlageCon}`}>
            <div style={{height: '90vh'}} className='d-flex align-items-center'>
                <div ref={cvCon} className={`row ${styles.rowDivTag} bg-light`}>
                    <div style={{backgroundColor: activefarbecode}} className={`row m-0 p-4 ${styles.obereSeite}`}>
                        <div className={`col-6 d-flex flex-column justify-content-center align-item-end mt-5`}>
                            <p className={`${styles.obereSeiteLinkPTag} mb-1`}>{name + anschradresse}</p>
                            <div>
                                <pre className={`${styles.preTag}`}>{unternehmensdaten}</pre>
                            </div>
                        </div>
                        <div className={`col-6 ${styles.anschreibenKontaktDatenCon}`}>
                            <h5 className='mt-4 pb-1'>{name}</h5>
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
                    <div className={`${styles.anschreibenUntereSeite} p-4 mt-2`}>
                        <div className='text-end py-3'>
                            <span className=''></span>
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

export default LondonAnschreiben;