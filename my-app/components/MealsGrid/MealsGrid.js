import { MealItem } from "../MealItem/MealItem";
import MealsGridStyles from "./MealsGrid.module.css";

const MealsGrid = ({ meals }) => {
  return (
    <ul className={MealsGridStyles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <h2>{meal.id}</h2>
          <MealItem
            title={meal.title}
            slug={meal.slug}
            image={meal.image}
            summary={meal.summary}
            author={meal.author}
          />
        </li>
      ))}
    </ul>
  );
};

export { MealsGrid };
