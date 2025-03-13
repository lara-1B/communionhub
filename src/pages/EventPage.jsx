import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar.component";
import CreateEvent from "../components/CreateEventSection/CreateEventSection.component";
import ListEvent from "../components/ListEventsSection/ListEventsSection.component";
import { motion } from "framer-motion";
import "../App.css";

const EventListingPage = ({ initialTab }) => {
  const [activeTab, setActiveTab] = useState(initialTab || "list");

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  return (
    <div className="event-page">
      <Navbar />

      <div className="event-container">
        {/* Sidebar for Desktop */}
        <div className="sidebar">
          <button
            className={activeTab === "list" ? "active" : ""}
            onClick={() => setActiveTab("list")}
          >
            List Events
          </button>
          <button
            className={activeTab === "create" ? "active" : ""}
            onClick={() => setActiveTab("create")}
          >
            Create Event
          </button>
        </div>

        {/* Content Area */}
        <div className="content">
          {/* Mobile Tabs (Hidden on Desktop) */}
          <div className="mobile-tabs">
            <button
              className={activeTab === "list" ? "active" : ""}
              onClick={() => setActiveTab("list")}
            >
              List Events
            </button>
            <button
              className={activeTab === "create" ? "active" : ""}
              onClick={() => setActiveTab("create")}
            >
              Create Event
            </button>
          </div>

          {/* Animated Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="tab-content"
          >
            {activeTab === "list" ? (
              <div>
                <ListEvent />
              </div>
            ) : (
              <div>
                <CreateEvent />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventListingPage;
