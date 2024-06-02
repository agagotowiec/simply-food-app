import Link from "next/link";
import Image from "next/image";

import MealItemCss from "./MealItem.module.css";

const MealItem = ({ title, slug, image, summary, author }) => {
  return (
    <article className={MealItemCss.meal}>
      <header>
        <div className={MealItemCss.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={MealItemCss.headerText}>
          <h2>{title}</h2>
          <p>by {author}</p>
        </div>
      </header>
      <div className={MealItemCss.content}>
        <p className={MealItemCss.summary}>{summary}</p>
        <div className={MealItemCss.actions}>
          <Link href={`/meals/${slug}`}>See recipe</Link>
        </div>
      </div>
    </article>
  );
};

export { MealItem };
