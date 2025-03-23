import React from 'react';
import SubNav from '../SubNav';

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <header className="mt-12 w-full text-center shadow-md">
        <SubNav />
      </header>

      <main className="flex flex-col items-center mt-8">
        <h1 className="text-4xl font-bold text-gray-600 mb-10">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          We'd love to hear from you! Fill out the form below to get in touch.
        </p>
        <form className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </main>

      <footer className="bg-gray-800 text-white w-full py-4 text-center mt-auto">
        <p className="text-sm">© {new Date().getFullYear()} GDG Weekly Tasks. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;