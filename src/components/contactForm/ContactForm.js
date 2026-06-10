import React from "react";

//const ukPhoneRegex = "/^(?:0|\+44)(?:\d\s?){9,10}$/";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" type='text' value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Phone" type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} /*pattern={ukPhoneRegex}*/ />
      <input placeholder="email" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Add</button>
    </form>
    </>
  );
};

