"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import classes from "./page.module.css";

import food4 from "@/assets/food4.jpeg";
import goiaba from "@/assets/food3.jpeg";
import food7 from "@/assets/food7.jpeg";
import pacoca from "@/assets/food1.jpeg";

export default function CardapioPage() {
  const router = useRouter();

  function handleOrder(flavor) {
    const message = `Gostaria de fazer um pedido do pastelinho sabor ${flavor}.`;
    router.push(`/contato?mensagem=${encodeURIComponent(message)}`);
  }

  return (
    <>
      <header className={classes.header}>
        <h1>
          Os Sabores da Nossa <span className={classes.highlight}>Magia</span>
        </h1>
        <p>
          Tudo começa com o segredo da nossa massa artesanal, textura
          incrivelmente sequinha, que se desfaz na boca. Ela é preparada com
          ingredientes selecionados, servindo como a tela perfeita para as
          nossas duas criações.
        </p>
      </header>

      <main className={classes.main}>
        <section className={classes.products}>
          <div
            className={classes.product}
            onClick={() => handleOrder("Goiabada")}
            style={{ cursor: "pointer" }}
          >
            <Image src={goiaba} alt="Magia Clássica - Goiabada" />
            <h2>Magia Clássica (Goiabada)</h2>
            <p>
              A tradição que define o Brasil. Aqui, resgatamos a alma da
              goiabada e a transformamos em um creme de textura sublime, que
              explode em sabor.
            </p>
          </div>

          <div
            className={classes.product}
            onClick={() => handleOrder("Paçoca")}
            style={{ cursor: "pointer" }}
          >
            <Image src={pacoca} alt="Magia Aveludada - Paçoca" />
            <h2>Magia Aveludada (Paçoca)</h2>
            <p>
              Uma homenagem ao amendoim. Elevamos a paçoca a uma textura de
              veludo, um recheio incrivelmente cremoso que envolve o paladar.
            </p>
          </div>
        </section>

        <section className={classes.details}>
          <h3>O Cuidado em Cada Detalhe</h3>
          <p>
            Sua experiência é o toque final da nossa magia. Cada pastelinho é
            cuidadosamente acomodado em uma embalagem especial, desenhada para
            proteger o sabor e transmitir nosso carinho em cada detalhe.
          </p>
          <p>Conteúdo: Cada embalagem contém 2 (duas) unidades.</p>

          <h4>Peça como preferir:</h4>
          <ul>
            <li>2 unidades de Magia Clássica (Goiabada)</li>
            <li>2 unidades de Magia Aveludada (Paçoca)</li>
            <li>1 unidade de cada (Mix)</li>
          </ul>
        </section>

        <section className={classes.gallery}>
          <Image src={food4} alt="Pastelinho artesanal 1" />
          <Image src={goiaba} alt="Pastelinho artesanal 2" />
          <Image src={food7} alt="Pastelinho artesanal 3" />
        </section>
      </main>
    </>
  );
}
