/* eslint-disable react/no-unescaped-entities */
import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs'
import CallToAction from '../home/components/callToAction/callToAction'
import styles from './refund-policy.module.scss'

const RefundPolicy = () => {
    return (
        <>
            <BreadCrumbs pageTitle={"Refund Policy"} />

            <section className={`${styles.RefundPolicy}`}>
                <div className='container my-5'>
                    <p>At Amat School, accessible from <a href='http://amatschool.com'>http://amatschool.com</a>, we are committed to providing our customers with the best possible school management software experience. Our aim is to help schools efficiently manage their day-to-day operations and provide students with the best possible education. We understand that purchasing a software is a big decision and we want to make sure that our customers are fully satisfied with their purchase.</p>
                    <p>If you have additional questions or require more information about our Refund Policy, do not hesitate to contact us.</p>

                    <h3>No Refund After 3 Days of Purchase</h3>
                    <p>Once a customer has made a purchase of Amat School management software, no refund will be given after 3 days from the date of purchase. This is because our software is designed to be user-friendly and we provide extensive training and support to ensure that our customers can make the most of their investment.</p>
                    <p>In the event that you have any concerns about the software, we encourage you to reach out to our support team for assistance. Our support team is available 24/7 to assist you with any issues you may encounter. If the issue cannot be resolved, we may offer a refund at our discretion, within the first 3 days of purchase.</p>

                    <h3>What If I Change My Mind?</h3>
                    <p>In the event that you change your mind about the software after making a purchase, we are unable to provide a refund. This is because once the software has been purchased and delivered, it is considered a final sale.</p>

                    <h3>What If I Encounter Technical Issues?</h3>
                    <p>In the event that you encounter any technical issues with the software, our support team is available 24/7 to assist you. If the issue cannot be resolved, we may offer a refund at our discretion, within the first 3 days of purchase.</p>

                    <h3>What If I Am Not Satisfied with the Software?</h3>
                    <p>We strive to provide the best possible school management software experience to our customers. However, if for any reason, you are not satisfied with the software, we encourage you to reach out to our support team for assistance. Our support team will do their best to resolve any issues you may encounter. If the issue cannot be resolved, we may offer a refund at our discretion, within the first 3 days of purchase.</p>

                    <h3>Contact Us</h3>
                    <p>If you have any questions or concerns about our refund policy, please don't hesitate to reach out to our support team for assistance.</p>
                </div>
            </section>

            <CallToAction/>
        </>
    )
}

export default RefundPolicy
