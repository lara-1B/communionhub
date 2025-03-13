import React, { useState } from "react";
import "./CreateEventForm.component.css";
import Images from "../../utils/importImages"; 

const CreateEventForm = ({ onEventCreate }) => {
  const [formData, setFormData] = useState({
    title: "",
    format: "In Person",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    timezone: "(GMT+5:30) India Standard Time",
    location: "",
    type: "Free",
    categories: "",
    description: "",
    speakers: [], 
  });

  const [speaker, setSpeaker] = useState({ name: "", role: "" });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false); 

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.startDate) newErrors.startDate = "Start date is required";
    if (!formData.startTime) newErrors.startTime = "Start time is required";
    if (!formData.endDate) newErrors.endDate = "End date is required";
    if (!formData.endTime) newErrors.endTime = "End time is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.categories) newErrors.categories = "At least one category is required";
    if (formData.speakers.length === 0) newErrors.speakers = "At least one speaker is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      const newEvent = {
        ...formData,
        id: Date.now(),
        categories: formData.categories.split(",").map((cat) => cat.trim()),
        image: Images.userIcon, 
      };

      onEventCreate(newEvent);
      localStorage.setItem(
        "events",
        JSON.stringify([...JSON.parse(localStorage.getItem("events") || "[]"), newEvent])
      );

      setFormData({
        title: "",
        format: "In Person",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        timezone: "(GMT+5:30) India Standard Time",
        location: "",
        type: "Free",
        categories: "",
        description: "",
        speakers: [],
      });

      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSpeakerChange = (e) => {
    setSpeaker({ ...speaker, [e.target.name]: e.target.value });
  };

  const addSpeaker = () => {
    if (speaker.name && speaker.role) {
      setFormData({ ...formData, speakers: [...formData.speakers, { ...speaker, avatar: Images.speakerIcon }] });
      setSpeaker({ name: "", role: "" });
    }
  };

  const removeSpeaker = (index) => {
    setFormData({
      ...formData,
      speakers: formData.speakers.filter((_, i) => i !== index),
    });
  };

  return (
    <form className="create-event-form" onSubmit={handleSubmit}>
      <h2>Create New Event</h2>

      <label htmlFor="title">Event Title</label>
      <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} autoComplete="off" />
      {errors.title && <p className="error">{errors.title}</p>}

      <label htmlFor="format">Format</label>
      <select id="format" name="format" value={formData.format} onChange={handleChange}>
        <option>In Person</option>
        <option>Online</option>
        <option>Hybrid</option>
      </select>
      {errors.format && <p className="error">{errors.format}</p>}

      <div className="date-time">
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} autoComplete="off" />
          {errors.startDate && <p className="error">{errors.startDate}</p>}
        </div>
        <div>
          <label htmlFor="startTime">Start Time</label>
          <input type="time" id="startTime" name="startTime" value={formData.startTime} onChange={handleChange} autoComplete="off" />
          {errors.startTime && <p className="error">{errors.startTime}</p>}
        </div>
      </div>

      <div className="date-time">
        <div>
          <label htmlFor="endDate">End Date</label>
          <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} autoComplete="off" />
          {errors.endDate && <p className="error">{errors.endDate}</p>}
        </div>
        <div>
          <label htmlFor="endTime">End Time</label>
          <input type="time" id="endTime" name="endTime" value={formData.endTime} onChange={handleChange} autoComplete="off" />
          {errors.endTime && <p className="error">{errors.endTime}</p>}
        </div>
      </div>

      <label htmlFor="timezone">Timezone</label>
      <select id="timezone" name="timezone" value={formData.timezone} onChange={handleChange}>
        <option>(GMT+5:30) India Standard Time</option>
        <option>(GMT-5:00) Eastern Standard Time</option>
        <option>(GMT+1:00) Central European Time</option>
      </select>
      {errors.timezone && <p className="error">{errors.timezone}</p>}

      <label htmlFor="location">Location</label>
      <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} autoComplete="off" />
      {errors.location && <p className="error">{errors.location}</p>}

      <label htmlFor="type">Event Type</label>
      <select id="type" name="type" value={formData.type} onChange={handleChange}>
        <option>Free</option>
        <option>Donation</option>
        <option>Paid</option>
      </select>
      {errors.type && <p className="error">{errors.type}</p>}

      <label htmlFor="categories">Categories (comma separated)</label>
      <input type="text" id="categories" name="categories" value={formData.categories} onChange={handleChange} autoComplete="off" />
      {errors.categories && <p className="error">{errors.categories}</p>}

      <label htmlFor="description">Event Description</label>
      <textarea id="description" name="description" value={formData.description} onChange={handleChange} autoComplete="off" />
      {errors.description && <p className="error">{errors.description}</p>}

      <h3>Add Speakers</h3>
      <div className="speaker-inputs">
        <input type="text" id="speakerName" name="name" placeholder="Speaker Name" value={speaker.name} onChange={handleSpeakerChange} autoComplete="off" />
        <input type="text" id="speakerRole" name="role" placeholder="Speaker Role" value={speaker.role} onChange={handleSpeakerChange} autoComplete="off" />
        <button type="button" className="add-speaker-btn" onClick={addSpeaker}>Add Speaker</button>
      </div>
      {errors.speakers && <p className="error">{errors.speakers}</p>} 

      <div className="speaker-list">
        {formData.speakers.map((spk, index) => (
          <div key={index} className="speaker-card">
            <img src={spk.avatar} alt={spk.name} />
            <div>
              <p><strong>{spk.name}</strong></p>
              <p>{spk.role}</p>
            </div>
            <button type="button" className="remove-speaker-btn" onClick={() => removeSpeaker(index)}>Remove</button>
          </div>
        ))}
      </div>

      <button type="submit" className="submit-btn">Create Event</button>
      {showPopup && (
        <div className="popup">
          Event created successfully!
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )} 
    </form>
  );
};

export default CreateEventForm;
