import styles from './aboutSoftware.module.scss'
import aboutBGImg from '../../../../../public/images/aboutBg-img.png'
import aboutImg from '../../../../../public/images/aboutImg.png'
import appDownloadIcon from '../../../../../public/images/app-download-icon.png'
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

const AboutSoftware = () => {
    const aboutBGStyle = {
        backgroundImage: `url(${aboutBGImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <section className={`${styles.aboutSoftware} pt-5`} style={aboutBGStyle}>
            <div className='container pt-5'>
                <div className='row align-items-center' style={{ minHeight: '100vh' }}>
                    {/* Ensures row takes full height for vertical centering */}

                    {/* Left Column - Text */}
                    <div className='col-6 d-flex align-items-center flex-column '>
                        <h2>
                        Free <span className='color-change'> Mobile App </span> for Parents, Students, and School Staff.
                        </h2>

                        <p className='mt-3'>Download our free mobile app to stay updated. One app for all—Admins, Teachers, Accountants, Management Staff, Parents, and Students.</p>

                        <div>
                           <NavLink to='/demo'> <img src={appDownloadIcon} className={`${styles.appDownloadIcon}`} /></NavLink>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className='col-6'>
                        <div className={`${styles.aboutImg}`}>
                            <motion.img
                                src={aboutImg}
                                alt="About Image"
                                className="img-fluid"
                                initial={{ y: 0 }}
                                animate={{ y: [0, -10, 0] }} // Moves up and down
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSoftware;
