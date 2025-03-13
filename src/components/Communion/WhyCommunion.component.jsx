import { FaUsers, FaBolt, FaChartLine } from "react-icons/fa";
import "./WhyCommunion.component.css";

const WhyCommunion = () => {
    return (
        <section className="why-communion">
            <div className="why-communion-content">
                <h2 className="why-communion-title">Why Communion Rocks!</h2>
                <p className="why-communion-description">
                    Communion is not just another platform—it's a vibrant space that unites diverse faiths, beliefs, and traditions. 
                    By promoting collaboration and connection, we're fostering a world where differences become strengths and unity becomes the norm.
                </p>
                <button className="why-communion-button">Why Join Us? →</button>
            </div>

            <div className="why-communion-cards">
                <div className="why-communion-card">
                    <FaUsers className="why-communion-icon" />
                    <h3 className="why-communion-card-title">Unifying Communities</h3>
                    <p className="why-communion-card-description">
                        Communion bridges diverse religious communities, becoming the social glue for faiths. We believe in the power of unity and the strength that comes from understanding and respecting each other's beliefs.
                    </p>
                    <button className="why-communion-card-button">Learn More →</button>
                </div>

                <div className="why-communion-card">
                    <FaBolt className="why-communion-icon" />
                    <h3 className="why-communion-card-title">Innovative and Fun</h3>
                    <p className="why-communion-card-description">
                        Experience faith in a fresh way through interactive features and engaging events. Our platform is designed to make your spiritual journey exciting and meaningful.
                    </p>
                    <button className="why-communion-card-button">Learn More →</button>
                </div>

                <div className="why-communion-card">
                    <FaChartLine className="why-communion-icon" />
                    <h3 className="why-communion-card-title">Promoting Unity</h3>
                    <p className="why-communion-card-description">
                        We foster understanding and harmony between different faith communities. Join us in creating a world where unity and peace are the norms.
                    </p>
                    <button className="why-communion-card-button">Learn More →</button>
                </div>
            </div>
        </section>
    );
};

export default WhyCommunion;
