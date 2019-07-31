import React from "react";

import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import Button from "./components/Buttons/Buttons";
import Badge from "./components/Badges/Badges";
import Checkbox from "./components/CheckBoxes/CheckBoxes";
import Chipbox from "./components/Chipbox/Chipbox";
import Pagination from "./components/Pagination/Pagination";
import Indeterminate from "./components/Indeterminate/Indeterminate";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Button />
      <Badge />
      <Checkbox />
      <Chipbox />
      <Indeterminate />
      <Pagination />
    </div>
  );
}

export default App;
