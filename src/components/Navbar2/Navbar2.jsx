import React from "react";
import Link from "../NavBar/Link";
const navData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];

const Navbar2 = () => {
  return (
    <nav>
      <ul className="flex">
        {navData.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
      {/* <ul className="flex">
        {navData.map((route) => (
          <li className="mr-10">
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul> */}
      {/* static navbar */}
      {/* <ul className="flex">
        <li className="mr-10">
          <a href="/">Home</a>
        </li>
        <li className="mr-10">
          <a href="/">About</a>
        </li>
        <li className="mr-10">
          <a href="/">Blog</a>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar2;
