import classes from "./page.module.css";

export default function ShareMealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Entre em contato e<span className={classes.highlight}> faça seu pedido!</span>
        </h1>
        <p>Ou qualquer outra refeição que você sinta que precisa ser compartilhada!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Seu nome</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Seu email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Titulo</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="instructions">Instruções</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <p className={classes.actions}>
            <button type="submit">Enviar</button>
          </p>
        </form>
      </main>
    </>
  );
}
