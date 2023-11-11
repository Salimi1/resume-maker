import React from 'react';


const Bewertungskarte = ({data}) => {
    const {name, beruf, img, kommentar} = data;
    return (
        <div className='card text-center col-md-3 mx-2 shadow border-0 col-10 mt-3 mt-md-0'>
            <div className='card-header border-0 bg-transparent'>
                <img className='w-25 rounded-pill' src={img} />
                <h4>{name}</h4>
                <h5 className='text-secondary'>{beruf}</h5>
            </div>
            <div className='card-body'>
                <p>{kommentar}</p>
            </div>
        </div>
    );
};

export default Bewertungskarte;