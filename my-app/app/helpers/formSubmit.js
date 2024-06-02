"use server";

import { redirect } from "next/navigation";
import { saveSubmittedMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isNotValidInput = (userInput) => {
  return !userInput || userInput.trim() === "";
};

const formSubmit = async (prevState, submittedData) => {
  const sharedMeal = {
    title: submittedData.get("title"),
    image: submittedData.get("image"),
    summary: submittedData.get("summary"),
    ingredients: submittedData.get("ingredients"),
    instructions: submittedData.get("instructions"),
    author: submittedData.get("name"),
    author_email: submittedData.get("email"),
  };

  //validating data in case user removes required in DOM
  if (
    isNotValidInput(sharedMeal.title) ||
    isNotValidInput(sharedMeal.summary) ||
    isNotValidInput(sharedMeal.instructions) ||
    isNotValidInput(sharedMeal.ingredients) ||
    isNotValidInput(sharedMeal.author) ||
    isNotValidInput(sharedMeal.author_email) ||
    !sharedMeal.author_email.includes("@") ||
    !sharedMeal.image ||
    !sharedMeal.image.size === 0
  ) {
    return {
      text: "Your input is not valid, please check it",
    };
  }

  await saveSubmittedMeal(sharedMeal);
  revalidatePath("/meals");
  redirect("/meals");
};

export default formSubmit;
