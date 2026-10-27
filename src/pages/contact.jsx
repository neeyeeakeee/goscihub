import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      const text = await res.text();
      let data = {};
      try {
        data = JSON.parse(text);
      } catch {}

      if (res.ok && data.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto px-8 py-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-slate-900">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium text-sm">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            maxLength={100}
            className="p-3 border border-slate-200 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium text-sm">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={150}
            className="p-3 border border-slate-200 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-medium text-sm">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="5"
            maxLength={1000}
            className="p-3 border border-slate-200 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition-colors shadow">
          Send Message
        </button>
        {status === 'success' && (
          <div className="p-4 rounded bg-emerald-50 text-emerald-800 text-sm">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        {status === 'error' && (
          <div className="p-4 rounded bg-rose-50 text-rose-800 text-sm">
            {errorMsg}
          </div>
        )}
      </form>
    </div>
  );
}