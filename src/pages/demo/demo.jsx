import { useEffect } from 'react'
import CallToAction from '../home/components/callToAction/callToAction'
import styles from './demo.module.scss'

const Demo = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component is mounted
    }, []);


    return (
        <>
            <section className={`${styles.demo}`}>
                <div className='container my-5 text-center'>
                    <h2>Checkout Video Presentations/Demo</h2>
                    <p>Select one of the options below to explore our features in detail.</p>

                    <div className='row mt-5'>

                        <div className='col-lg-4 mt-sm-0 mt-3'>
                            <div className={`${styles.presetTationItem}`}>
                                <h3>View Software Demo</h3>
                                <p>Explore the core features of our school management system and how it simplifies daily operations.</p>
                                <a href='#'><button className='button'>Watch Now</button></a>
                            </div>
                        </div>

                        <div className='col-lg-4 mt-sm-0 mt-3'>
                            <div className={`${styles.presetTationItem}`}>
                                <h3>View Mobile App Demo</h3>
                                <p>See how teachers, parents, and students can stay connected with real-time updates on the go.</p>
                                <a href='#'><button className='button'>Watch Now</button></a>
                            </div>
                        </div>

                        <div className='col-lg-4 mt-sm-0 mt-3'>
                            <div className={`${styles.presetTationItem}`}>
                                <h3>View Our WhatsApp</h3>
                                <p>Discover how WhatsApp integration streamlines communication between schools and parents effortlessly.</p>
                                <a href='#'><button className='button'>Watch Now</button></a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <CallToAction />
        </>
    )
}

export default Demo
