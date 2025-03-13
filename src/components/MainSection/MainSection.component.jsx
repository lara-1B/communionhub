import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; 
import Images from "../../utils/importImages";
import "./MainSection.component.css";

const carouselData = [
    {
        img: Images.community,
        title: "Discover Meaningful Events",
        text: "Join faith-based, social, and charity events that bring communities together.",
    },
    {
        img: Images.events,
        title: "Connect with Like-Minded People",
        text: "Engage with communities that share your interests and beliefs.",
    },
    {
        img: Images.support,
        title: "Make a Positive Impact",
        text: "Be a part of events that drive change and create lasting memories.",
    },
];

const MainSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="main-section">
            <div className="main-left">
                <h1 className="main-title">
                    <span className="text-highlight">UNITE,</span> <span className="small-card">INNOVATE</span>  
                    <br />
                    CONNECT, 
                    <span className="image-text">
                        <img src={Images.communion1} alt="Connection" />
                    </span>
                    INSPIRE
                    <br />
                    <span className="image-text">
                        <img src={Images.communion2} alt="Unity" />
                    </span>
                    TOGETHER
                </h1>
                <p className="main-description">
                    Bringing people closer through shared experiences and meaningful gatherings.
                </p>
                <Link to="/EventPage" className="cta-button">Join the Movement</Link> 
            </div>

            <div className="main-right">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={carouselData[currentIndex].img}
                        src={carouselData[currentIndex].img}
                        alt="Event Visual"
                        className="carousel-image"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                    />
                </AnimatePresence>

                <div className="carousel-text">
                    <motion.h2
                        key={carouselData[currentIndex].title}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {carouselData[currentIndex].title}
                    </motion.h2>

                    <motion.p
                        key={carouselData[currentIndex].text}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {carouselData[currentIndex].text}
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default MainSection;
