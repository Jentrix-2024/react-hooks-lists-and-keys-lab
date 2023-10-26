import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
 // Function to generate a unique key based on content
 function generateUniqueKey(content) {
  return `${content}-${Math.random().toString(36).substr(2, 9)}`;
}

return (
  <nav>
    {links.map((link) => (
      <a key={generateUniqueKey(link)} href={`#${link}`}>
        {link}
      </a>
    ))}
  </nav>
);
}
  

export default NavBar;
