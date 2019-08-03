import React from "react";

import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import Button from "./components/Buttons/Buttons";
import Badge from "./components/Badges/Badges";
import Checkbox from "./components/CheckBoxes/CheckBoxes";
import Chipbox from "./components/Chipbox/Chipbox";
import AlignItemsList from "./components/AlignItemsList/AlignItemsList";
import CheckboxListSecondary from "./components/CheckboxListSecondary/CheckboxListSecondary";
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
      <AlignItemsList />
      <CheckboxListSecondary />
      <Indeterminate />
      <Pagination />
      <div />
    </div>
  );
}

export default App;
