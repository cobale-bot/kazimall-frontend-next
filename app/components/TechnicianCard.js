export default function TechnicianCard({ name, skill }) {
  return (
    <div style={{ 
      border: "1px solid #ccc",
      padding: 15,
      borderRadius: 8,
      marginBottom: 10
    }}>
      <h3>{name}</h3>
      <p>{skill}</p>
    </div>
  );
}
