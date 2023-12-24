import React, { useRef } from 'react';

//Pictures
import bild from '../../assets/pictures/Group 42.png'

//JSPDF
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

//Icons
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { TbPointFilled } from "react-icons/tb";
import { TbPoint } from "react-icons/tb";


//Styles
import styles from './Paris.module.css'
import { BiRightArrow } from 'react-icons/bi';





const Paris = () => {
    const cvCon = useRef()
    const downloadPDF = () => {
        const cv = cvCon.current;
        html2canvas(cv, { scale: 3, useCORS: true,  }).then((canvas) => {
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const imgData = canvas.toDataURL('image/png', 0.8);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            // Berechne das Verhältnis basierend auf der Breite
            const ratio = pdfWidth / imgWidth;
            const imgX = 0; // Kein horizontaler Versatz
            const imgY = (pdfHeight - imgHeight * ratio) / 100; // Zentriere das Bild vertikal
    
            pdf.addImage(imgData, 'PNG', imgX, imgY, pdfWidth, imgHeight * ratio);
            pdf.save('cv.pdf');
        });
    };
    return (
        <div className='container-fluid'>
            <div ref={cvCon} className={`row ${styles.rowDivTag}`}>
                <div className={`col-8 ${styles.leftSide}`}>
                    <h5 className={`${styles.name}`}>Farzad Salimi</h5>
                    <br/>
                    <br/>
                    <h4 className={`${styles.partTitle} ps-2`}>BERUFSERFAHRUNG</h4>
                    <div className=''>
                        <div className={`${styles.partTitlesRows}`}>
                            <span className='fw-bolder'>Praktikant</span>
                            <div className='d-flex justify-content-between'>
                                <span className=''>Autowerkstatt</span>
                                <span className=''>08.2018 - 12.2018</span>
                            </div>
                        </div>
                        <div className={`${styles.partTitlesRows}`}>
                            <span className='fw-bolder'>Angestellter</span>
                            <div className='d-flex justify-content-between'>
                                <span className=''>Merck Darmstadt</span>
                                <span className=''>09.2022 - 12.2023</span>
                            </div>
                        </div>
                        <div className={`${styles.partTitlesRows}`}>
                            <span className='fw-bolder'>Praktikant</span>
                            <div className='d-flex justify-content-between'>
                                <span className=''>tegut</span>
                                <span className=''>05.2021 - 05.2021</span>
                            </div>
                        </div>
                        <div className={`${styles.partTitlesRows}`}>
                            <span className='fw-bolder'>Praktikant</span>
                            <div className='d-flex justify-content-between'>
                                <span className=''>Kani Friseure</span>
                                <span className=''>05.2023 - 05.2023</span>
                            </div>
                        </div>
                    </div>
                    <h4 className={`${styles.partTitle} ps-2`}>BILDUNG</h4>
                    <div>
                        <div className={`d-flex justify-content-between ${styles.partTitlesRows}`}>
                            <span>Shahidrezaian</span>
                            <span>2013-2018</span>
                        </div>
                        <div className={`d-flex justify-content-between ${styles.partTitlesRows}`}>
                            <span>Moghahmad</span>
                            <span>2018-2019</span>
                        </div>
                        <div className={`d-flex justify-content-between ${styles.partTitlesRows}`}>
                            <span>Mornewegschule</span>
                            <span>2021-laufend</span>
                        </div>
                    </div>
                    <h4 className={`${styles.partTitle} ps-2`}>PROJEKTE</h4>
                    <div>
                        <div className={`${styles.partTitlesRows}`}>
                            <div className='fw-bold'>Meine erste Webseite:</div>
                            <span>https://salimi-shop.netlify.app/f&c</span>
                        </div>
                        <div className={`${styles.partTitlesRows}`}>
                            <div className='fw-bold'>Meine zweite Webseite:</div>
                            <span>https://salimi-movieshow-app.netlify.app/home</span>
                        </div>
                    </div>
                </div>
                <div className={`col-4 py-2 pt-4 ${styles.rightSide}`}>
                    <div className='text-center'>
                        <img className={`rounded-pill p-1 ${styles.bild}`} src={bild} />
                    </div>
                    <h4 className={`${styles.partTitle} text-center`}>KONTAKT</h4>
                    <div>
                        <div className={`${styles.partTitlesRows}`}>
                            <MdOutlineLocationOn />
                            <span className='ms-1'>Obere Mühlstraße 56b, 64291</span>
                        </div>
                        <div className={`${styles.partTitlesRows}`}>
                            <MdOutlinePhone />
                            <span className='ms-1'>015215168519</span>
                        </div>
                        <div className={`${styles.partTitlesRows}`}>
                            <CgMail />
                            <span className='ms-1'>shikhiarma@gmail.com</span>
                        </div>
                    </div>
                    <h4 className={`${styles.partTitle} text-center`}>KOMPETENZEN</h4>
                    <div>
                        <div className={`${styles.partTitlesRows}`}>
                            <span>HTML & CSS</span>
                            <div>
                                <TbPointFilled />
                                <TbPointFilled />
                                <TbPointFilled />
                                <TbPointFilled />
                                <TbPoint />
                            </div>
                        </div>
                        <div className={`${styles.partTitlesRows}`}>
                            <span>JS & React</span>
                            <div>
                                <TbPointFilled />
                                <TbPointFilled />
                                <TbPointFilled />
                                <TbPointFilled />
                                <TbPoint />
                            </div>
                        </div>
                        <div className={`${styles.partTitlesRows}`}>
                            <span>Bootstrap & Rejex</span>
                            <div>
                                <TbPointFilled />
                                <TbPointFilled />
                                <TbPointFilled />
                                <TbPointFilled />
                                <TbPoint />
                            </div>
                        </div>
                        <div className={`${styles.partTitlesRows}`}>
                            <span>Git & Redux</span>
                            <div>
                                <TbPointFilled />
                                <TbPointFilled />
                                <TbPointFilled />
                                <TbPointFilled />
                                <TbPoint />
                            </div>
                        </div>
                    </div>
                    <h4 className={`${styles.partTitle} text-center`}>SPRACHE</h4>
                    <div>
                        <span>Persisch, Deutsch, Englisch</span>
                    </div>
                    <h4 className={`${styles.partTitle} text-center`}>INTERESSEN</h4>
                    <div>
                        <span>Fußball, Boxen, Programmieren, Trading</span>
                    </div>
                    <h4 className={`${styles.partTitle} text-center`}>STÄRKWN</h4>
                    <div>
                        <span>
                            ehegeizig, zuverlässig, flexibel, fleißig, pünktlich
                        </span>
                    </div>
                </div>
            </div>
            <button onClick={downloadPDF} className='btn btn-primary'>Herunterladen</button>
        </div>
    );
};

export default Paris;