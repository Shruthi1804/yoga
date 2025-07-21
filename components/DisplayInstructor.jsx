import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/getAllInstructors")
      .then(res => setInstructors(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h3>Submitted Yoga Instructor Applications</h3>
      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Certification</th>
            <th>Yoga Specialty</th>
            <th>Class Preference</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((inst, idx) => (
            <tr key={idx}>
              <td>{inst.name}</td>
              <td>{inst.certification}</td>
              <td>{inst.yogaSpecialty}</td>
              <td>{inst.classPreference}</td>
              <td>{inst.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayInstructor;
