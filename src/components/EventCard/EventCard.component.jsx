import React from "react";
import "./EventCard.component.css";

const EventCard = ({ event = {} }) => {
  return (
    <div className="event-card">
      <div className="event-date">
        <span className="event-month">
          {event.startDate
            ? new Date(event.startDate).toLocaleString("en-US", { month: "short" })
            : "N/A"}
        </span>
        <span className="event-day">
          {event.startDate ? new Date(event.startDate).getDate() : "00"}
        </span>
      </div>

      <div className="event-content">
        <h3 className="event-title">{event.title || "Untitled Event"}</h3>
        <p className="event-location">{event.location || "Location not available"}</p>
        <p className="event-datetime">
          {event.startDate || "N/A"} • {event.startTime || "00:00"} - {event.endTime || "00:00"} ({event.timezone || "UTC"})
        </p>

        <div className="event-tags">
          {Array.isArray(event.categories) && event.categories.length > 0 ? (
            event.categories.map((category, index) => (
              <span key={index} className="event-tag">{category}</span>
            ))
          ) : (
            <span className="event-tag">No Categories</span>
          )}
        </div>

        <p className="event-description">{event.description || "No description available."}</p>

        <div className="event-speakers">
          {Array.isArray(event.speakers) && event.speakers.length > 0 ? (
            event.speakers.map((speaker, index) => (
              <div key={index} className="speaker">
                <img
                  src={speaker.avatar || "/default-avatar.png"}
                  alt={speaker.name || "Unknown"}
                  className="speaker-avatar"
                />
                <div className="speaker-info">
                  <p className="speaker-name">{speaker.name || "Unknown Speaker"}</p>
                  <p className="speaker-role">{speaker.role || "Unknown Role"}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No speakers listed</p>
          )}
        </div>

        <div className="event-footer">
          <p className="event-type">{event.type || "Unknown Type"}</p>
          
        </div>
      </div>
    </div>
  );
};

export default EventCard;
