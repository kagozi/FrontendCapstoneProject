import React, { useState, useEffect } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({});
  const [response, setResponse] = useState({});
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
  let fetchAPI, submitAPI;

  useEffect(() => {
    const apiUrl = 'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js';

    fetch(apiUrl,        {
           method: 'POST',
           mode: 'cors',
        //    body: "param=" + paramVar,
           headers: {
             'Content-Type': 'application/json'
       },
  })
      .then((response) => response.text())
      .then((data) => {
        eval(data);
        // Now you can call fetchAPI and submitAPI
      })
      .catch((error) => {
        console.error('Error loading API:', error);
      });
  }, []);

  // initialize available times for today's date
  const initializeTimes = async () => {
    if(!fetchAPI) return;
    const times = await fetchAPI(selectedDate);
    setAvailableTimes(times);
  }

  // update available times when date is selected
  const updateTimes = async (date) => {
    if(!fetchAPI) return;
    setSelectedDate(date);
    const times = await fetchAPI(date);
    setAvailableTimes(times);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if(!submitAPI) return;
      const success = await submitAPI(formData);
      setResponse({ success });
    } catch (err) {
      setResponse({ error: err.message });
    }
  };

    initializeTimes()
    return (
     
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First name"
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <input
        type="date"
        name="date"
        value={selectedDate}
        onChange={(e) => updateTimes(e.target.value)}
      />
      <select name="time" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })}>
        <option value="">Select a time</option>
        {availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
