import { useState, useEffect } from 'react';

export const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/events');
      if (!response.ok) {
        throw new Error('Failed to fetch event');
      }
      const data = await response.json();
      setEvents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addEvent = async (event) => {
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });
      if (!response.ok) {
        throw new Error('Failed to add event');
      }
      const newEvent = await response.json();
      setEvents((prevEvents) => [...prevEvents, newEvent.event]);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateEvent = async (id, updatedEvent) => {
    try {
      const response = await fetch(`/api/events/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEvent),
      });
      if (!response.ok) {
        throw new Error('Failed to update event');
      }
      const result = await response.json();
      setEvents((prevEvents) =>
        prevEvents.map((event) => (event._id === id ? result.event : event))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const cancelEvent = async (id) => {
    try {
      const response = await fetch(`/api/events/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ state: false }),
      });
      if (!response.ok) {
        throw new Error('Failed to cancel event');
      }
      const result = await response.json();
      setEvents((prevEvents) =>
        prevEvents.map((event) => (event._id === id ? result.event : event))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const assignResources = async (id, resources) => {
    try {
      const response = await fetch(`/api/events/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resources }),
      });
      if (!response.ok) {
        throw new Error('Failed to assign resources');
      }
      const result = await response.json();
      setEvents((prevEvents) =>
        prevEvents.map((event) => (event._id === id ? result.event : event))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return {
    events,
    loading,
    error,
    addEvent,
    updateEvent,
    cancelEvent,
    assignResources,
  };
};

