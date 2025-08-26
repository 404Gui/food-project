import Link from "next/link";
import styles from "./page.module.css";
import { MealsGrid } from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Mealss() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Refeições deliciosas, criadas{" "}
          <span className={styles.highlight}>por você</span>
        </h1>
        <p>
          Escolha suas receitas favoritas e cozinhe você mesmo. É fácil e
          divertido
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Compartilhe sua receita favorita</Link>
        </p>
      </header>

      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Buscando os dados...</p>}>
          <Mealss />
        </Suspense>
      </main>
    </>
  );
}
