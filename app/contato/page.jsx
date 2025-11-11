"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import classes from "./page.module.css";

const WHATSAPP_NUMBER = "5518997223305";

export default function ShareMealPage() {
  const searchParams = useSearchParams();
  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    const mensagem = searchParams.get("mensagem");
    if (mensagem) setInstructions(mensagem);
  }, [searchParams]);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();

    if (!name || !instructions) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const message = `Olá, sou ${name}!\n${instructions}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <header className={classes.header}>
        <h1>
          Entre em contato e <span className={classes.highlight}>faça seu pedido!</span>
        </h1>
        <p>Ou qualquer outra coisa que deseja compartilhar!</p>
      </header>

      <main className={classes.main}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Seu nome</label>
              <input type="text" id="name" name="name" required />
            </p>
          </div>

          <p>
            <label htmlFor="instructions">Instruções</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              required
            ></textarea>
          </p>

          <p className={classes.actions}>
            <button type="submit">Pedir</button>
          </p>
        </form>
      </main>
    </>
  );
}
