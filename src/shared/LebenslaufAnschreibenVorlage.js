import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from './LebenslaufAnschreiben.module.css'

const LebenslaufAnschreibenVorlage = ({data}) => {
    const erstellBtn = useRef()
    const title = useRef()
    const img = useRef()
    const showAddBtnHandler = () => {
        erstellBtn.current.style.transform = 'translateY(-200px)';
        title.current.className = 'text-primary'
        img.current.className += ' shadow'
    };
      
      
    const hideAddBtnHandler = () => {
        erstellBtn.current.style.transform = 'translateY(200px)';
        title.current.className = 'text-dark'
        img.current.className = `w-100 pt-3 mb-3 ${styles.bild}`
    }
    return (
        <div className='col-12 col-md-6 col-lg-4 px-4 my-5'>
            <div onMouseOver={showAddBtnHandler} onMouseOut={hideAddBtnHandler} className={`px-2 px-md-4 position-relative rounded-2 overflow-hidden ${styles.container}`}>
                <img ref={img} className={`w-100 pt-3 mb-3 ${styles.bild}`} src={data.img} />
                <div className='d-flex justify-content-center'>
                    <Link to={`/vorlagen/${data.title.toLowerCase()}/edit/inhalt`} ref={erstellBtn} className={`btn btn-primary px-md-3 position-absolute ${styles.erstellBtn}`}>Diese Vorlage benutzen</Link>
                </div>
                <div className='d-flex justify-content-between'>
                    <span className={styles.pdfText}>PDF</span>
                    <span className={styles.pdfText}>DOCX</span>
                </div>
            </div>
            <h4 ref={title}>{data.title}</h4>
            <span className='text-secondary'>{data.text}</span>
        </div>
    );
};

export default LebenslaufAnschreibenVorlage;