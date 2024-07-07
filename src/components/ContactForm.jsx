import React from "react";

const ContactForm = ({ name, phone, handleChange, addContact }) => {
  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="phone"
        value={phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <button onClick={addContact}>Add Contact</button>
    </div>
  );
};

export default ContactForm;
