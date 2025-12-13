import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DualLanding } from './components/DualLanding';
import { AcademyHome } from './components/Academy/AcademyHome';
import { AcademyCourses } from './components/Academy/AcademyCourses';
import { AgencyHome } from './components/Agency/AgencyHome';
import { ServiceList } from './components/Agency/ServiceList';
import { CourseDetail } from './components/CourseDetail';

// Placeholder for Shared Contact Form
const ContactPage = () => (
  <div className="py-20 px-6 max-w-2xl mx-auto">
    <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
    <p className="mb-8 text-slate-600">Please fill out the form below. Our team will get back to you within 24 hours.</p>
    <form className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" className="w-full p-3 border rounded-lg" />
        <input type="text" placeholder="Last Name" className="w-full p-3 border rounded-lg" />
      </div>
      <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg" />
      <select className="w-full p-3 border rounded-lg">
        <option>I am interested in Courses</option>
        <option>I want to hire the Agency</option>
      </select>
      <textarea rows={4} placeholder="Message" className="w-full p-3 border rounded-lg"></textarea>
      <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold w-full hover:bg-slate-800">Send Message</button>
    </form>
  </div>
);

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          {/* Root: Split Landing */}
          <Route path="/" element={<DualLanding />} />

          {/* Academy Routes */}
          <Route path="/academy" element={<AcademyHome />} />
          <Route path="/academy/courses" element={<AcademyCourses />} />
          <Route path="/academy/courses/:id" element={<CourseDetail />} />

          {/* Agency Routes */}
          <Route path="/agency" element={<AgencyHome />} />
          <Route path="/agency/services" element={<ServiceList />} />

          {/* Shared Routes */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;