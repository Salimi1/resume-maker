import React from 'react';
//shared
import Vorlage from '../shared/Vorlage';
const vorlagen = [
    {img: 'https://imagizer.imageshack.com/img922/7272/6Z873R.png', title: 'Berlin', text: 'Versatile modern CV template with a minimalist header.'},
    {img: 'https://imagizer.imageshack.com/img923/5412/a7yNrQ.png', title: 'London', text: 'Classically structured resume template, for a robust career history.'},
    {img: 'https://imagizer.imageshack.com/img922/2534/tX7zwp.jpg', title: 'Tehran', text: 'Sophisticated timeline structure with an elegant sidebar.'},
    {img: 'https://imagizer.imageshack.com/img923/6452/9cP3JM.png', title: 'Kabul', text: 'A modern layout with a contrasting sidebar that catches the eye.'}
]
const Vorlagen = () => {
    return (
        <div className='container-fluid justify-content-center justify-content-md-start px-4 row my-5'>
            {vorlagen.map(item => <Vorlage data={item} />)}
        </div>
    );
};

export default Vorlagen;