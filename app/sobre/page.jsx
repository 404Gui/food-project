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
          Conheça o nosso <span className={classes.highlight}>prato</span>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
      </header>
      <main className={classes.main}>
        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="Uma refeição deliciosa" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </li>
          <li>
            <Image src={communityIcon} alt="Um grupo de pessoas cozinhando" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="Um grupo de pessoas em um evento culinário"
            />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </li>
        </ul>
      </main>
    </>
  );
}
