"use client";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "./MainHeader.module.css";
import BackgroundMainHeader from "./BackgroundMainHeader";
import { useState } from "react";
import { BotaoMenu } from "./BotaoMenu/BotaoMenu";

export function MainHeader() {

  return (
    <>
      <BackgroundMainHeader />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <img src={logoImg.src} alt="Um prato de comida" />
          <p>Projeto Integrador</p>
        </Link>
        <BotaoMenu />
      </header>
    </>
  );
}
