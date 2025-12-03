'use client';

export default function TechnicianCard({ name, skill }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <h3>{name}</h3>
      <p>{skill}</p>
    </div>
  );
}
