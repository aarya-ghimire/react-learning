import React from "react";
const Destinations = () => {
  return (
    <section id="destinations" style={styles.destinations}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Featured Destinations</h2>
        <div style={styles.gallery}>
          <div style={styles.card}>
            <img src={destination1} alt="Paris, France" style={styles.image} />
            <h3>Paris, France</h3>
            <p>The city of lights, romance, and culture!</p>
          </div>
          <div style={styles.card}>
            <img src={destination2} alt="Tokyo, Japan" style={styles.image} />
            <h3>Tokyo, Japan</h3>
            <p>
              A bustling metropolis with a unique blend of modernity and
              tradition.
            </p>
          </div>
          <div style={styles.card}>
            <img
              src={destination3}
              alt="Bali, Indonesia"
              style={styles.image}
            />
            <h3>Bali, Indonesia</h3>
            <p>
              A tropical paradise known for its beaches and vibrant culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  destinations: { padding: "50px 0", backgroundColor: "#f4f4f4" },
  container: { textAlign: "center" },
  heading: { fontSize: "2rem", marginBottom: "20px" },
  gallery: { display: "flex", justifyContent: "center", gap: "20px" },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  image: { width: "100%", borderRadius: "10px" },
};

export default Destinations;
