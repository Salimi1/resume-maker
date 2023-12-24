import { Link } from "react-router-dom";
//redux
import { useSelector } from "react-redux/es/hooks/useSelector"
//styles
import styles from './MakeResumeContentVorlagenManager.module.css'
//Icons
import { FaCheck } from "react-icons/fa6";
import { BsArrowDown } from "react-icons/bs";



const MakeResumeContentForm = () => {
    return (
        <div className="">
            <h4 className='mt-4 mt-sm-0'>Persönliche Daten</h4>
            <form>
                <div className='row mt-4'>
                    <div className='col-12 col-md-6'>
                        <label for='#name' className='form-label'>Name</label>
                        <input type='text' id='name' className='form-control' />
                    </div>
                    <div className='col-12 col-md-6'>
                        <label for='#nachName' className='form-label'>Nachname</label>
                        <input type='text' id='nachName' className='form-control' />
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12 col-md-6'>
                        <label for='#telefonNummer' className='form-label'>Telefonnummer</label>
                        <input type='text' id='telefonNummer' className='form-control' />
                    </div>
                    <div className='col-12 col-md-6'>
                        <label for='#adresse' className='form-label'>Adresse</label>
                        <input type='text' id='adresse' className='form-control' />
                    </div>
                </div>
                <div className='mt-4'>
                    <label className='form-label' for='#fileInput'>Foto</label>
                    <input className='form-control' id='fileInput' type='file' />
                </div>
                <div className='mt-4'>
                    <label className='form-label' for='#eimailInput'>E-Mail-Adresse</label>
                    <input className='form-control' id='eimailInput' type='email' />
                </div>
                <div className='mt-4'>
                    <label className='form-label' for='#positionInput'>Position</label>
                    <input className='form-control' id='positionInput' type='text' />
                </div>
            </form>
        </div>
    )
}


const MakeResumeContentSettingVorlage = ({data}) => {
    const {img, title, type} = data;
    return (
        <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-4">
            <div className={`card shadow text-center pt-2 pb-0 px-2 ${styles.card}`}>
                <Link to={`/${type}/${data.title}/edit/setting`}>
                    <img className={styles.cardImg} src={img} />
                </Link>
                <span className="mt-2 text-center text-dark">{title} ({type})</span>
            </div>
        </div>
    )
}


const MakeResumeContentSetting = () => {
    const lebensläufe = useSelector(state => state.vorlagenDateienState.lebensläufe)
    const anschreiben = useSelector(state => state.vorlagenDateienState.anschreiben)
    return (
        <div className="pt-1">
            <h4>Dokumenteinstellungen</h4>
            <span className="text-secondary">Lebenslauf Sprache</span>
            <div className="border rounded py-2 px-3 mt-2">
                <img width='20px' className="me-3" src="https://imagizer.imageshack.com/img922/6030/LC85Rt.png" />
                Deutschland
            </div>
            <div className="pt-2">
                <span className="text-secondary">Vorlagen</span>
                <div className={`${styles.cardsCon} row mt-2 flex-nowrap overflow-scroll`}>
                    {lebensläufe.map(lebenslauf => <MakeResumeContentSettingVorlage key={lebenslauf.index} data={lebenslauf} />)}
                    {anschreiben.map(anschreiben => <MakeResumeContentSettingVorlage key={anschreiben.index} data={anschreiben} />)}
                </div>
            </div>
            <div className="mt-3 text-secondary">
                <span>Farben</span>
                <div className="d-flex w-100 mt-2">
                    <span role="button" className={`${styles.farbenSpan} ${styles.blueSpan} me-2`}>
                        <FaCheck className="d-none" />
                    </span>
                    <span role="button" className={`${styles.farbenSpan} ${styles.redSpan} me-2`}>
                        <FaCheck className="d-none" />
                    </span>
                    <span role="button" className={`${styles.farbenSpan} ${styles.greenSpan} me-2`}>
                        <FaCheck className="d-none" />
                    </span>
                    <span role="button" className={`${styles.farbenSpan} ${styles.orangekSpan} me-2`}>
                        <FaCheck className="d-none" />
                    </span>
                    <span role="button" className={`${styles.farbenSpan} ${styles.pinkSpan} me-2`}>
                        <FaCheck className="d-none" />
                    </span>
                    <span role="button" className={`${styles.farbenSpan} ${styles.blackSpan} me-2`}>
                        <FaCheck className="d-none" />
                    </span>
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