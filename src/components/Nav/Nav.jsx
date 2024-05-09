import NavItem from "./NavItems.jsx";
import NavItemsBg from "./NavItemsBg.jsx";
import "./styles/Nav.css";

function Nav() {

  const navItems = [
    { p: "H", link: "/", tooltip: "Home" },
    { p: "P", link: "/project", tooltip: "Project" },
    { p: "B", link: "/blog", tooltip: "Blog" },
    { p: "C", link: "/caseStudies", tooltip: "caseStudies" },
    { p: "A", link: "/about", tooltip: "About" }
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