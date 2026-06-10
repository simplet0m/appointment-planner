import React from "react";

export const ContactPicker = ( {contacts = [], value, onChange } ) => {
  return (
      <select value={value} onChange={onChange}>
          <option value=''>Select Contact</option>
          {contacts.map(({ name }) => <option key={name} value={name}>{name}</option>)}
      </select>
  );
};
