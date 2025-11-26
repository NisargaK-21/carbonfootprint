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

      {/* -------------------- NEW SECTIONS BELOW -------------------- */}

      {/* Features Section */}
      <section style={{ padding: "50px 20px", background: "#fafafa" }}>
        <h2 style={{ textAlign: "center" }}>Features</h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "30px",
          flexWrap: "wrap"
        }}>
          <div style={{ width: "250px", textAlign: "center" }}>
            <h3>Fast</h3>
            <p>Experience super fast loading and smooth UI.</p>
          </div>
          <div style={{ width: "250px", textAlign: "center" }}>
            <h3>Secure</h3>
            <p>Your data is protected with modern security.</p>
          </div>
          <div style={{ width: "250px", textAlign: "center" }}>
            <h3>User-Friendly</h3>
            <p>Enjoy a clean interface that’s easy to navigate.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "50px 20px" }}>
        <h2 style={{ textAlign: "center" }}>What Users Say</h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          gap: "40px",
          flexWrap: "wrap"
        }}>
          <blockquote style={{ maxWidth: "300px", fontStyle: "italic" }}>
            “Amazing experience! The website feels so smooth and professional.”
          </blockquote>
          <blockquote style={{ maxWidth: "300px", fontStyle: "italic" }}>
            “I love how simple yet powerful the design is. Great work!”
          </blockquote>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "50px 20px", background: "#f0f0f0", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>Have questions? We'd love to hear from you.</p>
        <button
          style={{
            padding: "10px 20px",
            background: "#333",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px"
          }}
        >
          Send a Message
        </button>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "20px", background: "#f5f5f5" }}>
        <p>© 2025 My Website</p>
      </footer>

    </div>
  );
}