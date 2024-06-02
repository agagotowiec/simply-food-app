"use client";

import { useFormStatus } from "react-dom";

const FormStatus = () => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending && "Submitting your recipe"}
      {!pending && "Share Your Recipe"}
    </button>
  );
};

export { FormStatus };
