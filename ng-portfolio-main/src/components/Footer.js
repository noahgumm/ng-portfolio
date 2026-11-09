import profile from "../data/profile.js";
import "../styles/Contact.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with React</p>
      </div>
    </footer>
  );
}
