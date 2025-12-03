'use client';
import { useEffect, useState } from "react";
import TechnicianCard from "./components/TechnicianCard";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function HomePage() {
  const [technicians, setTechnicians] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTechnicians() {
      try {
        const res = await fetch(`${apiUrl}/technicians`);
        const data = await res.json();
        setTechnicians(data);
      } catch (err) {
        console.error("Failed to fetch technicians:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchTechnicians();
  }, []);

  return (
    <div>
      <h1>KaziMall — Your Mall for Trusted Services</h1>
      {loading ? (
        <p>Loading technicians...</p>
      ) : (
        technicians.map((tech) => (
          <TechnicianCard key={tech.id} name={tech.name} skill={tech.skill} />
        ))
      )}
    </div>
  );
}
