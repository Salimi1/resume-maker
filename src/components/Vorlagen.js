import React from 'react';
//shared
import Vorlage from '../shared/Vorlage';
const lebensläufe = [
    {img: 'https://imagizer.imageshack.com/img922/7272/6Z873R.png', title: 'Berlin', text: 'Versatile modern CV template with a minimalist header.'},
    {img: 'https://imagizer.imageshack.com/img923/5412/a7yNrQ.png', title: 'London', text: 'Classically structured resume template, for a robust career history.'},
    {img: 'https://imagizer.imageshack.com/img922/2534/tX7zwp.jpg', title: 'Tehran', text: 'Sophisticated timeline structure with an elegant sidebar.'},
    {img: 'https://imagizer.imageshack.com/img923/6452/9cP3JM.png', title: 'Kabul', text: 'A modern layout with a contrasting sidebar that catches the eye.'},
    {img: 'https://imagizer.imageshack.com/img923/1057/VU7Q24.png', title: 'Paris', text: 'A great blend of personal charm, readability and elegance.'},
    {img: 'https://imagizer.imageshack.com/img922/1755/LepQ6B.jpg', title: 'Santiago', text: 'Classic full-page resume template with sizable resume sections.'}
]
const anschreiben = [
    {img: 'https://imagizer.imageshack.com/img923/8339/6Ob43c.png', title: 'Berlin', text: 'Versatile modern CV template with a minimalist header.'},
    {img: 'https://imagizer.imageshack.com/img922/3769/bxi0i8.png', title: 'London', text: 'Classically structured resume template, for a robust career history.'},
    {img: 'https://imagizer.imageshack.com/img924/5662/MrTXPi.png', title: 'Tehran', text: 'Sophisticated timeline structure with an elegant sidebar.'},
    {img: 'https://imagizer.imageshack.com/img924/3764/uASKqx.png', title: 'Kabul', text: 'A modern layout with a contrasting sidebar that catches the eye.'}
]
const Vorlagen = () => {
    return (
        <div className='container-fluid justify-content-center justify-content-md-start px-4 my-5'>
            <h2 style={{color: '#14279B'}} className='text-center mt-5 pt-5'>Lebenslauf
                <span style={{color: '#002265', fontWeight: 'bold'}}> Vorlagen</span>
            </h2>            
            <div className='row'>
                {lebensläufe.map(item => <Vorlage data={item} />)}
            </div>
            <h2 style={{color: '#14279B'}} className='text-center mt-5 pt-5'>Anschreiben
                <span style={{color: '#002265', fontWeight: 'bold'}}> Vorlagen</span>
            </h2> 
            <div className='row'>
                {anschreiben.map(item => <Vorlage data={item} />)}
            </div>

        </div>
    );
};

export default Vorlagen;