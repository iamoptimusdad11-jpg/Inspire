//pages/index.js
import Chatbot from "../components/Chatbot";
export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to bottom, #F9E4C8, #D7A86E)",
      padding: "40px",
      fontFamily: "Georgia, serif",
      color: "#4A2C2A",
      textAlign: "center",
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
        💜 Your Not Alone 💜
      </h1>
      <p style={{ fontSize: "1.4rem", maxWidth: "600px", lineHeight: "1.6" }}>
        This is a judge free place to open up about anything going on in your life or a place where you just need someone to listen 
      </p>

      <div
        style={{
          marginTop: "40px",
          background: "rgba(255, 255, 255, 0.4)",
          padding: "20px 30px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          backdropFilter: "blur(6px)",
        }}
      >
        <h2 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>
        
        </h2>
        <p style={{ fontSize: "1.2rem", maxWidth: "500px" }}>
          "There are those good people still left in this world."
        </p>
      </div>
<div>
  {/* your current page content */}

  <Chatbot />
</div>
      <footer style={{ marginTop: "60px", fontSize: "0.9rem", opacity: 0.7 }}>
        © {new Date().getFullYear()} Inspire — Fall Edition
      </footer>
    </div>
  );
}
