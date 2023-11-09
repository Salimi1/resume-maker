import React from 'react';
import VorteilKarte from '../shared/VorteilKarte';

const voteileCards = [
    {img: 'https://imagizer.imageshack.com/img924/7936/OVInHK.png', vorteil: 'Professionell'},
    {img: 'https://imagizer.imageshack.com/img922/6563/av3TmQ.png', vorteil: 'Einfach'},
    {img: 'https://imagizer.imageshack.com/img924/5703/mCKcuR.png', vorteil: 'Schnell'}
]
const Vorteilen = () => {
    return (
        <div className='container-fluid'>
            <h2 style={{color: '#002265', fontWeight: 'bold', textAlign: 'center'}}>Unsere
                <span style={{color: '#14279B'}}> Vorteile</span>
            </h2>
            <div className='row px-4 justify-content-center my-4'>
                {voteileCards.map(card => <VorteilKarte data={card} />)}
            </div>
        </div>
    );
};

export default Vorteilen;