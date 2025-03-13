import React, { useState, useEffect } from "react";
import mockGetEvents from "../../utils/mockGetEvents";
import EventCard from "../EventCard/EventCard.component";
import Filter from "../Filter/Filter.component";

const ListEventsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents([...mockGetEvents(), ...storedEvents]);
  }, []);

  const categories = [...new Set(events.flatMap((event) => event.categories))];
  const locations = [...new Set(events.map((event) => event.location))];

  const filteredEvents = events.filter((event) => {
    return (
      (selectedCategory ? event.categories.includes(selectedCategory) : true) &&
      (selectedLocation ? event.location === selectedLocation : true) &&
      (searchTerm ? event.title.toLowerCase().includes(searchTerm.toLowerCase()) : true)
    );
  });

  return (
    <div className="list-events-container">
      <Filter
        categories={categories}
        locations={locations}
        onCategoryChange={setSelectedCategory}
        onLocationChange={setSelectedLocation}
        onSearchChange={setSearchTerm}
      />
      <div className="events-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <p className="no-events">No events found for this filter criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ListEventsSection;
