import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-between w-[400px] mx-auto">
          <li>Home</li>
          <li>About</li>
          <li>Contact Me</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
