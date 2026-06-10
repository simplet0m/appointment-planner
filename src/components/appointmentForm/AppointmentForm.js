import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
    <form onSubmit={handleSubmit}>
        Event: <input placeholder="Name" type='text' value={name} onChange={(e) => setName(e.target.value)} />
        Contact: <ContactPicker contacts={contacts} value={contact} onChange={(e) => setContact(e.target.value)} />
        Date: <input placeholder="Date" type='date' value={date || getTodayString()} onChange={(e) => setDate(e.target.value)} />
        Time: <input placeholder="Time" type='time' value={time} onChange={(e) => setTime(e.target.value)} />
        <button type="submit">Add</button>
    </form>
    </>
  );
};
