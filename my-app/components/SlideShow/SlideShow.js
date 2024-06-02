"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";
import ImagesSlideShowCss from "./SlideShow.module.css";

const images = [
  { image: burgerImg, alt: "Juicy burger image" },
  { image: curryImg, alt: "Spicy curry image" },
  { image: dumplingsImg, alt: "Steamed dumplings image" },
  { image: macncheeseImg, alt: "Mac and cheese image" },
  { image: pizzaImg, alt: "Pizza image"},
  { image: schnitzelImg, alt: "Schnitzel image" },
  { image: tomatoSaladImg, alt: "Tomato salad image" },
];

const SlideShow = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImgIndex) =>
        prevImgIndex < images.length - 1 ? prevImgIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={ImagesSlideShowCss.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImage ? ImagesSlideShowCss.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export { SlideShow };
