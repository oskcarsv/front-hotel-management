import { Navbar } from '../../components/navbars/Navbar'
import { Footer } from '../../components/footer/Footer'
import { useEvents } from '../../shared/hooks'

import './eventPage.css'

export const EventPage = () => {
  const { events, loading, error, addEvent, updateEvent, cancelEvent, assignResources } = useEvents();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleAddEvent = () => {
    addEvent({ title: 'New Event', description: 'Description', date: new Date(), location: 'Location' });
  };

  const handleUpdateEvent = (id) => {
    updateEvent(id, { title: 'Updated Title', description: 'Updated Description', date: new Date(), location: 'Updated Location' });
  };

  const handleCancelEvent = (id) => {
    cancelEvent(id);
  };

  const handleAssignResources = (id) => {
    assignResources(id, ['Resource1', 'Resource2']);
  };

  return (
    <div className='event-container'>
      <Navbar />
      <div className='events-content'>
        <h1>Events</h1>
        <ul className='event-list'>
          {events.map((event) => (
            <li key={event._id} className='event-item'>
              <h2 className='event-title'>{event.title}</h2>
              <p className='event-description'>{event.description}</p>
              <p className='event-date'>{new Date(event.date).toLocaleDateString()}</p>
              <p className='event-location'>{event.location}</p>
              <div className='event-buttons'>
                <button className='btn update-btn' onClick={() => handleUpdateEvent(event._id)}>Update</button>
                <button className='btn cancel-btn' onClick={() => handleCancelEvent(event._id)}>Cancel</button>
                <button className='btn assign-btn' onClick={() => handleAssignResources(event._id)}>Assign Resources</button>
              </div>
            </li>
          ))}
        </ul>
        <button className='btn add-btn' onClick={handleAddEvent}>Add Event</button>
      </div>
      <Footer />
    </div>
  )
}
