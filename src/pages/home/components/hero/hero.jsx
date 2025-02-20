import styles from './hero.module.scss'
import heroBG from '../../../../../public/images/loadingBG.png'
import heroImg from '../../../../../public/images/hero-img.png'
import { motion } from "framer-motion";

const Hero = () => {

    const heroStyle = {
        backgroundImage: `url(${heroBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <>
            <section className={`${styles.hero}`} style={heroStyle}>
                <div className="container">
                    <div className="row align-items-center">

                        {/* Left Column - Text */}
                        <div className="col-12 d-flex align-items-center">
                            <h1 className="text-white">
                                Ranked #1 for simplicity and completeness — your all-in-one school management solution.
                            </h1>
                        </div>

                        {/* Right Column - Image with Animation */}
                        <div className="col-12 mt-3">
                            <motion.img
                                src={heroImg}
                                alt="Hero Image"
                                className="img-fluid"
                                initial={{ y: 0 }}
                                animate={{ y: [0, -10, 0] }}  // Moves up and down
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero