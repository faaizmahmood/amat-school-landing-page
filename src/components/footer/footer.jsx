import styles from './footer.module.scss'
import logo from '../../../public/images/logo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={`${styles.footer} py-5`} id='footer'>

            <div className='container'>

                <div className='row mt-4'>
                    <div className='col-lg-4'>
                        <div className={`${styles.logoDiv}`}>
                            <NavLink to='/'><img src={logo} className={`${styles.logo}`} /></NavLink>

                            <p className='mt-3'>EasySchoolin EdTech helps businesses seamlessly engage with their clientele by providing efficient tools for updates, information sharing, and targeted campaigns—making the entire process simple and hassle-free.</p>
                        </div>
                    </div>
                    <div className='col-lg-2'>
                        <h3>Quick Links</h3>

                        <div className='mt-4 mt-lg-0 mt-4'>
                            <NavLink to='/terms-conditions'><p>Terms & conditions</p></NavLink>
                            <NavLink to='/privacy-policy'><p>Privacy policy</p></NavLink>
                            <NavLink to='/refund-policy'><p>Refund policy</p></NavLink>
                            <NavLink to='/'><p>School ERP</p></NavLink>
                        </div>
                    </div>
                    <div className='col-lg-2 mt-lg-0 mt-4'>
                        <h3>Contact</h3>

                        <div className='mt-4'>
                            <a href='tel:+923482258263'><p>+9779812033996
                                (Whatsapp)</p></a>
                            <a href='mailto:hello@ourschoolsoftware.com'><p>lalitcse09020@gmail.com</p></a>
                            <p>Kathamandu Nepal</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-8 mt-lg-0 mt-4'>
                        <h3>Subscribe For Upcoming Offers</h3>

                        <form className={`${styles.footerForm}`} >
                            <input type='text' placeholder='Enter Name' />
                            <input type='mail' placeholder='Email Address' />
                            <button>Submit</button>
                        </form>
                    </div>


                </div>


                <hr className='mt-5' />

                <p className='text-center'>© Copyright 2023 by EasySchoolin EdTech</p>

            </div>

        </footer>
    )
}

export default Footer