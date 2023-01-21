import { render, fireEvent, screen } from '@testing-library/react';
import * as React from "react";
import { fetchAPI, submitAPI } from './api';
import Booking from './Booking';

jest.mock('./api', () => {
  return {
    fetchAPI: jest.fn().mockResolvedValue([new Date(), new Date()]),
    submitAPI: jest.fn().mockResolvedValue(true)
  }
});

describe('Booking', () => {
  it('should render form and display available times for selected date', async () => {
      render(<Booking />);
    const dateInput = screen.getByText('Choose date');
    fireEvent.change(dateInput, { target: { value: new Date() } });
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(fetchAPI).toHaveBeenCalledWith(new Date());
      expect(dateInput).toBeInTheDocument();
    expect(screen.getByText('5:00 PM')).toBeInTheDocument();
    expect(screen.getByText('6:00 PM')).toBeInTheDocument();
  });
    beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve([])
    }));
  });

  afterEach(() => {
    global.fetch.mockRestore();
  });

  it('should render the form', () => {
    render(<Booking />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Choose date')).toBeInTheDocument();
    expect(screen.getByText('Choose time')).toBeInTheDocument();
    expect(screen.getByText('Number of guests')).toBeInTheDocument();
    expect(screen.getByText('Occassion')).toBeInTheDocument();
    expect(screen.getByText('Sitting Options')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('1')).toBeInTheDocument();
  });
    
 it('should update times when date is changed', async () => {
    render(<Booking />);
    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: new Date().toISOString().slice(0, 10) } });
    expect(fetch).toHaveBeenCalledWith(new Date());
  });

    it('should submit the form', async () => {
    jest.spyOn(global, 'submitAPI').mockImplementation(() => Promise.resolve({ success: true }));

    render(<Booking />);
    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'John Smith' } });
    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2022-01-01' } });
    fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '7:00 PM' } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '5' } });
    fireEvent.change(screen.getByLabelText('Occassion'), { target: { value: 'Anniversary' } });

    const submitBtn = screen.getByText('Submit');
    fireEvent.click(submitBtn);

    expect(submitAPI).toHaveBeenCalledWith({
      name: 'John Smith',
      date: new Date(),
      time: '7:00 PM',
      guests: '5',
      sittingOption:'outside',
      occassion: 'Anniversary',
    });
  });

});
