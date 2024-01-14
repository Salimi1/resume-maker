import { useRef } from 'react';
//Components
import London from '../../vorlagenComponents/london/London';
import Paris from '../../vorlagenComponents/paris/Paris';
import Berlin from '../../vorlagenComponents/berlin/Berlin';
import LondonAnschreiben from '../../vorlagenComponents/london/LondonAnschreiben';
import ParisAnschreiben from '../../vorlagenComponents/paris/ParisAnschreiben';
import BerlinAnschreiben from '../../vorlagenComponents/berlin/BerlinAnschreiben';

const initialState = {
    lebensläufe: [
        {img: 'https://i.ibb.co/rtBN5nq/Screenshot-2024-01-13-132953.png', title: 'berlin', text: 'Versatile modern cv template with a minimalist header.', type: 'cv', vorlage: <Berlin />},
        {img: 'https://i.ibb.co/W0wsBvv/Screenshot-2024-01-13-133325.png', title: 'london', text: 'Classically structured resume template, for a robust career history.', type: 'cv', vorlage: <London />},
        {img: 'https://i.ibb.co/x665yqV/Screenshot-2024-01-13-132929.png', title: 'paris', text: 'A great blend of personal charm, readability and elegance.', type: 'cv', vorlage: <Paris />}
    ],
    anschreiben: [
        {img: 'https://i.ibb.co/XCy3txv/Screenshot-2024-01-13-133405.png', title: 'berlin', text: 'Versatile modern Anschr template with a minimalist header.', type: 'anschr', vorlage: <BerlinAnschreiben />},
        {img: 'https://i.ibb.co/RpykVkq/Screenshot-2024-01-13-133436.png', title: 'london', text: 'Classically structured resume template, for a robust career history.', type: 'anschr', vorlage: <LondonAnschreiben />},
        {img: 'https://i.ibb.co/BZsqn6f/Screenshot-2024-01-13-133457.png', title: 'paris', text: 'Classic full-page resume template with sizable resume sections.', type: 'anschr', vorlage: <ParisAnschreiben />}
    ]
}
const vorlagenDateienReducer = (state=initialState, action) => {
    switch(action.type){
        default: return state
    }
}
export default vorlagenDateienReducer