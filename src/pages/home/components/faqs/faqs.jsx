import styles from "./faqs.module.scss";
import { Accordion, AccordionItem } from "@mantine/core";
import "@mantine/core/styles.css";

const faqData = [
    {
        question: "What features are included in the free school management system?",
        answer: "Our system offers a 15-day free demo that includes student management, attendance tracking, fee management, reporting, and communication tools—everything you need to streamline school operations before committing."
    },
    {
        question: "Is the school management system cloud-based?",
        answer: "Yes, our system is fully cloud-based, allowing you to access it from anywhere with an internet connection."
    },
    {
        question: "Can I upgrade my plan later?",
        answer: "Absolutely! You can upgrade your plan anytime to accommodate more students, campuses, and advanced features."
    },
    {
        question: "Is customer support available?",
        answer: "Yes, we provide customer support via Call, WhatsApp, and Email for all plans."
    },
    {
        question: "Does the system support multiple campuses?",
        answer: "Yes, our multi-campus feature allows you to manage multiple school branches under a single platform."
    },
    {
        question: "Can parents track their child's progress?",
        answer: "Yes, parents can access real-time updates on attendance, grades, and school activities through our mobile app."
    },
    {
        question: "Is the system secure and private?",
        answer: "Yes, we use advanced encryption and security measures to ensure your school's data remains safe and private."
    },
    {
        question: "How can teachers use the system?",
        answer: "Teachers can manage student records, mark attendance, assign homework, and communicate with parents easily."
    },
    {
        question: "Does the system support online fee payments?",
        answer: "Yes, we offer digital payment options, including Easypaisa, JazzCash, bank transfers, and credit/debit cards."
    },
    {
        question: "Is there a mobile app available?",
        answer: "Yes, we provide a free mobile app for Parents, Teachers, and School Staff to stay updated on all activities."
    },
    {
        question: "How easy is it to set up the system?",
        answer: "Our system is user-friendly and can be set up quickly. We also provide tutorials and support to guide you."
    },
    {
        question: "Can I customize the system for my school?",
        answer: "Yes, our platform is customizable, allowing you to tailor features and settings to meet your institution's specific needs."
    }
];


const Faqs = () => {
    return (
        <section className={`${styles.faqs} py-5 mt-5`}>
            <div className="container text-center">
                <h2>Frequently Asked <span className="color-change">Questions</span></h2>
                <p className="mt-3">Find answers to common questions about our school management system.</p>
                <div className={`${styles.faqContainer} mt-5`}>
                    <Accordion>
                        {faqData.map((faq, index) => (
                            <AccordionItem key={index} value={faq.question} className={`${styles.accordionItem}`}>
                                <Accordion.Control className={`py-2`}><h4>{faq.question}</h4></Accordion.Control>
                                <Accordion.Panel>
                                    <p className="text-start">{faq.answer}</p>
                                </Accordion.Panel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Faqs;
