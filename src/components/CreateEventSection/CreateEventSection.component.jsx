import React from 'react';
import CreateEventForm from '../CreateEventForm/CreateEventForm.component';

const CreateEventSection = () => {
  const handleEventCreate = (newEvent) => {
    console.log('Event created:', newEvent);
  };

  return (
    <div>
      <h2>Create New Event</h2>
      <CreateEventForm onEventCreate={handleEventCreate} />
    </div>
  );
};

export default CreateEventSection;