'use client'
import {useState} from "react"
import { FiMenu, FiX } from "react-icons/fi";
import styles from "../MainHeader.module.css";
import { NavLink } from "../NavLink/NavLink";

export const BotaoMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li onClick={() => setMenuOpen(!menuOpen)}>
            <NavLink href="/sobre">Sobre nós</NavLink>
          </li>
          <li onClick={() => setMenuOpen(!menuOpen)}>
            <NavLink href="/contato">Contato</NavLink>
          </li>
          <li onClick={() => setMenuOpen(!menuOpen)}>
            <NavLink href="/avaliacoes">Avaliações</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
