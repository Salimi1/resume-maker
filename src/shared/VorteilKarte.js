import React from 'react';
const VorteilKarte = ({data}) => {
    const {img, vorteil} = data;
    return (
        <div className='card col-md-3 mx-2 shadow border-0 col-10 mt-3 mt-md-0'>
            <div className='card-header border-0 bg-transparent'>
                <img src={img} className='card-img-top' />
            </div>
            <div className='card-body'>
                <h5 style={{color: '#002265', fontWeight: 'bold'}} className='card-title'>{vorteil}
                    <span style={{color: '#14279B'}}> Erstellen</span>
                </h5>
            </div>
        </div>
    );
};

export default VorteilKarte;