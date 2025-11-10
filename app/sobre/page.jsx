
import classes from "./page.module.css";

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Nós somos a equipe da <span className={classes.highlight}>Magia Goiana</span> e é uma alegria ter você aqui!
        </h1>
        <p>
          Doce que transforma memória em magia! Doceria inspirada na culinária goiana
        </p>
      </header>
      <main className={classes.main}>
        <h2>Descubra o sabor da magia! A Magia Goiânia é uma doceria artesanal que transforma ingredientes em momentos doces e inesquecíveis.</h2>        
      </main>
    </>
  );
}


