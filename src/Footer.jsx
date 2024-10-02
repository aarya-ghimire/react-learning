import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          &copy; 2024 Travel Showcase | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: { backgroundColor: "#333", padding: "20px 0", color: "#fff" },
  container: { textAlign: "center" },
  text: { margin: 0 },
};

export default Footer;
