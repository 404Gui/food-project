"use client";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "./MainHeader.module.css";
import { NavLink } from "./NavLink/NavLink";
import BackgroundMainHeader from "./BackgroundMainHeader";

export function MainHeader() {
  return (
    <>
      <BackgroundMainHeader />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <img src={logoImg.src} alt="Um prato de comida" />
          Food Sharing
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Refeições</NavLink>
            </li>
            <li>
              <NavLink href="/community">Comunidade</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
