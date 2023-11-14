import React, { useEffect, useState } from 'react';
//redux
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
//styles
import styles from './VorlagenInHome.module.css'
//shared
import LebenslaufAnschreibenVorlage from '../shared/LebenslaufAnschreibenVorlage';

const VorlagenInHome = () => {
    const lebensläufe = useSelector(state => state.vorlagenDateienState.lebensläufe)
    const anschreiben = useSelector(state => state.vorlagenDateienState.anschreiben)
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

export default VorlagenInHome;