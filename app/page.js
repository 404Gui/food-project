import Link from "next/link";
import styles from "./page.module.css";
import ImageSlideshow from "@/components/ImageSlideShow/ImageSlideShow";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>Food for Foodies</h1>
            <p>Prove e compartilhe pratos do mundo todo.</p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">Entre para a Comunidade</Link>
            <Link href="/meals">Explore as Refeições</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>Como funciona</h2>
          <p>
            O NextLevel Food é uma plataforma para amantes da culinária
            compartilharem suas receitas favoritas com o mundo. É um lugar para
            descobrir novos pratos e se conectar com outros apaixonados por
            comida.
          </p>
          <p>
            O NextLevel Food é um espaço para explorar novos sabores e criar
            conexões com pessoas que amam cozinhar e comer bem.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Por que escolher o NextLevel Food?</h2>
          <p>
            O NextLevel Food é uma plataforma para amantes da culinária
            compartilharem suas receitas favoritas com o mundo. É um lugar para
            descobrir novos pratos e se conectar com outros apaixonados por
            comida.
          </p>
          <p>
            O NextLevel Food é um espaço para explorar novos sabores e criar
            conexões com pessoas que amam cozinhar e comer bem.
          </p>
        </section>
      </main>
    </>
  );
}
