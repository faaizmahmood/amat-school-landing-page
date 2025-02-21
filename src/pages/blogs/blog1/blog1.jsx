import BreadCrumbs from '../../../components/breadCrumbs/breadCrumbs'
import CallToAction from '../../home/components/callToAction/callToAction'
import styles from '../blogs.module.scss'

const Blog1 = () => {
    return (
        <>
            <BreadCrumbs pageTitle={"Blog Details"} />

            <section className={`${styles.blog} my-5`}>
                <div className='container'>
                    <h2>What is School Management Software & How it Works</h2>
                    <p>The school management system is a software to manage school administration tasks through computer or mobile applications. It streamlines tasks, reduces complexities, and improves overall efficiency. With various modules, it simplifies processes like enrollment, fee collection, attendance tracking, and more.</p>

                    <h2>Basic Modules Required in School Management Software:</h2>

                    <h3 className='mt-4'>Admission Management:</h3>
                    <p>Manages the entire admission process, from inquiries and tests to issuing certificates. Allows data collection, filtering, and fee management.</p>

                    <h3>Fee Management:</h3>
                    <p>Automates fee collection, calculates pending fees, and allows online payments. Tracks previous payments, deductions, and concessions.</p>

                    <h3>Attendance Management:</h3>
                    <p>Tracks attendance with charts and reports. Covers daily, weekly, monthly, and yearly records, including staff attendance.</p>

                    <h3>Student Details Management:</h3>
                    <p>Stores and updates personal, academic, and family data. Generates student ID cards and maintains comprehensive records.</p>

                    <h3>Timetable Management:</h3>
                    <p>Enables easy creation of class and exam timetables with just a few clicks, improving scheduling efficiency.</p>

                    <h3>School Administration:</h3>
                    <p>Streamlines administrative tasks like admissions, document management, and communication with parents.</p>

                    <h3>Transport Management:</h3>
                    <p>Tracks real-time bus locations, ensuring student safety. Manages vehicle details, routes, fares, and maintenance.</p>

                    <h3>Report Management:</h3>
                    <p>Generates academic and administrative reports following ICSE, CBSE, or state board formats. Simplifies result calculations and report card creation.</p>

                    <h3>Examination Management:</h3>
                    <p>Automates exam scheduling, marks assessment, and report card generation. Reduces manual effort and increases accuracy.</p>

                    <h3>Account Management:</h3>
                    <p>Handles all financial data, including student fees, staff salaries, and other expenses. Enhances transparency and accountability.</p>

                    <h3>Billing and Invoicing:</h3>
                    <p>Facilitates invoice creation and payment collection. Integrated accounting systems streamline financial processes.</p>

                    <h3>HR Management:</h3>
                    <p>Manages staff records, salaries, and attendance. Generates salary reports and maintains accurate employee data.</p>

                    <h3>Parental Involvement:</h3>
                    <p>Allows parents to track their child’s progress via web or mobile applications, improving engagement and communication.</p>

                    <p>School management software improves efficiency, reduces manual work, and enhances the overall educational experience for students, teachers, and administrators.</p>
                </div>
            </section>

            <CallToAction />
        </>
    )
}

export default Blog1;
