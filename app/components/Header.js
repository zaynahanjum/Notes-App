 export function Header() {
  return (
    <header style={{
      backgroundColor: "#1f4e29ff",
      color: "white",
      padding: "20px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <h1 style={{
          fontSize: "28px",
          fontWeight: "bold",
          margin: 0
        }}>ALL YOU NEED AT SAHYADRI</h1>
        <nav style={{ display: "flex", gap: "20px" }}>
          <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
          <a href="/upload" style={{ color: "white", textDecoration: "none" }}>Upload Notes</a>
          <a href="/about" style={{ color: "white", textDecoration: "none" }}>About</a>
        </nav>
      </div>
    </header>
  );
}