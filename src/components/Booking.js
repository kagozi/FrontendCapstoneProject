import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RadioGroup, RadioOption } from "./Radio";
import { fetchAPI, submitAPI } from './api';

const Booking = () => {
  const [sittingOption, setSitting] = useState('standard');
  const [formData, setFormData] = useState({});
  const [response, setResponse] = useState({});
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // initialize available times for today's date
 const initializeTimes = async () => {
    const times = await fetchAPI(selectedDate);
    setAvailableTimes(times);
  }

  const updateTimes = async (date) => {
  setSelectedDate(new Date(date));
  const times = await fetchAPI(new Date(date));
  setAvailableTimes(times);
};

const navigate = useNavigate();
  const [nameError, setNameError] = useState('');
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');
  const [guestsError, setGuestsError] = useState('');
  const [occasionError, setOccasionError] = useState('');
  // console.log(formData)
const handleSubmit = async (event) => {
  event.preventDefault();
  if (!formData.name) {
    setNameError('Name is required');
    console.log(nameError);
      return;
  }
  setNameError('');
  if (!formData.date) {
    setDateError('Date is required');
    console.log(dateError);
      return;
    }
  setDateError('');
    if (!formData.time) {
      setTimeError('Time is required');
      console.log(timeError);
    return;
  }
  setTimeError('');
    if (!formData.guests) {
      setGuestsError('Number of guests is required');
      console.log(guestsError);
      return;
    }
  setGuestsError('');
    if (!formData.occassion) {
      setOccasionError('Occasion is required');
      console.log(occasionError);
      return;
    }
  setOccasionError('');
  try {
    if (!submitAPI) return;
    
    const success = await submitAPI(formData);
    setResponse({ success });
    if (success) {
      navigate('/confirmed');
    }
  } catch (err) {
    setResponse({ error: err.message });
  }
};


  return (
    <section className="contact" id="contact">
      <form onSubmit={handleSubmit}>
        <div className="title">
        <h2 className="titleText"><span>B</span>ook Now</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="contactForm">
        <h3>Send Message</h3>
        <div className="inputBox">
          <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
        </div>
        <div className="inputBox">
            <label>Choose date</label>
            <input
             type="date"
              name="date"
              value={selectedDate.toISOString().slice(0, 10)}
              onChange={(e) => { updateTimes(e.target.value);  setFormData({ ...formData, date: e.target.value })}}
            />
        </div>
          <div className="inputBox">
          <label htmlFor="res-time">Choose time</label>
      <select name="time" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })}>
         <option value="">Select a time</option>
        {availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
       </select>
        </div>
        <div className="inputBox">
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" name="guests"  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}/>
        </div>
        <div className="inputBox">
          <label htmlFor="occassion">Occassion</label>
        <select name="occassion" value={formData.occassion} onChange={(e) => setFormData({ ...formData, occassion: e.target.value })}>
              <option  value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
        </select>
        </div>
        <div className="inputBox">
        <label htmlFor="sittingOptions">Sitting Options</label>
          <RadioGroup onChange={(e) => { setSitting(e.target.value); setFormData({ ...formData, sittingOption: e.target.value }) }} selected={sittingOption}>
            <RadioOption value="standard">Standard</RadioOption>
            <RadioOption value="outside">Outside</RadioOption>
          </RadioGroup>
        </div>
         <div className="inputBox">
          <input type="submit" value="Send" />
        </div>
      </div>
      </form>
    </section>
  )
};

export default Booking;