import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-lg" htmlFor="name">Name</label>
          <input
            className="border p-2 w-full"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg" htmlFor="email">Email</label>
          <input
            className="border p-2 w-full"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg" htmlFor="message">Message</label>
          <textarea
            className="border p-2 w-full"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button className="bg-rose-500 text-black px-4 py-2" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
