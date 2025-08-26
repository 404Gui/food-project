import MealItem from "./MealItems";
import styles from "./Meals.module.css";
export function MealsGrid({ meals }) {
  return (
    <>
      <ul className={styles.meals}>
        {meals.map((meal) => 
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        )}
      </ul>
    </>
  );
}
