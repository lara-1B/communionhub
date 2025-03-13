import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQ.component.css";

const faqs = [
    { question: "What is the Communion app?", answer: "Communion is a platform that brings people together through shared experiences, fostering unity and connection." },
    { question: "How does it promote social cohesion?", answer: "By providing interactive tools and activities that encourage meaningful interactions and understanding among diverse groups." },
    { question: "Is it free to use?", answer: "Yes! Communion is completely free to use with optional premium features for enhanced experiences." },
    { question: "Can I meet new people?", answer: "Absolutely! Communion helps you connect with like-minded individuals and build meaningful relationships." },
    { question: "What if I have more questions?", answer: "Feel free to reach out to our support team anytime. We're here to help!" },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq">
            <div className="faq-left">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                <button className="faq-view-all">View All →</button>
            </div>
            <div className="faq-right">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <button className="faq-question" onClick={() => toggleFAQ(index)}>
                            <span>{faq.question}</span>
                            {openIndex === index ? <FaMinus className="faq-icon" /> : <FaPlus className="faq-icon" />}
                        </button>
                        <motion.div
                            className="faq-answer-container"
                            initial={{ height: 0, opacity: 0 }}
                            animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <p className="faq-answer">{faq.answer}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
