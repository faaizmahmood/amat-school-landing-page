import styles from './education.module.scss'
import educationImg from '../../../../../public/images/educationImg.webp'
import { motion } from "framer-motion";


const Education = () => {


    return (
        <section className={`${styles.education}`}>
            <div className='container'>
                <div className='row align-items-center my-5 py-5'>
                    {/* Ensures row takes full height for vertical centering */}

                    {/* Left Column - Text */}
                    <div className='col-lg-6 d-flex align-items-center flex-column '>
                        <h2>
                            How We Built a Better <span className='color-change'> Educational </span> Culture
                        </h2>

                        <p className='mt-3'>Our comprehensive, free school management system enhances the quality of academic institutions by enabling efficient monitoring of daily progress and performance. What sets us apart are our features that keep parents informed about their child&apos;s academic progress.</p>
                    </div>

                    {/* Right Column - Image */}
                    <div className='col-lg-6'>
                        <div className={`${styles.aboutImg} mt-5 text-center`}>
                            <motion.img
                                src={educationImg}
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
    )
}

export default Education