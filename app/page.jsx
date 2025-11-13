"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import ImageSlideshow from "@/components/ImageSlideShow/ImageSlideShow";

export default function Home() {
  const router = useRouter();

  function handleOrderClick() {
    const message = "Gostaria de fazer um pedido de pastelinho.";
    router.push(`/contato?mensagem=${encodeURIComponent(message)}`);
  }

  return (
    <>
      <header className={styles.header}>
        <div>
          <div className={styles.hero}>
            <h1>Pastelinho</h1>
            <p>
              Doce típico do estado de Goiás, também conhecido como{" "}
              <em>pastelim</em>.
            </p>
          </div>
          <div className={styles.cta}>
            <Link href="/nosso-prato">Ver cardápio</Link>
            <button
              onClick={handleOrderClick}
              className={styles.orderButton}
            >
              Faça seu pedido
            </button>
          </div>
        </div>

        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <h2>O Sabor que Guarda a Alma de Goiás</h2>
          <p>
            Você não está prestes a saber de mais um doce, mas sim, prestes a
            descobrir um <strong>tesouro da antiga capital goiana</strong>, um
            talento artesanal que atravessou gerações.
          </p>
          <p>
            A história conta que o <strong>pastelinho</strong> nasceu na Cidade
            de Goiás, ainda nos tempos dos bandeirantes, e foi eternizado pelas
            mãos talentosas das doceiras da região, mantendo aquele{" "}
            <em>segredo de vó</em> guardado através dos séculos. Foi a lendária
            poetisa e doceira <strong>Cora Coralina</strong> quem, a partir de
            1950, ajudou a transformar essa iguaria em um símbolo da identidade
            feminina e da hospitalidade deste rico estado.
          </p>
          <p>
            <strong>O segredo?</strong> O pastelinho é o equilíbrio perfeito:
            uma massa delicada e incrivelmente sequinha que, ao morder, se
            desfaz para revelar um recheio cremoso que derrete na boca.
          </p>
          <p>
            E aqui, demos o nosso toque especial: saímos do óbvio e criamos{" "}
            <strong>duas experiências únicas</strong>: o aveludado{" "}
            <em>creme de paçoca</em> e o clássico <em>creme de goiabada</em>.
          </p>
          <p>
            Isto não é apenas um pastelinho. É o{" "}
            <strong>novo e o tradicional</strong> se encontrando em uma{" "}
            <em>mordida inesquecível</em>, esperando por você.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Por que escolher nosso produto?</h2>
          <p>
            Escolher a <strong>Magia Goiana</strong> é trocar o comum por uma{" "}
            <strong>experiência sensorial completa</strong>. Nós não entregamos
            apenas um doce. Propiciamos uma conexão cultural autêntica.
          </p>
          <p>
            Honramos a receita tradicional goiana, mas o nosso talento está no{" "}
            <strong>equilíbrio perfeito</strong> entre uma massa artesanal e a
            explosão de sabor dos nossos recheios cremosos de <em>paçoca</em> ou{" "}
            <em>goiabada</em>.
          </p>
          <p>
            É o sabor clássico com a qualidade e higiene que você busca e merece,
            feito para criar um <em>“momento mágico”</em> inesquecível a cada
            mordida.
          </p>
        </section>
      </main>
    </>
  );
}
