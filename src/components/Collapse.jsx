import { useState } from "react";
import arrow from "../assets/arrow_haut.png";
import "../styles/collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <img
          src={arrow}
          alt="flèche"
          className={`collapse-arrow ${isOpen ? "open" : ""}`}
        />
      </div>

      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
