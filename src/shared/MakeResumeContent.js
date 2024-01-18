import React, {useEffect, useState} from 'react';
//services
import { MakeResumeContentForm, MakeResumeContentSetting } from '../services/MakeResumeContentVorlagenManager';

const MakeResumeContent = ({data}) => {
    const {activeNavItem, vorlageType, vorlageName, activeVorlage} = data;
    return (
        <div className={`${activeNavItem !== 'preview' && 'w-100'}`}>
            <div className='w-100'>
                {activeNavItem === 'inhalt' && <MakeResumeContentForm data={{vorlageName, vorlageType}} />}
                {activeNavItem === 'setting' && <MakeResumeContentSetting data={{vorlageName, vorlageType}} />}
            </div>
            {activeNavItem == 'preview' &&(
                // activeVorlage['vorlage']
                <div className='d-xl-none'>
                    {activeVorlage.vorlage}
                </div>
            )}
        </div>
    );
};

export default MakeResumeContent;