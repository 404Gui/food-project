import classes from "./page.module.css";

export default function ShareMealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Entre em contato e<span className={classes.highlight}> faça seu pedido!</span>
        </h1>
        <p>Ou qualquer outra coisa que deseja compartilhar!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form}>
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
