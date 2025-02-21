import { useState } from "react";
import styles from "./pricing.module.scss";

const Pricing = () => {

    const [planType, setPlanType] = useState("monthly");

    const pricingData = {
        monthly: [
            {
                students: "300 Students",
                price: "Rs. 3000",
                setupFee: "Rs. 7,000",
                campus: "Single Campus",
                limit: "Up to 300 students",
            },
            {
                students: "800 Students",
                price: "Rs. 5000",
                setupFee: "Rs. 5,000",
                campus: "Multi Campus (MAX 2)",
                limit: "Up to 800 students",
                featured: true
            },
            {
                students: "Unlimited Students",
                price: "Rs. 10,000",
                setupFee: "Rs. 0 (FREE)",
                campus: "Multi Campus (MAX 5)",
                limit: "Unlimited Students",
            }
        ],
        yearly: [
            {
                students: "300 Students",
                price: "Rs. 30,000",
                setupFee: "Rs. 5,000",
                campus: "Single Campus",
                limit: "Up to 300 students",
            },
            {
                students: "800 Students",
                price: "Rs. 50,000",
                setupFee: "Rs. 3,000",
                campus: "Multi Campus (MAX 2)",
                limit: "Up to 800 students",
                featured: true
            },
            {
                students: "Unlimited Students",
                price: "Rs. 100,000",
                setupFee: "Rs. 0 (FREE)",
                campus: "Multi Campus (MAX 5)",
                limit: "Unlimited Students",
            }
        ]
    };

    return (
        <section className={`${styles.pricing} py-5`} id="pricing">
            <div className="container text-center my-5">
                <h2>Choose the Pricing <span className="color-change">Plan</span> That Fits Your Needs</h2>
                <p className="mt-3">We offer flexible and competitive pricing plans, ensuring you find the perfect fit for your school&apos;s needs and budget with our free school management system.</p>

                <div className={`${styles.planToggle} mb-4 mt-5`}>
                    <button
                        className={planType === "monthly" ? styles.activeTab : ""}
                        onClick={() => setPlanType("monthly")}
                    >
                        Monthly
                    </button>
                    <button
                        className={planType === "yearly" ? styles.activeTab : ""}
                        onClick={() => setPlanType("yearly")}
                    >
                        Yearly
                    </button>
                </div>

                <div className={`${styles.pricingGrid} mt-3 pt-5`}>
                    {pricingData[planType].map((plan, index) => (
                        <div
                            key={index}
                            className={`${styles.pricingCard} ${plan.featured ? styles.featured : ""}`}
                        >
                            <h5>{plan.students}</h5>
                            <h1>{plan.price}</h1>
                            <h5>{planType === "monthly" ? "Monthly" : "Yearly"}</h5>

                            <hr className="my-4" />

                            <ul>
                                <li>Setup Fee: {plan.setupFee}</li>
                                <li>{plan.campus}</li>
                                <li>{plan.limit}</li>
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
