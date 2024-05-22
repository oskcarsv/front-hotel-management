
import { FaInstagram } from "react-icons/fa";
//import { Input } from '../../components/Input'//
import './eventPage.css'

export const EventPage = () => {
<<<<<<< HEAD
  return (
    <div className="events-1">
      <div className="navigation">
        <div className="frame-1321316143">
          <span className="you-hotel">
            YouHotel
          </span>
        </div>
        <div className="items">
          <button className="button">
              Events
            </button>
          <button className="button-1">
            Reservations
          </button>
        </div>
      </div>
      <div className="container">
        <div className="container-3">
          <div className="headline">
            <div className="events-2">
              Events
            </div>
            <span className="save-your-event-here">
              save your event here
            </span>
          </div>
          <div className="form">
            <div className="container-1">
              <div className="input">
                <div className="first-name">
                  First name
                </div>
                <input className="field"/>
              </div>
              <div className="input-1">
                <div className="last-name">
                  Last name
                </div>
                <input className="field-1"/>
              </div>
            </div>
            <div className="input-2">
              <div className="email-address">
                Email address
              </div>
              <input className="field-2"/>
            </div>
            <div className="input-3">
              <div className="what-event-are-you-planning-to-do">
                What event are you planning to do?<br />
              </div>
              <input className="field-3"/>
            </div>
            <button className="button-2">
            Submit
            </button>
          </div>
        </div>
        <div className="image-1">
        </div>
      </div>
      <div className="navigation-footer">
        <div className="items-1">
        </div>
        <div className="container-2">
          <div className="divider">
          </div>
          <div className="what-event-are-you-planning-to-hold-today">
            What event are you planning to hold today?<br />
          </div>
        </div>
=======
  const {
    events,
    loading,
    error,
    addEvent,
    updateEvent,
    cancelEvent,
    assignResources
  } = useEvents()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  const handleAddEvent = () => {
    addEvent({
      title: 'New Event',
      description: 'Description',
      date: new Date(),
      location: 'Location'
    })
  }

  const handleUpdateEvent = (id) => {
    updateEvent(id, {
      title: 'Updated Title',
      description: 'Updated Description',
      date: new Date(),
      location: 'Updated Location'
    })
  }

  const handleCancelEvent = (id) => {
    cancelEvent(id)
  }

  const handleAssignResources = (id) => {
    assignResources(id, ['Resource1', 'Resource2'])
  }

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
              <p className='event-date'>
                {new Date(event.date).toLocaleDateString()}
              </p>
              <p className='event-location'>{event.location}</p>
              <div className='event-buttons'>
                <button
                  className='btn update-btn'
                  onClick={() => handleUpdateEvent(event._id)}
                >
                  Update
                </button>
                <button
                  className='btn cancel-btn'
                  onClick={() => handleCancelEvent(event._id)}
                >
                  Cancel
                </button>
                <button
                  className='btn assign-btn'
                  onClick={() => handleAssignResources(event._id)}
                >
                  Assign Resources
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button className='btn add-btn' onClick={handleAddEvent}>
          Add Event
        </button>
>>>>>>> ac04fffe3a54395fb81b502f0dd1e5012e8d7838
      </div>
    </div>
  )
}



/*
export const EventPage = () => {
  return (
    <div className='frame-1'>
      <div className='contact-form'>
        <div className='items'>

          <div className='abut-us'>About Us</div>
        </div>
        <div className='container'>
          <div className='container-1'>
            <div className='headline'>
              <div className='login-1'>Login</div>
              <span className='welcome-back'>
                Welcome back
                <br />
              </span>
            </div>
            <form className='form'>
              <div className='input'>
                <div className='user-or-email'>User or Email</div>
                <div className='field'>
                  <Input
                    field='usernameOrEmail'
                    type='text'
                  />
                </div>
              </div>
              <div className='input-1'>
                <div className='password'>Password</div>
                <div className='field-1'>
                  <Input
                    field='password'

                    type='password'
                  />
                </div>
              </div>
              <div className='button'>
                <button type='submit'>
                  <span className='Lbutton'>Login</span>
                </button>
              </div>
            </form>
            <div className='input-2'>
              <div className='have-you-not-registered-do-it-here'>
                Have you not registered? Do it here
                <br />
              </div>
              <div className='button-1'>
                <span className='Lbutton'>Register</span>
              </div>
            </div>
          </div>
          <div className='image-1'>
            <img alt='My Image' />
          </div>
        </div>
        <div className='navigation-footer' />
      </div>
    </div>
  )
}*/
