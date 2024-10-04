import React from "react";

const Hero = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <h2 style={styles.title}>Discover Your Next Adventure</h2>
        <p style={styles.subtitle}>
          Explore the best travel destinations around the world.
        </p>
        <a href="#destinations" style={styles.btn}>
          Explore Now.
        </a>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    backgroundImage: "url(https://via.placeholder.com/1600x400)",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: { textAlign: "center" },
  title: { fontSize: "3rem", color: "#fff" },
  subtitle: { fontSize: "1.2rem", color: "#f4f4f4" },
  btn: {
    padding: "10px 20px",
    backgroundColor: "#ff6347",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    marginTop: "20px",
    display: "inline-block",
  },
};

export default Hero;
