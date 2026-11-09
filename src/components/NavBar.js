import '../styles/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Noah Gumm</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;