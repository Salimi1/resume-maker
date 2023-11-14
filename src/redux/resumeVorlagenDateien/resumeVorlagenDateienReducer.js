const initialState = {
    lebensläufe: [
        {img: 'https://imagizer.imageshack.com/img922/7272/6Z873R.png', title: 'Berlin', text: 'Versatile modern CV template with a minimalist header.', type: 'CV'},
        {img: 'https://imagizer.imageshack.com/img923/5412/a7yNrQ.png', title: 'London', text: 'Classically structured resume template, for a robust career history.', type: 'CV'},
        {img: 'https://imagizer.imageshack.com/img922/2534/tX7zwp.jpg', title: 'Tehran', text: 'Sophisticated timeline structure with an elegant sidebar.', type: 'CV'},
        {img: 'https://imagizer.imageshack.com/img923/6452/9cP3JM.png', title: 'Kabul', text: 'A modern layout with a contrasting sidebar that catches the eye.', type: 'CV'},
        {img: 'https://imagizer.imageshack.com/img923/1057/VU7Q24.png', title: 'Paris', text: 'A great blend of personal charm, readability and elegance.', type: 'CV'},
        {img: 'https://imagizer.imageshack.com/img922/6517/8Y6ImQ.jpg', title: 'Santiago', text: 'Classic full-page resume template with sizable resume sections.', type: 'CV'}
    ],
    anschreiben: [
        {img: 'https://imagizer.imageshack.com/img923/8339/6Ob43c.png', title: 'Berlin', text: 'Versatile modern CV template with a minimalist header.', type: 'Anschr'},
        {img: 'https://imagizer.imageshack.com/img922/3769/bxi0i8.png', title: 'London', text: 'Classically structured resume template, for a robust career history.', type: 'Anschr'},
        {img: 'https://imagizer.imageshack.com/img924/5662/MrTXPi.png', title: 'Tehran', text: 'Sophisticated timeline structure with an elegant sidebar.', type: 'Anschr'},
        {img: 'https://imagizer.imageshack.com/img924/3764/uASKqx.png', title: 'Kabul', text: 'A modern layout with a contrasting sidebar that catches the eye.', type: 'Anschr'},
        {img: 'https://imagizer.imageshack.com/img924/7137/bE6GX6.png', title: 'Paris', text: 'A great blend of personal charm, readability and elegance..', type: 'Anschr'},
        {img: 'https://imagizer.imageshack.com/img924/2995/Z5ocZE.jpg', title: 'Santiago', text: 'Classic full-page resume template with sizable resume sections.', type: 'Anschr'}
    ]
}
const vorlagenDateienReducer = (state=initialState, action) => {
    switch(action.type){
        default: return state
    }
}
export default vorlagenDateienReducer