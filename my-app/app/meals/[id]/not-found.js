import Link from "next/link";

const notFoundMeal = () => {
  return (
    <main className="not-found">
      <h1>We were not able to find requested meal.</h1>
      <p>
        See all
        <Link href="/meals" className="link">
          meals
        </Link>
      </p>
    </main>
  );
};

export default notFoundMeal;
