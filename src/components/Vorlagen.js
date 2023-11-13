import React from 'react';
//styles
import styles from './Vorlagen.module.css'
//shared
import LebenslaufAnschreibenVorlage from '../shared/LebenslaufAnschreibenVorlage';
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
    {img: 'https://imagizer.imageshack.com/img924/3764/uASKqx.png', title: 'Kabul', text: 'A modern layout with a contrasting sidebar that catches the eye.'},
    {img: 'https://imagizer.imageshack.com/img924/7137/bE6GX6.png', title: 'Paris', text: 'A great blend of personal charm, readability and elegance..'},
    {img: 'https://imagizer.imageshack.com/img924/2995/Z5ocZE.jpg', title: 'Santiago', text: 'Classic full-page resume template with sizable resume sections.'}
]
const Vorlagen = () => {
    return (
        <div className='container-fluid justify-content-center justify-content-md-start px-4 px-md-5 my-5'>
            <h2 className={`text-center pt-5 ${styles.vorlagenH2}`}>Lebenslauf
                <span className={styles.vorlagenSpan}> Vorlagen</span>
            </h2>            
            <div className='row'>
                {lebensläufe.map(item => <LebenslaufAnschreibenVorlage data={item} key={item.index} />)}
            </div>
            <h2 className={`text-center pt-5 ${styles.vorlagenH2}`}>Anschreiben
                <span className={styles.vorlagenSpan}> Vorlagen</span>
            </h2> 
            <div className='row'>
                {anschreiben.map(item => <LebenslaufAnschreibenVorlage data={item} key={item.index} />)}
            </div>

        </div>
    );
};

export default Vorlagen;