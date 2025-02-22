import styles from './aboutSoftware.module.scss'
import aboutImg from '../../../../../public/images/mobilr-app-mockup.png'
import { motion } from "framer-motion";

const AboutSoftware = () => {

    return (
        <section className={`${styles.aboutSoftware} pt-5`} >
            <div className='container pt-5'>

                <h2 className='text-center'>We Choose <span className='color-change'>Us</span></h2>
                <p className='text-center'>Amat School simplifies school management by offering powerful, user-friendly solutions tailored to the unique needs of educational institutions.</p>

                <div className='row align-items-center my-5' >
                    {/* Ensures row takes full height for vertical centering */}

                    {/* Left Column - Text */}
                    <div className='col-lg-4 d-flex align-items-center flex-column'>

                        <div>

                            <div className={`${styles.featureItem} d-flex gap-3`}>

                                <div>
                                    <i className="fa-solid fa-layer-group"></i>
                                </div>

                                <div>
                                    <h3>All-in-One Platform</h3>
                                    <p>Manage academics, administration, and communication effortlessly from a single integrated system.</p>
                                </div>

                            </div>
                            <div className={`${styles.featureItem} d-flex gap-3`}>

                                <div>
                                <i className="fa-solid fa-hand-pointer"></i>
                                </div>

                                <div>
                                    <h3>User-Friendly Interface</h3>
                                    <p>Designed for ease of use, ensuring a smooth experience for staff, students, and parents.</p>

                                </div>
                            </div>
                            <div className={`${styles.featureItem} d-flex gap-3`}>

                                <div>
                                <i className="fa-solid fa-shield-halved"></i>
                                </div>

                                <div>
                                    <h3>Secure & Reliable</h3>
                                    <p>Advanced security measures safeguard your data, ensuring privacy and reliability at all times.</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Center Column - Image */}
                    <div className='col-lg-4 my-lg-0 my-5'>
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


                    {/* Right Column - Text */}
                    <div className='col-lg-4 d-flex align-items-center flex-column '>

                        <div>

                            <div className={`${styles.featureItem} d-flex gap-3`}>

                                <div>
                                <i className="fa-solid fa-sliders"></i>
                                </div>

                                <div>
                                    <h3>Customizable Solutions</h3>
                                    <p>Tailor features and modules to fit your school’s specific needs and requirements.</p>
                                </div>

                            </div>
                            <div className={`${styles.featureItem} d-flex gap-3`}>

                                <div>
                                <i className="fa-solid fa-comments"></i>
                                </div>

                                <div>
                                    <h3>Real-Time Communication</h3>
                                    <p>Keep everyone connected with instant notifications, updates, and progress tracking.</p>

                                </div>
                            </div>
                            <div className={`${styles.featureItem} d-flex gap-3`}>

                                <div>
                                <i className="fa-solid fa-chart-line-up"></i>
                                </div>

                                <div>
                                    <h3>Cost-Effective & Scalable</h3>
                                    <p>Affordable plans that grow with your institution, from small schools to multi-campus setups.</p>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </section>
    );
};

export default AboutSoftware;
