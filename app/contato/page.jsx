"use client";
import classes from "./page.module.css";

const WHATSAPP_NUMBER = "5518997223305"; // 18997223305 Sara

export default function ShareMealPage() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const instructions = form.instructions.value.trim();

    if (!name || !instructions) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const message = `Olá, sou ${name}!
Quero fazer um pedido.

Instruções:
${instructions}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

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
              <input type="text" id="name" name="name" required autoComplete="name" />
            </p>
          </div>

          <p>
            <label htmlFor="instructions">Instruções</label>
            <textarea id="instructions" name="instructions" rows="10" required />
          </p>

          <p className={classes.actions}>
            <button type="submit">Enviar</button>
          </p>
        </form>
      </main>
    </>
  );
}
