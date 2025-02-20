import styles from "./pricing.module.scss";

const Pricing = () => {
    return (
        <section className={`${styles.pricing} py-5 `} id="pricing">
            <div className="container text-center my-5">

                <h2>Choose the Pricing <span className="color-change">Plan</span> That Fits Your Needs</h2>
                <p className="mt-3">We offer flexible and competitive pricing plans, ensuring you find the perfect fit for your school&apos;s needs and budget with our free school management system.</p>

                <div className={`${styles.pricingGrid} mt-5 pt-5`}>
                    <div className={styles.pricingCard}>
                        <h5>300 Students</h5>
                        <h1>Rs. 3000</h1>
                        <h5>Monthly</h5>

                        <hr className="my-4" />

                        <ul>
                            <li>Setup Fee: Rs. 7,000</li>
                            <li>Single Campus</li>
                            <li>Up to 300 students</li>
                            <li>Android & iOS App</li>
                            <li>Biometric Attendance</li>
                            <li>Online Fee Payment</li>
                            <li>Free School Website</li>
                            <li>Support: Call / WhatsApp</li>
                            <li>Free future updates</li>
                            <li>All features</li>
                        </ul>
                        <button className="button">TRY DEMO</button>
                    </div>
                    <div className={`${styles.pricingCard} ${styles.featured}`}>

                        <h5>800 Students</h5>
                        <h1>Rs. 5000</h1>
                        <h5>Monthly</h5>


                        <hr className="my-4" />


                        <ul>
                            <li>Setup Fee : Rs. 5,000</li>
                            <li>Multi Campus (MAX 2)</li>
                            <li>Up to 800 students</li>
                            <li>Android & iOS App</li>
                            <li>Biometric Attendance</li>
                            <li>Online Fee Payment</li>
                            <li>Free School Website</li>
                            <li>Support: Call / WhatsApp</li>
                            <li>Free future updates</li>
                            <li>All features</li>
                        </ul>
                        <button className="button">TRY DEMO</button>
                    </div>
                    <div className={styles.pricingCard}>

                        <h5>Unlimited Students</h5>
                        <h1>Rs. 10,000</h1>
                        <h5>Monthly</h5>

                        <hr className="my-4" />

                        <ul>
                            <li>Setup Fee : Rs. 0 (FREE)</li>
                            <li>Multi Campus (MAX 5)</li>
                            <li>Unlimited Students</li>
                            <li>Android & iOS App</li>
                            <li>Biometric Attendance</li>
                            <li>Online Fee Payment</li>
                            <li>Free School Website</li>
                            <li>Support: Call / WhatsApp</li>
                            <li>Free future updates</li>
                            <li>All features</li>
                        </ul>
                        <button className="button">TRY DEMO</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;