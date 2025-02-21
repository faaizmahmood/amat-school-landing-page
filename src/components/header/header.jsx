import styles from './header.module.scss';
import logo from '../../../public/images/logo.png';
import headerBG from '../../../public/images/loadingBG.png';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {

    const headerStyle = {
        backgroundImage: `url(${headerBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const navigate = useNavigate();
    const location = useLocation();

    const handleIdNavigation = (id) => {
        if (location.pathname !== "/") {
            // If user is NOT on home, go to home first
            navigate("/", { replace: true });
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }, 100); // Delay to ensure page loads first
        } else {
            // If already on home, just scroll
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
    };



    return (
        <>
            <header className={`${styles.header}`} style={headerStyle}>
                <div className='container py-2'>

                    <div className='row align-items-center'>

                        <div className='col-3'>
                            <img src={logo} className={`${styles.logo}`} alt="Logo" />
                        </div>
                        <div className='col-5'>

                            <nav className={`${styles.navbar} mt-3`}>
                                <ul>
                                    <NavLink to="/"><li>Home</li></NavLink>
                                    <li onClick={() => handleIdNavigation('features')}>Features</li>
                                    <NavLink to="/demo"><li>Demo</li></NavLink>
                                    <li onClick={() => handleIdNavigation('pricing')}>Pricing</li>
                                    <li onClick={() => handleIdNavigation('footer')}>Contact</li>
                                </ul>
                            </nav>

                        </div>
                        <div className='col-4 d-flex justify-content-end align-items-center'>

                            {/* <div className={`${styles.chatIcon} mt-2`}>
                                <img src={messageIcon} />
                                <div>
                                    <h4>WhatsApp Us</h4>
                                    <h3>+92 3482258263</h3>
                                </div>
                            </div> */}

                            <div className={`${styles.demoBtn}`}>

                                <NavLink to='/demo'><button className='button'>Demo</button></NavLink>

                            </div>

                        </div>

                    </div>

                </div>
            </header>
        </>
    );
};

export default Header;
