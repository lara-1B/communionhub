import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Images from "../../utils/importImages";
import "./Navbar.component.css";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleDropdown = (menu) => {
        setDropdown(dropdown === menu ? null : menu);
    };

    const toggleMobileMenu = () => {
        setMenuOpen(!menuOpen);
        setDropdown(null);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={Images.logo} alt="Logo" />
                </div>
                <div className="menu-icon" onClick={toggleMobileMenu}>
                    {menuOpen ? "✖" : "☰"}
                </div>
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li>
                        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
                    </li>
                    <li className="dropdown">
                        <div onClick={() => handleDropdown("communities")} className="nav-link">Communities</div>
                        <AnimatePresence>
                            {dropdown === "communities" && (
                                <motion.div className="dropdown-menu"
                                    initial={{ opacity: 0, y: -10 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <Link to="/" className="dropdown-item" onClick={() => setMenuOpen(false)}>Discover Communities</Link>
                                    <Link to="/" className="dropdown-item" onClick={() => setMenuOpen(false)}>Create a Community</Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </li>
                    <li className="dropdown">
                        <div onClick={() => handleDropdown("events")} className="nav-link">Events</div>
                        <AnimatePresence>
                            {dropdown === "events" && (
                                <motion.div className="dropdown-menu"
                                    initial={{ opacity: 0, y: -10 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <Link to="/EventPage?tab=list" className="dropdown-item" onClick={() => setMenuOpen(false)}>Upcoming Events</Link>
                                    <Link to="/EventPage?tab=create" className="dropdown-item" onClick={() => setMenuOpen(false)}>Create Event</Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </li>
                    <li className="dropdown">
                        <div onClick={() => handleDropdown("leaders")} className="nav-link">Leaders</div>
                        <AnimatePresence>
                            {dropdown === "leaders" && (
                                <motion.div className="dropdown-menu"
                                    initial={{ opacity: 0, y: -10 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <Link to="/" className="dropdown-item" onClick={() => setMenuOpen(false)}>View Leaders</Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </li>
                    <li className="dropdown">
                        <div onClick={() => handleDropdown("support")} className="nav-link">Support</div>
                        <AnimatePresence>
                            {dropdown === "support" && (
                                <motion.div className="dropdown-menu"
                                    initial={{ opacity: 0, y: -10 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <Link to="/" className="dropdown-item" onClick={() => setMenuOpen(false)}>Help Request</Link>
                                    <Link to="/" className="dropdown-item" onClick={() => setMenuOpen(false)}>Help Request Form</Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
