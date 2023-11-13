import React from 'react';

const MakeResumeInfoBox = () => {
    return (
        <div>
            <h4 className=''>Persönliche Daten</h4>
            <form>
                <div className='row mt-4'>
                    <div className='col-6'>
                        <label for='#name' className='form-label'>Name</label>
                        <input type='text' id='name' className='form-control' />
                    </div>
                    <div className='col-6'>
                        <label for='#nachName' className='form-label'>Nachname</label>
                        <input type='text' id='nachName' className='form-control' />
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-6'>
                        <label for='#telefonNummer' className='form-label'>Telefonnummer</label>
                        <input type='text' id='telefonNummer' className='form-control' />
                    </div>
                    <div className='col-6'>
                        <label for='#adresse' className='form-label'>Adresse</label>
                        <input type='text' id='adresse' className='form-control' />
                    </div>
                </div>
                <div className='mt-4'>
                    <label className='form-label' for='#fileInput'>Foto</label>
                    <input className='form-control' id='fileInput' type='file' />
                </div>
                <div className='mt-4'>
                    <label className='form-label' for='#eimailInput'>E-Mail-Adresse</label>
                    <input className='form-control' id='eimailInput' type='email' />
                </div>
                <div className='mt-4'>
                    <label className='form-label' for='#positionInput'>Position</label>
                    <input className='form-control' id='positionInput' type='text' />
                </div>
            </form>
        </div>
    );
};

export default MakeResumeInfoBox;