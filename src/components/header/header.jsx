import styles from './header.module.scss'
import logo from '../../../public/images/logo.png'

const Header = () => {
    return (
        <>
            <header className={`${styles.header}`}>

                <div className='container py-2'>
                    <img src={logo} className={`${styles.logo}`} />
                </div>

            </header>
        </>
    )
}

export default Header