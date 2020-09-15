import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    const element = <FontAwesomeIcon icon={faCoffee} />

  return (
<footer>
    <div className="flex-row social-icons">
  <a className="github" target= "_blank" href="https://github.com/masonmarinko">
         <img alt="Github Logo" src="https://i.imgur.com/krq0lxo.png"
         width="50" height="50"></img>
      </a>
      <a className="linkedin" target= "_blank" href="https://www.linkedin.com/in/masonmarinko/">
         <img alt="Github Logo" src="https://i.imgur.com/TkR6RBO.png"
         width="170" height="50"></img>
      </a>
      <a className="resume" target= "_blank" href="https://www.twitter.com/crason8">
         <img alt="Github Logo" src="https://i.imgur.com/zCIGqvk.png"
         width="50" height="50"></img>
      </a>
      <a className="resume" target= "_blank" href="https://docs.google.com/document/d/1azzpUd0hBnXtuGDOOkl5xZMQx0bgtK04a-33nAHLQPc/edit?usp=sharing">
         <img alt="Github Logo" src="https://i.imgur.com/GSWNBdD.png"
         width="50" height="50"></img>
      </a>
      </div>
</footer>
  );
}

export default Footer;