import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from './LebenslaufAnschreiben.module.css'

const LebenslaufAnschreibenVorlage = ({data}) => {
    const {title, img, text, type} = data;
    const erstellBtn = useRef()
    const titleName = useRef()
    const imgTag = useRef()

    const showAddBtnHandler = () => {
        erstellBtn.current.style.transform = 'translateY(-200px)';
        titleName.current.style.color = '#325690'
        imgTag.current.className += ' shadow'
    };
      
      
    const hideAddBtnHandler = () => {
        erstellBtn.current.style.transform = 'translateY(200px)';
        titleName.current.style.color = '#000'
        imgTag.current.className = `w-100 pt-3 mb-3 ${styles.bild}`
    }
    return (
        <div className='col-11 ms-3 ms-sm-0 col-sm-6 col-md-6 col-lg-4 px-4 my-5'>
            <div onMouseOver={showAddBtnHandler} onMouseOut={hideAddBtnHandler} className={`px-2 px-md-4 position-relative rounded-2 overflow-hidden ${styles.container}`}>
                <img ref={imgTag} className={`w-100 pt-3 mb-3 ${styles.bild}`} src={img} />
                <div className='d-flex justify-content-center'>
                    <Link to={`/${type}/${title}/edit/inhalt`} ref={erstellBtn} className={`btn text-light px-md-3 position-absolute ${styles.erstellBtn}`}>Diese Vorlage benutzen</Link>
                </div>
                <div className='d-flex justify-content-between'>
                    <span className={styles.pdfText}>PDF</span>
                    <span className={styles.pdfText}>DOCX</span>
                </div>
            </div>
            <h4 ref={titleName}>{title}</h4>
            <span className='text-secondary'>{text}</span>
        </div>
    );
};

export default LebenslaufAnschreibenVorlage;