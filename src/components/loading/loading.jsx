import { RiseLoader } from 'react-spinners'
import styles from './loading.module.scss'


const Loading = () => {
    return (
        <>

            <section className={`${styles.loading}`}>

                <RiseLoader
                    color="#fff"
                    size={10}
                />

                <h4 className='text-white'>Please Wait...</h4>

            </section>

        </>
    )
}

export default Loading