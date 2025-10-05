 export function Footer() {
  return (
    <footer style={{
      backgroundColor: "#1f4e29ff",
      color: "white",
      padding: "30px 20px",
      marginTop: "50px",
      textAlign: "center"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ margin: "10px 0" }}>© 2025 EduNotes - Share Knowledge, Grow Together</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "15px" }}>
          <a href="/privacy" style={{ color: "#ecf0f1", textDecoration: "none" }}>Zaynah Anjum</a>
          <a href="/terms" style={{ color: "#ecf0f1", textDecoration: "none" }}>Khatija Kaneez</a>
          <a href="/contact" style={{ color: "#ecf0f1", textDecoration: "none" }}>Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
