// import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.logo}>Travel Showcase</h1>
        <nav>
          <ul style={styles.navLinks}>
            <li>
              <a style={styles.navLink} href="#">
                Home
              </a>
            </li>
            <li>
              <a style={styles.navLink} href="#destinations">
                Destinations
              </a>
            </li>
            <li>
              <a style={styles.navLink} href="#about">
                About
              </a>
            </li>
            <li>
              <a style={styles.navLink} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: { backgroundColor: "#333", color: "#fff", padding: "1rem 0" },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: { fontSize: "1.8rem" },
  navLinks: { listStyle: "none", display: "flex" },
  navLink: {
    margin: "0 15px",
    textDecoration: "none",
    color: "#fff",
    transition: "0.3s",
  },
};

export default Header;
