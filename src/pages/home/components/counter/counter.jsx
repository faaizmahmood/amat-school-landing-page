import styles from './counter.module.scss'

const Counter = () => {
    return (
        <>

            <section className={`${styles.counter} mt-5`}>

                <div className='container'>

                    <div className='row'>

                        <div className='col-3'>
                            <div className={`${styles.counterItem} ${styles.item1}`}>
                                <h2>1200+</h2>
                                <h5>Reg. Schools</h5>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className={`${styles.counterItem} ${styles.item2}`}>
                                <h2>560+</h2>
                                <h5>International Users</h5>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className={`${styles.counterItem} ${styles.item3}`}>
                                <h2>12+</h2>
                                <h5>Nations</h5>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className={`${styles.counterItem} ${styles.item4}`}>
                                <h2>3+</h2>
                                <h5>Best Soft. Awards</h5>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Counter