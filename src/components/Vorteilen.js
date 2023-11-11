import React from 'react';
import VorteilKarte from '../shared/VorteilKarte';
//styles
import styles from './Vorteilen.module.css'

const voteileCards = [
    {img: 'https://imagizer.imageshack.com/img924/7936/OVInHK.png', vorteil: 'Professionell'},
    {img: 'https://imagizer.imageshack.com/img922/6563/av3TmQ.png', vorteil: 'Einfach'},
    {img: 'https://imagizer.imageshack.com/img924/5703/mCKcuR.png', vorteil: 'Schnell'}
]
const Vorteilen = () => {
    return (
        <div className='container-fluid'>
            <h2 className={styles.vorteilenH2}>Unsere
                <span className={styles.vorteilenSpan}> Vorteile</span>
            </h2>
            <div className='row px-4 px-md-5 justify-content-center my-4'>
                {voteileCards.map(card => <VorteilKarte data={card} key={card.index} />)}
            </div>
        </div>
    );
};

export default Vorteilen;