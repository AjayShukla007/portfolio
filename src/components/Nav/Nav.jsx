import { useState } from "react";
import { m } from "framer-motion";
import NavItem from "./NavItems.jsx";
import NavItemsBg from "./NavItemsBg.jsx";
import "./styles/Nav.css";

function Nav() {
  // variants={variants3}
  // const navItems = ["p","b","t","c"]


  const handleLinkClick = linkId => {
    setActiveLink(linkId);
    console.log(linkId);
  };

  const navItems = [
    { p: "h", link: "/", tooltip:"Home" },
    { p: "p", link: "/project", tooltip:"Project" },
    { p: "b", link: "/blog", tooltip:"Blog" },
    { p: "t", link: "/test", tooltip:"Test" },
    { p: "c", link: "/cert", tooltip:"Cert" }
  ];

  return (
    <>
      <nav className="Navcontainer">
        <div className="navIcons">
          {navItems.map((e, i) => (
            <NavItem 
            icon={e.p} 
            key={i} 
            link={e.link}
            tooltip={e.tooltip}
            />
          ))}
        </div>
        <div className="navBg">
          <NavItemsBg />
        </div>
      </nav>
    </>
  );
}

export default Nav;

/*

      <m.h2
      animate={{
        scale:[1, 0.9, 1, 1.2, 1]
      }}
      transition={{
        delay: 1.5,
        ease: "linear",
        duration: 2
      }}
      whileTap={{
        scale:1.5
      }}
      layout
      >this is nav
      </m.h2>
*/
