import React from 'react';
import { Link } from 'react-router-dom';
//Icons
import { AiFillInstagram, AiOutlineInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
//styles
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className=''>
            <div className='container-fluid px-4 px-md-5'>
                <h2 className={styles.kontaktH4}>Mich
                    <span className={styles.kontaktSpan}> Kontaktieren</span>
                </h2>
                <div className='row px-lg-4 justify-content-center'>
                    <Link to='https://github.com/Salimi1' className='col-6 col-md-2 my-2 my-sm-4 my-sm-0 text-center list-group-item'>
                        <AiFillGithub className={styles.kontaktLogo} />
                        <h5 className='mt-2'>Github</h5>
                    </Link>
                    <Link to='https://www.instagram.com/?next=%2F&hl=de' className='col-6 col-md-2 my-2 my-sm-4 text-center list-group-item'>
                        <AiFillInstagram className={styles.kontaktLogo} />
                        <h5 className='mt-2'>Instagram</h5>
                    </Link>
                    <Link className='col-6 col-md-2 my-2 my-sm-4 text-center list-group-item'>
                        <AiOutlineMail className={styles.kontaktLogo} />
                        <h5 className='mt-2'>Email</h5>
                    </Link>
                    <Link className='col-6 col-md-2 my-2 my-sm-4 text-center list-group-item'>
                        <BsTelephone className={styles.kontaktLogo} />
                        <h5 className='mt-2'>Handynummer</h5>
                    </Link>
                </div>
            </div>
            <img className='w-100' src='https://imagizer.imageshack.com/img924/5392/vSkTFv.png' />
        </div>
    );
};

export default Footer;