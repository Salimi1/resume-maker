//Components
import Tehran from '../../vorlagenComponents/tehran/Tehran';
import London from '../../vorlagenComponents/london/London';
import Paris from '../../vorlagenComponents/paris/Paris';
import Berlin from '../../vorlagenComponents/berlin/Berlin';
import Kabul from '../../vorlagenComponents/kabul/Kabul';
import Santiago from '../../vorlagenComponents/santiago/Sanitiago';

const initialState = {
    lebensläufe: [
        {img: 'https://imagizer.imageshack.com/img922/7272/6Z873R.png', title: 'berlin', text: 'Versatile modern cv template with a minimalist header.', type: 'cv', vorlage: <Berlin />},
        {img: 'https://imagizer.imageshack.com/img923/5412/a7yNrQ.png', title: 'london', text: 'Classically structured resume template, for a robust career history.', type: 'cv', vorlage: <London />},
        {img: 'https://imagizer.imageshack.com/img922/7098/fTzWrB.png', title: 'tehran', text: 'Sophisticated timeline structure with an elegant sidebar.', type: 'cv', vorlage: <Tehran />},
        {img: 'https://imagizer.imageshack.com/img923/6452/9cP3JM.png', title: 'kabul', text: 'A modern layout with a contrasting sidebar that catches the eye.', type: 'cv', vorlage: <Kabul />},
        {img: 'https://imagizer.imageshack.com/img923/1057/VU7Q24.png', title: 'paris', text: 'A great blend of personal charm, readability and elegance.', type: 'cv', vorlage: <Paris />},
        {img: 'https://imagizer.imageshack.com/img922/6517/8Y6ImQ.jpg', title: 'santiago', text: 'Classic full-page resume template with sizable resume sections.', type: 'cv', vorlage: <Santiago />}
    ],
    anschreiben: [
        {img: 'https://imagizer.imageshack.com/img923/8339/6Ob43c.png', title: 'berlin', text: 'Versatile modern Anschr template with a minimalist header.', type: 'anschr'},
        {img: 'https://imagizer.imageshack.com/img922/3769/bxi0i8.png', title: 'london', text: 'Classically structured resume template, for a robust career history.', type: 'anschr'},
        {img: 'https://imagizer.imageshack.com/img924/5662/MrTXPi.png', title: 'tehran', text: 'Sophisticated timeline structure with an elegant sidebar.', type: 'anschr'},
        {img: 'https://imagizer.imageshack.com/img924/3764/uASKqx.png', title: 'kabul', text: 'A modern layout with a contrasting sidebar that catches the eye.', type: 'anschr'},
        {img: 'https://imagizer.imageshack.com/img924/7137/bE6GX6.png', title: 'paris', text: 'A great blend of personal charm, readability and elegance..', type: 'anschr'},
        {img: 'https://imagizer.imageshack.com/img924/2995/Z5ocZE.jpg', title: 'santiago', text: 'Classic full-page resume template with sizable resume sections.', type: 'anschr'}
    ]
}
const vorlagenDateienReducer = (state=initialState, action) => {
    switch(action.type){
        default: return state
    }
}
export default vorlagenDateienReducer