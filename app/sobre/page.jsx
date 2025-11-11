"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import classes from "./page.module.css";

import arlete from "@/assets/equipe/arlete.jpeg";
import bianca from "@/assets/equipe/bianca.jpeg";
import diego from "@/assets/equipe/diego.jpeg";
import junior from "@/assets/equipe/junior.jpeg";
import sara from "@/assets/equipe/sara.jpeg";

export default function SobrePage() {
  const images = [
    { src: arlete, nome: "Arlete", papel: "Empreendedora" },
    { src: bianca, nome: "Bianca", papel: "Administrativo Comercial" },
    { src: diego, nome: "Diego", papel: "Vendas" },
    { src: junior, nome: "Junior", papel: "Financeiro" },
    { src: sara, nome: "Sara", papel: "Empreendedora" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      <header className={classes.header}>
        <h1>
          Nós somos a equipe da{" "}
          <span className={classes.highlight}>Magia Goiana</span>
        </h1>
        <p>
          Somos uma equipe dedicada que pensou em cada detalhe para que você se
          sinta acolhido. Nosso objetivo é entregar mais que um produto: desejamos
          que você viva uma experiência sensorial e de sabor única, descobrindo
          algo novo que encante o seu paladar.
        </p>
      </header>

      <main className={classes.main}>
        {/* Carrossel da Equipe */}
        <div className={classes.carousel}>
          {images.map((person, index) => (
            <div
              key={index}
              className={`${classes.slide} ${
                index === current ? classes.active : ""
              }`}
            >
              <Image
                src={person.src}
                alt={`Foto de ${person.nome}`}
                priority={index === 0}
              />
              <div className={classes.caption}>
                <h3>{person.nome}</h3>
                <p>{person.papel}</p>
              </div>
            </div>
          ))}

          {/* Dots */}
          <div className={classes.dots}>
            {images.map((_, index) => (
              <button
                key={index}
                className={`${classes.dot} ${
                  current === index ? classes.activeDot : ""
                }`}
                onClick={() => setCurrent(index)}
                aria-label={`Membro ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <section className={classes.aboutText}>
          <h2>Quem Somos</h2>
          <p>
            Nós somos a <strong>Magia Goiana</strong>, um projeto que nasceu no{" "}
            <strong>5º semestre do curso de Gestão Comercial da Fatec Assis</strong>.
            Nosso foco é aplicar nosso conhecimento para entregar a você um produto de
            qualidade e uma experiência autêntica.
          </p>
          <p>
            💛 Agradecemos por fazer parte deste momento mágico e por nos permitir
            transformar sabor em memória.
          </p>
        </section>
      </main>
    </>
  );
}
