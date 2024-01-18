import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
//redux
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux";
//styles
import styles from './MakeResumeContentVorlagenManager.module.css'
//Icons
import { FaCheck } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";



const MakeResumeContentForm = ({ data }) => {
    const {vorlageType, vorlageName} = data

    const [accordionÜberschrift1State, setAccordionÜberschrift1State] = useState('')
    const [accordionÜberschrift2State, setAccordionüberschrift2State] = useState('')
    const [accordionÜberschrift3State, setAccordionüberschrift3State] = useState('')
    const [accordionÜberschrift4State, setAccordionüberschrift4State] = useState('')
    const [accordionÜberschrift5State, setAccordionüberschrift5State] = useState('')
    const [accordionÜberschrift6State, setAccordionüberschrift6State] = useState('')
    const [accordionÜberschrift7State, setAccordionüberschrift7State] = useState('')

    const dispatch = useDispatch();
    const state = useSelector(state => state.allVorlagenState);
    const {name, position, email, bild, übermich, nummer, cvadresse, anschradresse, unternehmensdaten, anschreibentext, anschreibenüberschrift, accordionüberschrift1, accordionüberschrift2, accordionüberschrift3, accordionüberschrift4, accordionüberschrift5, accordionüberschrift6, accordionüberschrift7,  berufserfahrungen, bildung, projekte, kompetenzen, sprachen, interessen, stärken } = state;

    const changeÜberschrift = (e, key) => {
        if(key === 'Berufserfahrungen'){
            setAccordionÜberschrift1State(e.target.value)
        }
        else if(key === 'Bildung'){
            setAccordionüberschrift2State(e.target.value)
        }
        else if(key === 'Projekte'){
            setAccordionüberschrift3State(e.target.value)
        }
        else if(key === 'Kompetenzen'){
            setAccordionüberschrift4State(e.target.value)
        }
        else if(key === 'Sprachen'){
            setAccordionüberschrift5State(e.target.value)
        }
        else if(key === 'Interessen'){
            setAccordionüberschrift6State(e.target.value)
        }
        else if(key === 'Stärken'){
            setAccordionüberschrift7State(e.target.value)
        }
    }

    const returnValueHandler = (key) => {
        if(key === 'Berufserfahrungen'){
            return accordionÜberschrift1State
        }
        else if(key === 'Bildung'){
            return accordionÜberschrift2State
        }
        else if(key === 'Projekte'){
            return accordionÜberschrift3State
        }
        else if(key === 'Kompetenzen'){
            return accordionÜberschrift4State
        }
        else if(key === 'Sprachen'){
            return accordionÜberschrift5State
        }
        else if(key === 'Interessen'){
            return accordionÜberschrift6State
        }
        else if(key === 'Stärken'){
            return accordionÜberschrift7State
        }
    }

    const changeBildHandler = (event) => {
        const selectedFile = event.target.files[0];
        dispatch({ type: 'CHANGE_BILD', payload: selectedFile, actionName: 'BILD' });
    };

    const onChangeHandler = (key, index, property, value) => {
        dispatch({ type: `EDIT_${key.toUpperCase()}`, payload: { index, property, newValue: value }, actionName: key.toUpperCase() });
    };

    const formLabelAndInputDivTagHandler = ({inputHeight, className, textareaClassName, inputType, labelValue, functionName, key, index, newItemFirstPropertyKey, inputValue}) => {
        const upperCasedAndReplacedSpacesLabelValue = labelValue.replace(/\s+/g, '').toUpperCase();
        const lowerCasedAndReplacedSpacesLabelValue = labelValue.replace(/\s+/g, '').toLowerCase();
        const newLabelValue = labelValue === 'CvAdresse' || labelValue === 'AnschrAdresse' ? 'Adresse' : labelValue
        const handleChange = (e) => {
            if (functionName === 'MakeResumeContentForm') {
                if (inputType === 'file') {
                    changeBildHandler(e);
                } else if (inputType === 'text' || inputType === 'email') {
                    const actionType = `CHANGE_${upperCasedAndReplacedSpacesLabelValue}`;
                    const payload = e.target.value;
                    const actionName = upperCasedAndReplacedSpacesLabelValue;
                    dispatch({ type: actionType, payload, actionName });
                }
            } else if (functionName === 'returnDataHandler') {
                onChangeHandler(key, index, newItemFirstPropertyKey, e.target.value);
            }
        };

        return (
            <div className={className} key={lowerCasedAndReplacedSpacesLabelValue}>
                <label htmlFor={`#${lowerCasedAndReplacedSpacesLabelValue}`} className='form-label'>{newLabelValue}</label>
                {labelValue === 'Name' || labelValue === 'Email' || labelValue === 'Foto' || labelValue === 'Position' || labelValue === 'Nummer' || labelValue === 'CvAdresse' || functionName === 'returnDataHandler' && vorlageType === 'cv' ?  (
                    <input
                        value={inputType !== 'file' ? inputValue : ''}
                        onChange={handleChange}
                        type={inputType}
                        className='form-control'style={{height: inputHeight}}
                        id={lowerCasedAndReplacedSpacesLabelValue}
                    />
                ) : (
                    <textarea style={{height: inputHeight}} className={`form-control ${textareaClassName}`} value={inputValue} onChange={handleChange}></textarea>
                )}
            </div>
        );
    };


    const returnAccordionHandler = (key, dispatchName, dataArray, newItemFirstPropertyKey, newItemSecondPropertyKey) => {
        const dispatchChangeÜberschrift = (newValue, dispatchName) => {
            dispatch({type: `CHANGE_${dispatchName}`, payload: newValue, actionName: dispatchName})
        }
        const actionName = key.toUpperCase();
        const payload = {
            [newItemFirstPropertyKey]: key + ` ${dataArray.length + 1}`,
            [newItemSecondPropertyKey]: '',
        };

        if (key === 'Berufserfahrungen') {
            payload.datum = '';
        }

        return (
            <div className="accordion mt-4" key={key}>
                <h4 className="pb-2 d-flex justify-content-between">
                    {key}
                    <FiEdit data-bs-toggle='modal' data-bs-target={`#${dispatchName}`} />
                </h4>
                <div id={dispatchName} className="modal fade">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <span>Gruppen Überschrift ändern</span>
                                <button type="button" data-bs-dismiss='modal' className="btn-close"></button>
                            </div>
                            <div className="modal-body">
                                <label className="form-label">Neuer Überschrift</label>
                                <input value={returnValueHandler(key)} onChange={(e) => changeÜberschrift(e, key)} type="text" className="form-control" />
                            </div>
                            <div className="modal-footer">
                                <button onClick={e => dispatchChangeÜberschrift(returnValueHandler(key), dispatchName)} data-bs-dismiss='modal' type="button" className="btn btn-primary">Ändern</button>
                                <button data-bs-dismiss='modal' type="button" className="btn btn-danger">Abbrechen</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {dataArray.map((item, index) => (
                        <div className="accordion-item" key={index}>
                            <div className="accordion-header d-flex align-items-center">
                                <button style={{ width: '92%' }} type="button" data-bs-toggle='collapse' data-bs-target={`#collapse${key}${index}`} className="accordion-button bg-transparent">
                                    {item[newItemFirstPropertyKey] || (key)}
                                </button>
                                <button onClick={() => dispatch({ type: `REMOVE_${actionName}`, payload: index, actionName })} type="button" className="btn-close fs-6 float-end"></button>
                            </div>
                            <div id={`collapse${key}${index}`} className="accordion-collapse collapse" key={`collapse${key}${index}`}>
                                <div className="accordion-body">
                                    {key === 'Berufserfahrungen' ? (
                                    <form key={index}>
                                        {formLabelAndInputDivTagHandler ({inputHeight: '' ,className: '', inputType: 'text', labelValue: newItemFirstPropertyKey, functionName: 'returnDataHandler', key, index, newItemFirstPropertyKey, inputValue: item.überschrift})}
                                        <div className="row mt-3">
                                            {formLabelAndInputDivTagHandler ({className: 'col-6', inputType: 'text', labelValue: newItemSecondPropertyKey, functionName: 'returnDataHandler', key, index, newItemFirstPropertyKey: newItemSecondPropertyKey, inputValue: item.arbeitgeber})}
                                            {formLabelAndInputDivTagHandler ({className: 'col-6', inputType: 'text', labelValue: 'datum', functionName: 'returnDataHandler', key, index, newItemFirstPropertyKey: 'datum', inputValue: item.datum})}
                                        </div>
                                    </form>
                                    ) : (
                                    <form key={index} className="row">
                                        {((key === 'Kompetenzen' && vorlageName === 'paris') || key === 'Bildung' || key === 'Projekte') ? (
                                            <div className="row" key={`form-inner-${key}-${index}`}>
                                                {formLabelAndInputDivTagHandler ({className: 'col-6', inputType: 'text', labelValue: newItemFirstPropertyKey, functionName: 'returnDataHandler', key, index, newItemFirstPropertyKey, inputValue: item[newItemFirstPropertyKey]})}
                                                {key === 'Kompetenzen' ? (
                                                    <div className="col-6" key={`col2-inner-${key}-${index}`}>
                                                        <label className="form-label">{newItemSecondPropertyKey}</label>
                                                        <select onChange={(e) => onChangeHandler(key, index, 'niveau', e.target.value)} className="form-select" key={`select-inner-${key}-${index}`}>
                                                            <option value='1'>Anfänger</option>
                                                            <option value='2'>Fortgeschritten</option>
                                                            <option value='3'>Erfahrend</option>
                                                            <option value='4'>Experte</option>
                                                        </select>
                                                    </div>
                                                ) : (
                                                    formLabelAndInputDivTagHandler ({className: 'col-6', inputType: 'text', labelValue: newItemSecondPropertyKey, functionName: 'returnDataHandler', key, index, newItemFirstPropertyKey: newItemSecondPropertyKey, inputValue: item[newItemSecondPropertyKey]})
                                                    )}
                                            </div>
                                        ) : (
                                            formLabelAndInputDivTagHandler ({className: '', inputType: 'text', labelValue: newItemFirstPropertyKey, functionName: 'returnDataHandler', key, index, newItemFirstPropertyKey, inputValue: item[newItemFirstPropertyKey]})
                                            )}
                                    </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div
                        onClick={() => dispatch({ type: `ADD_${key.toUpperCase()}`, payload, actionName })}
                        type="button"
                        className={`d-flex align-items-center fw-medium text-primary mt-3 ${key === 'Stärken' && 'pb-3'}`}
                        key={`add-button-${key}`}
                    >
                        <AiOutlinePlus />
                        <span className="ms-1">{key} hinzufügen</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="">
            <form style={{height: '100vh'}} className="d-flex flex-column fs-xl-5 justify-content-between p-3 my-2">
                <h4 className='mt-4 mt-sm-0'>Persönliche Daten</h4>
                <div className='row mt-3 mt-xl-2'>
                    {formLabelAndInputDivTagHandler ({inputHeight: '7vh', className: 'col-6', inputType: 'text', labelValue: 'Name', functionName: 'MakeResumeContentForm', inputValue: name})}
                    {formLabelAndInputDivTagHandler ({inputHeight: '7vh', className: 'col-6', inputType: 'text', labelValue: vorlageType === 'cv' ? 'Position' : 'Nummer', functionName: 'MakeResumeContentForm', inputValue: vorlageType === 'cv' ? position : nummer})}
                </div>
                {vorlageType === 'anschr' && (
                    <div className="row mt-3 mt-xl-2">
                        {formLabelAndInputDivTagHandler ({inputHeight: '7vh', className: 'col-12', inputType: 'email', labelValue: 'Email', functionName: 'MakeResumeContentForm', inputValue: email})}
                    </div>
                )}
                <div className='row mt-3 mt-xl-2'>
                    {formLabelAndInputDivTagHandler ({inputHeight: vorlageType === 'cv' ? '7vh' : '14vh' , className: vorlageType === 'anschr' && vorlageName === 'paris' ? 'col-12' : 'col-6', inputType: 'text', labelValue: vorlageType === 'cv' ? 'Nummer' : 'Unternehmens Daten' , functionName: 'MakeResumeContentForm', inputValue: vorlageType === 'cv' ? nummer : unternehmensdaten})}
                    {vorlageType === 'anschr' && vorlageName === 'paris' ? null : formLabelAndInputDivTagHandler ({inputHeight: vorlageType === 'cv' ? '7vh' : '14vh' , className: 'col-6', inputType: 'text', labelValue: vorlageType === 'cv' ? 'CvAdresse' : 'AnschrAdresse', functionName: 'MakeResumeContentForm', inputValue: vorlageType === 'cv' ? cvadresse : anschradresse})}
                </div>
                <div className="row mt-3 mt-xl-2">
                    {formLabelAndInputDivTagHandler ({inputHeight: vorlageType === 'cv' ? '7vh' : '11vh', className: '', inputType: 'email', labelValue: vorlageType === 'cv' ? 'Email' : 'Anschreiben Überschrift', functionName: 'MakeResumeContentForm', inputValue: vorlageType === 'cv' ? email : anschreibenüberschrift})}
                </div>
                {vorlageName === 'london' && vorlageType === 'cv' &&
                    <div className="row mt-3 mt-xl-2">
                        {formLabelAndInputDivTagHandler ({inputHeight: '20vh', className: 'col-12', inputType: 'text', labelValue: 'Über Mich', functionName: 'MakeResumeContentForm', inputValue: übermich})}
                    </div>
                }
                <div className="row mt-3 mt-xl-2">
                    {formLabelAndInputDivTagHandler ({inputHeight: vorlageType === 'cv' ? '5vh' : '20vh' ,className: '', inputType: vorlageType === 'cv' ? 'file' : 'text', labelValue: vorlageType === 'cv' ? 'Foto' : 'Anschreibentext ', functionName: 'MakeResumeContentForm', inputValue: vorlageType === 'cv' ? bild : anschreibentext})}
                </div>
                {
                    vorlageType === 'cv' && (
                        <div className="row mt-3 mt-xl-0">
                            {returnAccordionHandler(accordionüberschrift1, 'ACCORDIONÜBERSCHRIFT1', berufserfahrungen, 'überschrift', 'arbeitgeber')}
                            {returnAccordionHandler(accordionüberschrift2, 'ACCORDIONÜBERSCHRIFT2', bildung, 'schule', 'datum')}
                            {returnAccordionHandler(accordionüberschrift3, 'ACCORDIONÜBERSCHRIFT3', projekte, 'title', 'link')}
                            {returnAccordionHandler(accordionüberschrift4, 'ACCORDIONÜBERSCHRIFT4', kompetenzen, 'kompetenz', 'niveau')}
                            {returnAccordionHandler(accordionüberschrift5, 'ACCORDIONÜBERSCHRIFT5', sprachen, 'sprache')}
                            {returnAccordionHandler(accordionüberschrift6, 'ACCORDIONÜBERSCHRIFT6', interessen, 'interesse')}
                            {returnAccordionHandler(accordionüberschrift7, 'ACCORDIONÜBERSCHRIFT7', stärken, 'stärke')}
                        </div>
                    )
                }
            </form>
        </div>
    );
}




const MakeResumeContentSetting = ({ data }) => {
    const {vorlageType, vorlageName} = data
    const dispatch = useDispatch()
    const lebensläufe = useSelector(state => state.vorlagenDateienState.lebensläufe)
    const anschreiben = useSelector(state => state.vorlagenDateienState.anschreiben)
    const state = useSelector(state => state.allVorlagenState)
    const {activefarbecode} = state
    
    const MakeResumeContentSettingVorlage = ({data}) => {
        const {img, title, type} = data;
        return (
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-4">
                <div className={`card shadow text-center pt-2 pb-0 px-2 ${title === vorlageName && type === vorlageType ? styles.activeCard : styles.card}`}>
                    <Link to={`/${type}/${title}/edit/setting`}>
                        <img className={styles.cardImg} src={img} />
                    </Link>
                    <span className="text-center">{title} ({type})</span>
                </div>
            </div>
        )
    }
    const farbenVorlageHandler = (farbe, farbeCode) => {
        const onClickHandler = (e) => {
            dispatch({type: 'CHANGE_ACTIVEFARBECODE', payload: farbeCode, actionName: 'ACTIVEFARBECODE'})
        };
    
        return (
          <div onClick={onClickHandler} role="button" className={`${styles.farbeSpan} ${styles[farbe + "Span"]} me-2`}>
              <FaCheck className={`${activefarbecode !== farbeCode ? 'd-none' : null}`} />
          </div>
        );
      }
    
    
    return (
        <div style={{height: '100vh'}} className="p-3 d-flex flex-column justify-content-between">
            <h4>Dokumenteinstellungen</h4>
            <div className="">
                <span className="text-secondary">Lebenslauf Sprache</span>
                <div className="border rounded mt-2 py-2 px-3">
                    <img width='20px' className="me-3" src="https://imagizer.imageshack.com/img922/6030/LC85Rt.png" />
                    Deutschland
                </div>
            </div>
            <div className="mt-2">
                <span className="text-secondary">Vorlagen</span>
                <div className={`${styles.cardCon} row mt-2 flex-nowrap overflow-scroll`}>
                    {lebensläufe.map(lebenslauf => <MakeResumeContentSettingVorlage key={lebenslauf.index} data={lebenslauf} />)}
                    {anschreiben.map(anschreiben => <MakeResumeContentSettingVorlage key={anschreiben.index} data={anschreiben} />)}
                </div>
            </div>
            <div className=" text-secondary mt-2">
                <span>Farben</span>
                <div className="d-flex w-100 mt-2">
                    {farbenVorlageHandler('blue', '#334fdc')}
                    {farbenVorlageHandler('red', '#e60023')}
                    {farbenVorlageHandler('green', '#21af5a')}
                    {farbenVorlageHandler('orange', '#f2614c')}
                    {farbenVorlageHandler('pink', '#ea4c89')}
                    {farbenVorlageHandler('dark', '#233A5F')}
                </div>
            </div>
            <div className="text-secondary mt-3">
                <span>Schriftart</span>
                <div className="d-flex p-2 ailgn-items-center mt-2 rounded bg-body-secondary justify-content-between">
                    <select className="w-100 form-select bg-seondary border-0">
                        <option value='Arial'>Arial</option>
                        <option value='Sans'>Sans</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export {MakeResumeContentForm, MakeResumeContentSetting}

