// src/components/Jobs.js
import React from 'react';

const jobList = [
  {
    id: 1,
    position: 'Frontend Developer',
    company: 'TechNova',
    location: 'Remote',
    salary: '₹6 - ₹10 LPA'
  },
  {
    id: 2,
    position: 'Backend Developer',
    company: 'CodeCraft',
    location: 'Bangalore',
    salary: '₹8 - ₹12 LPA'
  },
  {
    id: 3,
    position: 'Data Scientist',
    company: 'BigDataX',
    location: 'Chennai',
    salary: '₹10 - ₹15 LPA'
  }
];

function Jobs() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Available Jobs</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {jobList.map(job => (
          <div key={job.id} style={{
            border: '1px solid #ccc',
            padding: '15px',
            width: '250px',
            borderRadius: '8px',
            boxShadow: '2px 2px 6px #ddd'
          }}>
            <h3>{job.position}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <button style={{ backgroundColor: '#28a745', color: 'white', padding: '8px', border: 'none', borderRadius: '4px' }}>
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
