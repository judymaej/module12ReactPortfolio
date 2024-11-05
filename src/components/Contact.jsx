import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email.includes('@')) formErrors.email = 'Invalid email';
    if (!formData.message) formErrors.message = 'Message is required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) alert('Form submitted');
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={e => setFormData({ ...formData, name: e.target.value })} />
        {errors.name && <p>{errors.name}</p>}
        <input type="email" placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} />
        {errors.email && <p>{errors.email}</p>}
        <textarea placeholder="Message" onChange={e => setFormData({ ...formData, message: e.target.value })} />
        {errors.message && <p>{errors.message}</p>}
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
