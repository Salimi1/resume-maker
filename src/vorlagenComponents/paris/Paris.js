import React, { useEffect, useRef } from 'react';
//Pictures
import defaultBild from '../../assets/pictures/Group 42.png'
//Icons
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { TbPointFilled } from "react-icons/tb";
import { TbPoint } from "react-icons/tb";
//Redux
import { useDispatch, useSelector } from 'react-redux';
//Styles
import styles from './Paris.module.css'
import { BiRightArrow } from 'react-icons/bi';


const Paris = () => {

    const cvCon = useRef()
    const imgTagRef = useRef()
    const dispatch = useDispatch()
    const state = useSelector(state => state.allVorlagenState)
    const {name, nummer, cvadresse, email, position, activefarbecode, bild, accordionüberschrift1, accordionüberschrift2, accordionüberschrift3, accordionüberschrift4, accordionüberschrift5, accordionüberschrift6, accordionüberschrift7, berufserfahrungen, bildung, projekte,
    kompetenzen, sprachen, interessen, stärken} = state;

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
    },[bild])

    const kontaktRowsMapHandler = (data, icon) => {
        return (
            <div className={`${styles.partTitlesRows}`}>
                {icon}
                <span className='ms-1'>{data}</span>
            </div>
        )
    }

    const sprachenInteressenStärkenHandler = (key, dataArray, spanContent) => {
        return (
            <div className='my-3'>
                <h4 className={`${styles.rechteSeitePartTitle} text-center`}>{key.toUpperCase() + 'N'}</h4>
                <div>
                    <span>{dataArray.map((item, index) => (item[spanContent] + ', '))}</span>
                </div>
            </div>
        )
    }

    const erfahrungBildungProjektKompetenzMapHandler = (key, dataArray, name) => {
        const renderHeader = (customStyles = {}) => (
            <h4 style={{ ...customStyles, backgroundColor: !dataArray[0].kompetenz && activefarbecode }} className={`${styles[name]} ps-2`}>
            {key.toUpperCase()}
            </h4>
        );
        const renderErfahrungOderKompetenz = () => (
          <div>
            {renderHeader()}
            <div>
              {dataArray.map((item, index) => (
                <div key={index} className={styles.partTitlesRows}>
                  <span className={item.überschrift && 'fw-bolder'}>{item.überschrift || item.kompetenz}</span>
                  {item.überschrift ? (
                    <div className={item.überschrift && 'd-flex justify-content-between'}>
                      <span>{item.arbeitgeber}</span>
                      <span>{item.datum}</span>
                    </div>
                  ) : (
                    <div>
                      {Array(item.niveau).fill(<TbPointFilled />)}
                      {Array(5 - item.niveau).fill(<TbPoint />)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      
        const renderBildungOderProjekt = () => (
          <div>
            {renderHeader()}
            {dataArray.map((item, index) => (
              <div key={index} className={`${styles.partTitlesRows}`}>
                {item.link ? (
                  <div className='d-flex flex-column mt-2'>
                    <span className='fw-medium'>{item.title}</span>
                    <span>{item.link}</span>
                  </div>
                ) : (
                  <div className='d-flex justify-content-between'>
                    <span className='fw-medium'>{item.schule}</span>
                    <span>{item.datum}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      
        if (dataArray[0].überschrift || dataArray[0].kompetenz) {
          return renderErfahrungOderKompetenz();
        } else {
          return renderBildungOderProjekt();
        }
      };

      return (
          <div className='container-fluid'>
              <div className={`text-xl-end text-center mt-2 ${styles.downloadBtnCon}`}>
                  <button style={{backgroundColor: activefarbecode}} onClick={() => dispatch({type: 'DOWNLOAD', cvCon})} className='btn text-light'>Herunterladen</button>
              </div>
              <div ref={cvCon} className={`row ${styles.rowDivTag}`}>
                  <div className={`col-8 ${styles.leftSide}`}>
                      <div>
                          <h5 className={`${styles.name}`}>{name}</h5>
                          <span className=''>{position}</span>
                      </div>
                      <br/>
                      <br/>
                      {erfahrungBildungProjektKompetenzMapHandler(accordionüberschrift1, berufserfahrungen, 'partTitle')}
                      {erfahrungBildungProjektKompetenzMapHandler(accordionüberschrift2, bildung, 'partTitle')}
                      {erfahrungBildungProjektKompetenzMapHandler(accordionüberschrift3, projekte, 'partTitle')}
                  </div>
                  <div  style={{backgroundColor: activefarbecode, color: '#ffff'}} className={`col-4`}>
                      <div className='text-center mt-4'>
                          <img className={`rounded-pill p-1 ${styles.bild}`} ref={imgTagRef} />
                      </div>
                      <h4 className={`${styles.rechteSeitePartTitle} text-center`}>KONTAKT</h4>
                      <div>
                          {kontaktRowsMapHandler(cvadresse, <MdOutlineLocationOn />)}
                          {kontaktRowsMapHandler(nummer, <MdOutlinePhone />)}
                          {kontaktRowsMapHandler(email, <CgMail />)}
                      </div>
                      {erfahrungBildungProjektKompetenzMapHandler(accordionüberschrift4, kompetenzen, 'rechteSeitePartTitle')}
                      {sprachenInteressenStärkenHandler(accordionüberschrift5, sprachen, 'sprache')}
                      {sprachenInteressenStärkenHandler(accordionüberschrift6, interessen, 'interesse')}
                      {sprachenInteressenStärkenHandler(accordionüberschrift7, stärken, 'stärke')}
                  </div>
              </div>
              <div style={{transform: 'translateY(-185px)'}}>
                  <span style={{backgroundColor: activefarbecode}} className='rounded-2 p-2 text-light d-none d-xl-inline'>Paris-Vorlage</span>
              </div>
          </div>
      );

};

export default Paris;