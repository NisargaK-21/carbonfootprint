// SimpleLanding.jsx
export default function SimpleLanding() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* Header */}
      <header style={{ padding: "20px", textAlign: "center", background: "#f5f5f5" }}>
        <h1>My Website</h1>
      </header>

      {/* Main Section */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Welcome to My Landing Page</h2>
        <p>This is a simple landing page created using React.</p>

        <button
          style={{
            padding: "10px 20px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px"
          }}
        >
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "20px", background: "#f5f5f5" }}>
        <p>© 2025 My Website</p>
      </footer>

    </div>
  );
}
