/* eslint-disable react/prop-types */
import styles from './breadCrumbs.module.scss'
import heroBG from '../../../public/images/loadingBG.png'

const BreadCrumbs = ({ pageTitle }) => {

    const breadCrumbsStyle = {
        backgroundImage: `url(${heroBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <>

            <section className={`${styles.breadCrumbs}`} style={breadCrumbsStyle}>

                <div className='container'>
                    <h1 className='text-white'>{pageTitle}</h1>
                </div>

            </section>

        </>
    )
}

export default BreadCrumbs