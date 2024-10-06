import React from "react";

const About = () => {
  return (
    <section id="about" style={styles.about}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About Us!</h2>
        <p style={styles.text}>
          We are passionate travelers and tech enthusiasts who aim to provide a
          platform to showcase and explore beautiful travel destinations. Join
          us on this journey of discovering the world's wonders!
        </p>
      </div>
    </section>
  );
};

const styles = {
  about: { padding: "50px 0", backgroundColor: "#e0afa0" },
  container: { textAlign: "center" },
  heading: { fontSize: "2rem", marginBottom: "20px" },
  text: { maxWidth: "600px", margin: "0 auto" },
};

export default About;
