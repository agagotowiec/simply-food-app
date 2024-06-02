"use client";

import { useFormState } from "react-dom";
import shareMealCss from "./shareMeal.module.css";
import { ImagePicker } from "@/components/ImagePicker/ImagePicker";
import formSubmit from "@/app/helpers/formSubmit";
import { FormStatus } from "@/components/formStatus/formStatus";

const ShareMealPage = () => {
  const [state, formAction] = useFormState(formSubmit, { text: null });

  return (
    <>
      <header className={shareMealCss.header}>
        <h1>
          Share your{" "}
          <span className={shareMealCss.highlight}>favourite recipe</span>
        </h1>
        <p>and let others enjoy it too!</p>
      </header>
      <main className={shareMealCss.main}>
        <form className={shareMealCss.form} action={formAction}>
          <div className={shareMealCss.row}>
            <div>
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
          <ImagePicker label="Your image" name="image" />
          {state && <p>{state.text}</p>}
          <FormStatus />
        </form>
      </main>
    </>
  );
};

export default ShareMealPage;
