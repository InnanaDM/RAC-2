import React from "react";

const Pagination = () => {
  return (
    <ul className="pagination">
      <li className="disabled">
        <a href="./S">
          <i className="material-icons">chevron_left</i>
        </a>
      </li>
      <li className="active">
        <a href="./M">1</a>
      </li>
      <li className="waves-effect">
        <a href="./P">2</a>
      </li>
      <li className="waves-effect">
        <a href="./pls">3</a>
      </li>
      <li className="waves-effect">
        <a href="./and">4</a>
      </li>
      <li className="waves-effect">
        <a href="./thank">5</a>
      </li>
      <li className="waves-effect">
        <a href="./you!">
          <i className="material-icons">chevron_right</i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
