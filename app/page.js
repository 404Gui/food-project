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
            <h1>Nome do produto</h1>
            <p>Experimente e compartilhe nosso produto com todos.</p>
          </div>
          <div className={styles.cta}>
            <Link href="/nosso-prato">Ver detalhes</Link>
            <Link href="/contato">Faça seu pedido</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>Como funciona</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
        </section>

        <section className={styles.section}>
          <h2>Por que escolher nosso produto?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
        </section>
      </main>
    </>
  );
}
