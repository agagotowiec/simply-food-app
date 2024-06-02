"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavBarLinkCss from "./NavBarLink.module.css";

const NavBarLink = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path === href
          ? `${NavBarLinkCss.link} ${NavBarLinkCss.active}`
          : NavBarLinkCss.link
      }
    >
      {children}
    </Link>
  );
};

export { NavBarLink };
