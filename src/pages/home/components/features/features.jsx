import styles from './features.module.scss'
import card1 from '../../../../../public/images/featuresCardImages/card_1.png'
import card2 from '../../../../../public/images/featuresCardImages/card_2.png'
import card3 from '../../../../../public/images/featuresCardImages/card_3.svg'
import card4 from '../../../../../public/images/featuresCardImages/card_4.svg'
import card5 from '../../../../../public/images/featuresCardImages/card_5.svg'
import card6 from '../../../../../public/images/featuresCardImages/card_6.png'
import card7 from '../../../../../public/images/featuresCardImages/card_7.png'
import card8 from '../../../../../public/images/featuresCardImages/card_8.png'
import card9 from '../../../../../public/images/featuresCardImages/card_9.png'
import card10 from '../../../../../public/images/featuresCardImages/card_10.svg'
import card11 from '../../../../../public/images/featuresCardImages/card_11.png'
import card12 from '../../../../../public/images/featuresCardImages/card_12.svg'

const featuresData = [
    { id: 1, title: "Free Mobile App", description: "Stay connected with our 100% free mobile app, designed for Parents, Students, and School Staff.", image: card1 },
    { id: 2, title: "Cloud-Based Access", description: "Manage your school operations anytime, anywhere with secure cloud-based software.", image: card2 },
    { id: 3, title: "Multi-Campus Management", description: "Easily set up and manage multiple school campuses within a single platform.", image: card3 },
    { id: 4, title: "Multi-User Portals", description: "Provide dedicated portals for Administrators, Teachers, Parents, and Students with role-based access.", image: card4 },
    { id: 5, title: "WhatsApp Integration", description: "Send important updates, reports, and notifications directly via WhatsApp.", image: card5 },
    { id: 6, title: "Digital Payments", description: "Accept fee payments securely through esewa, khalti , Bank Transfer , Master card , Paypal", image: card6 },
    { id: 7, title: "High-Performance Servers", description: "Experience unmatched speed and reliability with our optimized server infrastructure.", image: card7 },
    { id: 8, title: "Comprehensive Accounting", description: "Simplify financial management with built-in accounting tools for budgeting, expenses, and reports.", image: card8 },
    { id: 9, title: "Biometric Attendance", description: "Ensure accurate attendance tracking for students and staff using biometric verification.", image: card9 },
    { id: 10, title: "Detailed Reports", description: "Generate insightful financial, academic, and attendance reports with ease.", image: card10 },
    { id: 11, title: "Instant SMS Alerts", description: "Keep Parents, Teachers, and Admins informed with real-time SMS notifications.", image: card11 },
    { id: 12, title: "Customizable System", description: "Tailor the platform to meet your institution’s specific needs with flexible customization options.", image: card12 }
];


const Features = () => {
    return (
        <section className={`${styles.features} mt-lg-5 mt-0 py-5`} id='features'>
            <div className='container mt-5'>
                <h2 className='text-center'>We Providing You Best <span className='color-change'>Features</span></h2>
                <p className='text-center'>Our free school management system / school management software manages everything starting from admission to attendance and exams to result cards & certification.</p>

                <div className={`${styles.featuresCards}`}>
                    {featuresData.map((feature) => (
                        <div className={`${styles.cardItem}`} key={feature.id}>
                            <img src={feature.image} alt={feature.title} />
                            <h3 className='mt-3'>{feature.title}</h3>
                            <p className='mt-3'>{feature.description}</p>
                            {/* <img src={cardHoverimg} className={`${styles.cardBottomSlideImg}`} alt="Hover Effect" /> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;
