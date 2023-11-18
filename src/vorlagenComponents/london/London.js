import React, {useRef} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
//Icons
import { TbSchool } from 'react-icons/tb';
import img from '../../assets/logos/header.png.png'
//styles
import styles from './London.module.css'

const London = () => {
    const cvCon = useRef()
    const downloadPDF = () => {
        const cv = cvCon.current;
        html2canvas(cv, { scale: 2, useCORS: true }).then((canvas) => {
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const imgData = canvas.toDataURL('image/png', 1.0);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
    
            // Berechne das Verhältnis basierend auf der Breite
            const ratio = pdfWidth / imgWidth;
            const imgX = 0; // Kein horizontaler Versatz
            const imgY = (pdfHeight - imgHeight * ratio) / 1; // Zentriere das Bild vertikal
    
            pdf.addImage(imgData, 'PNG', imgX, imgY, pdfWidth, imgHeight * ratio);
            pdf.save('cv.pdf');
        });
    };
    return (
        <div>
            <div ref={cvCon} className={`card mx-5 mx-md-0 w-100 h-100 shadow ${styles.card}`}>
                <div className='row h-100'>
                    <div className='col-4 pt-5 ps-3 bg-dark text-light'>
                        <img className='w-50 bg-secondary rounded-pill' src={img} />
                        <div className='mt-4'>
                            <h6 className=''>Farzad Salimi
                                <div className={styles.jobDivElm}>Software Developer</div>
                            </h6>
                        </div>
                        <div className='w-100 text-dark'>
                            <div className={`${styles.contactDiv} bg-light mt-2`}>Surakarta, December 2, 1994</div>
                            <div className={`${styles.contactDiv} bg-light mt-2`}>+62 822 2045 4652</div>
                            <div className={`${styles.contactDiv} bg-light mt-2`}>hani.husam@gmail.com</div>
                            <div className={`${styles.contactDiv} bg-light mt-2`}>Yogyakarta, Indonesia</div>
                        </div>
                        <ul className='p-0'>
                            <span className={styles.spanElm}>Kompetenzen</span>
                            <li className={styles.kompetenzenLi}>HTML and CSS</li>
                            <li className={styles.kompetenzenLi}>Scripting language: Javascript, Typescript, Paython, Java</li>
                            <li className={styles.kompetenzenLi}>Frameworks/Library: Django, React, Next, Bootstrap, TailwindCSS, etc</li>
                            <li className={styles.kompetenzenLi}>Underestanding UI Design, Visual Hierarchy, Design System, etc</li>
                        </ul>
                        <ul className='p-0'>
                            <span className={styles.spanElm}>Sprache</span>
                            <li className={styles.spracheLi}>Deutsch</li>
                            <li className={styles.spracheLi}>Englisch</li>
                            <li className={styles.spracheLi}>Persisch</li>
                        </ul>
                        <ul className='p-0'>
                            <span className={styles.spanElm}>Interessen</span>
                            <li className={styles.interessenLi}>Fußball</li>
                            <li className={styles.interessenLi}>Trading</li>
                            <li className={styles.interessenLi}>Boxen</li>
                        </ul>
                        <ul className='p-0'>
                            <span className={styles.spanElm}>Stärken</span>
                            <li className={styles.stärkenLi}>pünktlich</li>
                            <li className={styles.stärkenLi}>ehrgeizig</li>
                            <li className={styles.stärkenLi}>flexibel</li>
                        </ul>
                    </div>
                    <div className='col-8 py-5 px-3'>
                        <div className='mt-3'>
                            <div>
                                <span className={styles.überMichSpan}>Über mi</span>
                                <span className={styles.überMichSpan2}>ch</span>
                            </div>
                            <p className={styles.pElm}>Ich beschäftige mich seit zweit Jahren mit drm Programmieren. In diese Zwei Jahren habe ich vieles gelernt und habe schon Erfahrungen in diesem Bereich</p>
                        </div>
                        <div className='mt-3'>
                            <div>
                                <span className={styles.berufsErfahrungSpan}>Bild</span>
                                <span className={styles.berufsErfahrungSpan2}>ung</span>
                            </div>
                            <div className='row mt-2'>
                                <div className={`${styles.bildungsDatum} col-4`}>
                                    2022 - 2023
                                </div>
                                <div className={`col-8`}>
                                    <div className={`${styles.bildungsOrt}`}>Mornewegscule, Darmstadt</div>
                                    <span className={styles.bildungsAbschluss}>Realschulabschluss</span>
                                    <p className={styles.pElm}>Mornewegschule ist eine Gesamteschule in Darmstadt und bietet unterschiedliche Kurse an. von Deutschkurs für neukömmendige in Deutschland bis zu Sschulabschlüsse.</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div>
                                <span className={styles.berufsErfahrungSpan}>Berufserfahr</span>
                                <span className={styles.berufsErfahrungSpan2}>ung</span>
                            </div>
                            <div className='row align-items-center mt-2'>
                                <div className='col-3'>
                                    <TbSchool className='fs-3' />
                                </div>
                                <div className='col-9'>
                                    <div className={`${styles.erfahrungsOrt}`}>Commerzbank</div>
                                    <div className={styles.erfahrungsJob}>Frontend Developer | Nov 2023 - laufend</div>
                                    <p className={styles.pElm}>Commerzbank is ein großer Bank in Deutschland und überall in Deutschland hat er Filiale.</p>
                                </div>
                            </div>
                            <div className='row align-items-center'>
                                <div className='col-3'>
                                    <TbSchool className='fs-3' />
                                </div>
                                <div className='col-9'>
                                    <div className={`${styles.erfahrungsOrt}`}>Merck</div>
                                    <div className={styles.erfahrungsJob}>Backend Developer | Sep 2020 - Sep 2023</div>
                                    <p className={styles.pElm}>Merck ist ein Unternehmen, das weltweit Filialen hat und für seine gute Qualität bekannt ist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={downloadPDF} className='btn btn-primary'>Download</button>
        </div>
    );
};

export default London;