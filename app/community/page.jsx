import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import classes from "./page.module.css";

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Uma paixão em comum: <span className={classes.highlight}>Comida</span>
        </h1>
        <p>
          Junte-se à nossa comunidade e compartilhe suas receitas favoritas!
        </p>
      </header>
      <main className={classes.main}>
        <h2>Vantagens da Comunidade</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="Uma refeição deliciosa" />
            <p>Compartilhe e descubra novas receitas</p>
          </li>
          <li>
            <Image src={communityIcon} alt="Um grupo de pessoas cozinhando" />
            <p>Encontre novos amigos e pessoas com os mesmos interesses</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="Um grupo de pessoas em um evento culinário"
            />
            <p>Participe de eventos exclusivos</p>
          </li>
        </ul>
      </main>
    </>
  );
}
