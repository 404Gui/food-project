
import classes from "./page.module.css";

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          pagina sobre a <span className={classes.highlight}>empresa</span>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
      </header>
      <main className={classes.main}>
        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>        
      </main>
    </>
  );
}
