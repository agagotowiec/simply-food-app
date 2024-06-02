import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export const getMeals = async () => {
  return db.prepare("SELECT * FROM meals").all();
};

export const getIndividualMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

export const saveSubmittedMeal = async (meal) => {
  meal.ingredients = xss(meal.ingredients);
  meal.instructions = xss(meal.instructions);
  meal.slug = slugify(meal.title, { lower: true });

  const imgType = meal.image.name.split(".").pop();
  const id = Math.random();
  const newImg = `${meal.slug}-${id}.${imgType}`;

  const stream = fs.createWriteStream(`public/images/${newImg}`);
  const buffer = await meal.image.arrayBuffer();

  stream.write(Buffer.from(buffer), (error) => {
    if (error) {
      throw new Error("Could not save image");
    }
  });

  meal.image = `/images/${newImg}`;

  db.prepare(
    `
  INSERT INTO meals 
    (slug, title, image, summary, ingredients, instructions, author, author_email)
  VALUES (   
    @slug,
    @title,
    @image,
    @summary,
    @ingredients,
    @instructions,
    @author,
    @author_email)
  `
  ).run(meal);
};
