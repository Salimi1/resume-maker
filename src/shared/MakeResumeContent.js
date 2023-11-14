import React from 'react';
//services
import { MakeResumeContentForm, MakeResumeContentSetting } from '../services/MakeResumeContentVorlagenManager';

const MakeResumeContent = ({data}) => {
    const {activeNavItem, vorlageName} = data;
    return (
        <div>
            {activeNavItem === 'inhalt' && <MakeResumeContentForm />}
            {activeNavItem === 'setting' && <MakeResumeContentSetting />}
        </div>
    );
};

export default MakeResumeContent;