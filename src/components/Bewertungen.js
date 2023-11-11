import React from 'react';
//styles
import styles from './Bewertungen.module.css'
//icons
import { BsFillStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
//components
import Bewertungskarte from '../shared/Bewertungskarte';

const bewertungen = [
    {name: 'Hamed', beruf: 'KFZ-Mechatroniker', img: 'https://www.jobseeker.com/api/media/images/af0bf1c1-8d07-4091-a57c-1ef5c77e6f10/128-0-52.27,10.27,32.45,21.47/Marcel.jpg', kommentar: 'Nie wieder Stress beim Bewerben! Große Auswahl an Lebenslauf-Designs. Im Nu war auch mein Anschreiben fertig. Danke Jobseeker!'},
    {name: 'Farzad', beruf: 'Software Developer', img: 'https://www.jobseeker.com/api/media/images/c44e8947-44fa-456d-9345-18659132c67a/128-0-23.16,30.64,53.08,35.54/Benjamin.jpg', kommentar: 'Unverzichtbares Tool, um professionelle Anschreiben und Lebensläufe zu verfassen. Habe es meinen Freunden schon weiterempfohlen'},
    {name: 'Carl', beruf: 'Altenpfleger', img: 'https://www.jobseeker.com/api/media/images/85d6ae56-97ba-480d-a924-7adfdfb152ba/128-0-12.85,2.34,67.70,45.19/Jens.jpg', kommentar: 'Nie wieder Stress beim Bewerben! Große Auswahl an Lebenslauf-Designs. Im Nu war auch mein Anschreiben fertig. Danke Jobseeker!'}
]

const Bewertungen = () => {
    return (
        <div className='container-fluid mt-5 pt-5'>
            <h1 className={styles.bewertungH1}>Bewertungen</h1>
            <div className='d-flex py-4 mb-4 align-items-center justify-content-center'>
                <h3>4,5 / 5</h3>
                <div className='d-flex ms-3'>
                    <BsFillStarFill className={styles.starIcon} />
                    <BsFillStarFill className={styles.starIcon} />
                    <BsFillStarFill className={styles.starIcon} />
                    <BsFillStarFill className={styles.starIcon} />
                    <BsStarHalf className={styles.starIcon} />
                </div>
            </div>
            <div className='row justify-content-center px-4'>
                {bewertungen.map(item => <Bewertungskarte data={item} key={item.index} />)}
            </div>
        </div>
    );
};

export default Bewertungen;