
import { Link } from "react-router-dom";

function Navigation() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <Link to="#" onClick={() => scrollToSection("home")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="#" onClick={() => scrollToSection("gallery")}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="#" onClick={() => scrollToSection("about")}>
              About
            </Link>
          </li>
          <li>
            <Link to="#" onClick={() => scrollToSection("contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
