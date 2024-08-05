import React, { useState } from 'react';


const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

    const handleSubmit = () => {
        console.log('Form submitted successfully.')
    }; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto w-1/2 p-6 m-8 text-text bg-primary">
      <h2 className="text-3xl font-bold text-center text-secondary mb-4">Contact Us</h2>
      <form id='contact-form' onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 rounded-lg border-2 border-secondary focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 rounded-lg border-2 border-secondary focus:outline-none"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 rounded-lg border-2 border-secondary focus:outline-none"
        />
         <textarea
          type="text"
          name="message"
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 rounded-lg border-2 border-secondary focus:outline-none"
        />
        <div className="flex justify-center">
        <button type="submit" onClick={handleSubmit} className="bg-green-50 text-primary px-6 py-3 rounded-lg shadow-md hover:bg-accent transition duration-300">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact