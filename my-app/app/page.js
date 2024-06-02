import Link from "next/link";
import homeCss from "./page.module.css";
import { SlideShow } from "@/components/SlideShow/SlideShow";

const headerTexts = {
  heroText: "Simply-Food",
  subHeroText:
    "A place for foodies to share their favorite recipes with the world, discover new meals & connect with other food lovers.",
  meals: "Explore meals",
  share: "Share your recipe",
};

const Home = () => {
  return (
    <header className={homeCss.header}>
      <div className={homeCss.slideshow}>
        <SlideShow />
      </div>
      <div>
        <div className={homeCss.hero}>
          <h1>{headerTexts.heroText}</h1>
          <p>{headerTexts.subHeroText}</p>
        </div>
        <div className={homeCss.cta}>
          <Link href="/share">{headerTexts.share}</Link>
          <Link href="/meals">{headerTexts.meals}</Link>
        </div>
      </div>
    </header>
  );
};

export default Home;
