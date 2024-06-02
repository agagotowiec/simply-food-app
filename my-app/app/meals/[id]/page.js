import { getIndividualMeal } from "@/app/helpers/meals";
import individualMealCss from "./individualMeal.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = params;
  const meal = getIndividualMeal(id);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.description,
  };
}

const individualMeal = ({ params }) => {
  const { id } = params;
  const meal = getIndividualMeal(id);

  if (!meal) {
    notFound();
  }

  //replace all line breaks with <br />
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  meal.ingredients = meal.ingredients.replace(/\n/g, "<br/>");
  return (
    <>
      <div className={individualMealCss.container}>
        <header className={individualMealCss.header}>
          <div className={individualMealCss.image}>
            <Image fill src={meal.image}></Image>
          </div>
          <div className={individualMealCss.headerText}>
            <h1>{meal.title}</h1>
            <p className={individualMealCss.summary}>{meal.summary}</p>
            <p className={individualMealCss.author}>author: {meal.author}</p>
          </div>
        </header>
        <main className={individualMealCss.main}>
          <p
            className={individualMealCss.ingredients}
            dangerouslySetInnerHTML={{ __html: meal.ingredients }}
          ></p>
          <p
            className={individualMealCss.instructions}
            dangerouslySetInnerHTML={{ __html: meal.instructions }}
          ></p>
        </main>
      </div>
    </>
  );
};

export default individualMeal;
