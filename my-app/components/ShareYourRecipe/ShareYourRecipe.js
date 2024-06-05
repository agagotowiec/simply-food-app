"use client";

import { useFormState } from "react-dom";
import ShareRecipeCss from "./ShareYourRecipe.module.css";
import { ImagePicker } from "@/components/ImagePicker/ImagePicker";
import formSubmit from "@/app/helpers/formSubmit";
import { useFormStatus } from "react-dom";

const ShareYourRecipe = () => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(formSubmit, { text: null });
  return (
    <>
      <header className={ShareRecipeCss.header}>
        <h1>
          Share your{" "}
          <span className={ShareRecipeCss.highlight}>favourite recipe</span>
        </h1>
        <p>and let others enjoy it too!</p>
      </header>
      <main className={ShareRecipeCss.main}>
        <form
          className={ShareRecipeCss.form}
          action={formAction}
          suppressHydrationWarning
        >
          <div className={ShareRecipeCss.row}>
            <div suppressHydrationWarning>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div>
            <label htmlFor="title">Recipe title</label>
            <input type="text" id="title" name="title" required />
          </div>
          <div>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </div>
          <div>
            <label htmlFor="ingredients">Ingredients</label>
            <textarea
              id="ingredients"
              name="ingredients"
              rows="10"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </div>
          <ImagePicker label="Your image" name="image" suppressHydrationWarning/>
          {state && <p>{state.text}</p>}
          <button disabled={pending} className={ShareRecipeCss.submitButton}>
            {pending && "Submitting your recipe"}
            {!pending && "Share Your Recipe"}
          </button>
        </form>
      </main>
    </>
  );
};

export { ShareYourRecipe };
