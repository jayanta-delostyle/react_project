export default function App() {
  return (
    <div
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f7fb",
        minHeight: "100vh",
        color: "#333",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "20px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white", margin: 0 }}>My Website</h1>

        <div>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "20px",
            }}
          >
            Home
          </a>

          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "20px",
            }}
          >
            About
          </a>

          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "20px",
            }}
          >
            Services
          </a>

          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Contact
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background: "linear-gradient(to right, #3b82f6, #06b6d4)",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          Welcome to My Website
        </h2>

        <p
          style={{
            fontSize: "18px",
            maxWidth: "700px",
            margin: "0 auto 30px",
            lineHeight: "1.6",
          }}
        >
          This is a simple React page design using inline CSS styling.
          Clean, modern, and easy to customize.
        </p>

        <button
          style={{
            padding: "14px 30px",
            fontSize: "16px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "white",
            color: "#2563eb",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Get Started
        </button>
      </div>

      {/* Cards Section */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          padding: "60px 20px",
          flexWrap: "wrap",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            backgroundColor: "white",
            width: "300px",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>Fast</h3>
          <p>
            Simple and fast React page structure with inline styling.
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            backgroundColor: "white",
            width: "300px",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>Responsive</h3>
          <p>
            Flexible layout using flexbox for responsive behavior.
          </p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            backgroundColor: "white",
            width: "300px",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>Modern</h3>
          <p>
            Clean UI with gradients, cards, and modern spacing.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: "#1e293b",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        © 2026 My Website. All rights reserved.
      </div>
    </div>
  );
}