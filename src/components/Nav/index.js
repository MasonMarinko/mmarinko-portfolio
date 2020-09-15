import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a className="page-title" data-testid="link" href="https://github.com/masonmarinko">
          <span role="img" aria-label="camera">
            {" "}
          </span>{" "}
          Mason Marinko Portfolio
        </a>
      </h2>
      <nav>
        <ul className="nav-buttons flex-row">
          <li className="mx-1">
            <a
              className = "nav-buttons about-nav"
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
              >
              About Me
            </a>
          </li>
          <li className={`mx-1 ${contactSelected && "navActive"}`}>
            <span className= "nav-buttons contact-nav" onClick={() => setContactSelected(true)}>Contact</span>
          </li>
                    {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name &&
                !contactSelected &&
                "navActive"
              }`}
              key={category.name}
            >
              <span
                className = "nav-buttons projects-nav"
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
          <li className="mx-1">
          <a className="nav-buttons about-nav" target= "_blank" href="https://docs.google.com/document/d/1azzpUd0hBnXtuGDOOkl5xZMQx0bgtK04a-33nAHLQPc/edit?usp=sharing">
            Resume
      </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
