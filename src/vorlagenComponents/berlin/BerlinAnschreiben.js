import React, {useRef} from 'react';
//styles
import styles from './Berlin.module.css'
//redux
import { useDispatch, useSelector } from 'react-redux';

const BerlinAnschreiben = () => {
    
    const cvCon = useRef()
    const dispatch = useDispatch()
    const state = useSelector(state => state.allVorlagenState)
    const {name, nummer, anschradresse, email, position, activefarbecode, anschreibentext, anschreibenüberschrift, unternehmensdaten} = state;
    return (
        <div className='container-fluid'>
            <div className={`text-xl-end text-center mt-2 ${styles.downloadBtnCon}`}>
                <button style={{backgroundColor: activefarbecode}} onClick={() => dispatch({type: 'DOWNLOAD', cvCon})} className='btn text-light'>Herunterladen</button>
            </div>
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
                        <span className=''>Darmstadt, den 05. Dazember 2024</span>
                    </div>
                    <span className={`${styles.anschreibenTitle}`}>{anschreibenüberschrift}</span>
                    <pre className={`mt-3 ${styles.anschreibenText} ${styles.preTag}`}>{anschreibentext}</pre>
                </div>
            </div>
            <div style={{transform: 'translateY(-185px)'}}>
                <span style={{backgroundColor: activefarbecode}} className='rounded-2 p-2 text-light d-none d-xl-inline'>Berlin-Vorlage</span>
            </div>
        </div>
    );
};

export default BerlinAnschreiben;