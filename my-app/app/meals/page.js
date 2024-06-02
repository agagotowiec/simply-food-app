import Link from "next/link";
import MealsCss from "./page.module.css";
import { MealsGrid } from "@/components/MealsGrid/MealsGrid";
import { getMeals } from "@/app/helpers/meals";

export const metadata = {
  title: "🍅 SimplyFood",
  description: "All meals",
};

const texts = {
  headerText: "Delicious meals, created by",
  cookingText: "Cooking is easy and fun. Why not to try it yourself? ",
  shareText: "Or share your favorite recipe",
};

const Meals = async () => {
  const allMeals = await getMeals();
  return (
    <>
      <header className={MealsCss.header}>
        <h1>
          {texts.headerText}
          <span className={MealsCss.highlight}> you</span>!
        </h1>
        <p>
          {texts.cookingText}
          <span className={MealsCss.cta}>
            <Link href="meals/share">{texts.shareText}</Link>
          </span>
        </p>
      </header>
      <main className={MealsCss.main}>
        <MealsGrid meals={allMeals} />
      </main>
    </>
  );
};

export default Meals;
