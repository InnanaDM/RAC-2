import React from "react";

const Badges = () => {
  return (
    <div>
      <ul id="dropdown2" className="dropdown-content">
        <li>
          <a href="./read">
            one<span className="badge">1</span>
          </a>
        </li>
        <li>
          <a href="./between">
            two<span className="new badge">1</span>
          </a>
        </li>
        <li>
          <a href="./lines">three</a>
        </li>
      </ul>
      <a className="btn dropdown-trigger" href="./fuck" data-target="dropdown2">
        Dropdown<i className="material-icons right">arrow_drop_down</i>
      </a>
    </div>
  );
};

export default Badges;
