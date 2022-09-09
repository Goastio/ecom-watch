import React from "react";

const Nav = () => {
  const navLinks = [
    {
      name: "New Releases",
      link: "/new-releases",
    },
    {
      name: "Watches",
      link: "/watches",
    },
    {
      name: "Accessories",
      link: "/accessories",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="flex h-16 items-center justify-between w-full max-w-screen-lg mx-auto bg-white border-b">
      <div className="flex">Insert Logo Here</div>
      <div className="flex gap-5 text-sm">
        {navLinks.map((link, index) => {
          return <button key={index}>{link.name.toLowerCase()}</button>;
        })}
      </div>
    </div>
  );
};

export default Nav;
