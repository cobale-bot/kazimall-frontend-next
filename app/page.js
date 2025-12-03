'use client';

import { useEffect, useState } from "react";
import TechnicianCard from "./components/TechnicianCard";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function HomePage() {
  const [technicians, setTechnicians] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTechnicians() {
      try {
        const res = await fetch(`${apiUrl}/technicians`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setTechnicians(data);
      } catch (err) {
        console.error("Failed to fetch technicians:", err);
        setError("Failed to load technicians");
      } finally {
        setLoading(false);
      }
    }

    fetchTechnicians();
  }, []);

  if (loading) return <p>Loading technicians...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>KaziMall — Your Mall for Trusted Services</h1>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {technicians.map((tech) => (
          <TechnicianCard key={tech.id} name={tech.name} skill={tech.skill} />
        ))}
      </div>
    </div>
  );
}
