import styles from './callToAction.module.scss'
import callToActionImg from '../../../../../public/images/callToActionBG.jpg'


const CallToAction = () => {

    const callToActionStyle = {
        backgroundImage: `url(${callToActionImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'fixed',
        backgroundRepeat: 'no-repeat',
    };


    return (
        <>

            <section className={`${styles.callToAction} mt-5`} style={callToActionStyle}>

                <div className='container'>

                    <div className='row'>
                        <div className='col-8'>
                            <h2>Try Our School Management System for free today &
                                Experience Endless Possibilities</h2>

                            <button className='button'>Register With Us</button>
                        </div>


                    </div>

                </div>

            </section>

        </>
    )
}

export default CallToAction