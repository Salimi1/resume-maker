//JSPDF
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const initialState = {
    name: `Farzad Salimi`,
    nummer: `015289122721`,
    cvadresse: `Obere Mühlstraße 56, 61271`,
    anschradresse: `Obere Mühlstraße 56b
64291 Darmstadt 
Deutschland`,
    unternehmensdaten: `Commerzbank GmbH
Obere Mühlstraße 56b
Frankfurt am Main`,
    email: `salimiFarzad21@gmail.com`,
    anschreibentext: `Sehr geehrte Frau Hauck
mit großem Interesse habe ich Ihre Anzeige für die Ausbildung als Fachinformatiker in Anwendungsentwicklung gelesen. Ich interessiere mich sehr für das Programmieren und möchte mich auch beruflich in diesem Bereich ausbilden. Momentan besuche ich die 10. Klasse der Mornewegschule in Darmstadt, um meinen Realschulabschluss zu erlangen. Ich bin seit 2020 in Deutschland. Die deutsche Sprache beherrsche ich mittlerweile gut, sodass ich vor einem Jahr das B1 Zertifikat erhalten habe. Zurzeit verbessere ich auch meine Englischkenntnisse (Note: 2). Ich beschäftige mich seit zwei Jahren mit dem Programmieren und beherrsche nun HTML, CSS, Bootstrap, Javascript, React, Rejex, Git, Redux und GraphQL. In den letzten Monaten habe ich bereits zwei Webseiten progarmmiert, die Links hierzu finden Sie im meinem Lebenslauf. Momentan bin ich in der Planung ein Lebenslaufersteller zu programmieren.  Ich freue mich darauf meine Kenntnisse  bei Ihnen einzusetzen und noch weiter auszubauen. Ich habe viel Freude beim Programmieren und bin daher auch mit großer Motivation bei der Arbeit. Deswegen werde ich in den Weihnachtsferien ein freiwilliges Praktikum an der HDA im Bereich IT machen. Mit mir gewinnen Sie einen zuverlässigen, freundlichen und lernbereiten Kollegen. Sehr gerne würde ich die Ausbildung zum Fachinformatiker bei Ihnen absolvieren. Ich freue mich daher auf eine Einladung zum Vorstellungsgespräch, um Sie und die Arbeit näher kennenzulernen.

Mit freundlichen Grüßen
Farzad Salimi`,
    anschreibenüberschrift: `Bewerbung um die Ausbildung als Fachinformatiker für Anwendungsentwicklung`,
    activefarbecode: '#233A5F',
    accordionüberschrift1: 'Berufserfahrungen',
    accordionüberschrift2: 'Bildung',
    accordionüberschrift3: 'Projekte',
    accordionüberschrift4: 'Kompetenzen',
    accordionüberschrift5: 'Sprachen',
    accordionüberschrift6: 'Interessen',
    accordionüberschrift7: 'Stärken',
    accordionüberschrift8: 'Über Mich',
    sprachen: [
        {sprache: 'Persisch'},
        {sprache: 'Paschtu'},
        {sprache: 'Deutsch'},
        {sprache: 'Englisch'}
    ],
    interessen: [
        {interesse: 'Fußbal'},
        {interesse: 'Boxen'},
        {interesse: 'Programmiere'},
        {interesse: 'Trading'}
    ],
    stärken: [
        {stärke: 'ehegeizig'},
        {stärke: 'flexibel'},
        {stärke: 'zuverlässig'},
        {stärke: 'pünktlich'}
    ],
    bild: '',
    position: `Frontend Developer`,
    übermich: `Ich bin erst seit dem Jahr 2021 in Deutschland und davor war ich einem Jahr auf dem Weg nach Deutschland. Ich habe sechs Monaten die Intensivklasse besucht und dann wurde ich endlich in der 8 Klasse geschickt. Ich habe letzes Jahr mein Hauptschulabschluss bekommen und mache dises Jahr den Realschulabschluss.`,
    berufserfahrungen: [
        {überschrift: 'Praktikant', arbeitgeber: 'Autowerkstatt', datum: '08.2018 - 12.2018'},
        {überschrift: 'Praktikant', arbeitgeber: 'tegut', datum: '05.2021 - 05.2021'},
        {überschrift: 'Praktikant', arbeitgeber: 'Kani Friseure', datum: '05.2023 - 05.2023'},
        {überschrift: 'Ausbildung', arbeitgeber: 'Merck', datum: '09.2022 - 12.2023'},
    ],
    bildung: [
        {schule: 'Shahidrezayan', datum: '2013 - 2015'},
        {schule: 'Lashtaghan-bala', datum: '2015 - 2018'},
        {schule: 'Moghahmad', datum: '2018 - 2019'},
        {schule: 'Mornewegschule', datum: '2021 - laufend'},
    ],
    projekte: [
        {title: 'Meine erste Webseite', link: 'https://salimi-shop.netlify.app/f&c'},
        {title: 'Meine zweite Webseite', link: 'https://salimi-movieshow-app.netlify.app/home'}
    ],
    kompetenzen: [
        {kompetenz: 'HTML & CSS', niveau: 1},
        {kompetenz: 'Js & React', niveau: 1},
        {kompetenz: 'Bootstrap & Rejex', niveau: 1},
        {kompetenz: 'Git & Redux', niveau: 1},
    ],
    monaten: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'Novermber', 'Dezember']
}


const allVorlagenReducer = (state = initialState, action) => {
    const { payload } = action;
    const propertyToChange = action.actionName?.toLowerCase();
    switch (action.type) {
        case 'DOWNLOAD':
            const { cvCon } = action;
            if (cvCon) {
                html2canvas(cvCon.current, { scale: 3, useCORS: true }).then((canvas) => {
                    const pdf = new jsPDF('p', 'mm', 'a4', true);
                    const imgData = canvas.toDataURL('image/png', 0.8);
                    const pdfWidth = pdf.internal.pageSize.getWidth();
                    const pdfHeight = pdf.internal.pageSize.getHeight();
                    const imgWidth = canvas.width;
                    const imgHeight = canvas.height;
                    const ratio = pdfWidth / imgWidth;
                    const imgX = 0;
                    const imgY = (pdfHeight - imgHeight * ratio) / 100;
                    pdf.addImage(imgData, 'PNG', imgX, imgY, pdfWidth, imgHeight * ratio);
                    const fileName = `${state.name}_cv.pdf`;
                    pdf.save(fileName);
                });
            }
            return { ...state };

        case `CHANGE_${action?.actionName}`:
            return { ...state, [propertyToChange]: payload };

        case `EDIT_${action?.actionName}`:
            return {
                ...state,
                [propertyToChange]: state[propertyToChange].map((item, index) => {
                    if (index === payload.index) {
                        return { ...item, [payload.property]: payload.newValue };
                    }
                    return item;
                }),
            };

        case `ADD_${action?.actionName}`:
            return { ...state, [propertyToChange]: [...state[propertyToChange], payload] }

        case `REMOVE_${action?.actionName}`:
            if (payload >= 0 && payload < state[propertyToChange]?.length) {
                const newArray = [
                    ...state[propertyToChange].slice(0, payload),
                    ...state[propertyToChange].slice(payload + 1),
                ];
                return { ...state, [propertyToChange]: newArray };
            }
            return { ...state };

        default:
            return state;
    }
};

export default allVorlagenReducer;