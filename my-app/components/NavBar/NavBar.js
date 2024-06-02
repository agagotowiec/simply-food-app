import NavBarCss from "./NavBar.module.css";
import { NavBarLink } from "../NavBarLink/NavBarLink";

const NavBar = () => {
  return (
    <nav className={NavBarCss.nav}>
      <ul>
        <NavBarLink href="/">Home</NavBarLink>
      </ul>
      <ul>
        <NavBarLink href="/meals">All Meals</NavBarLink>
      </ul>
      <ul>
        <NavBarLink href="/share">Share Your Meal</NavBarLink>
      </ul>
    </nav>
  );
};

export { NavBar };
