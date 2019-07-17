import React from "react";

import "./App.css";
import Toolbar from "./components/Toolbar";
import Button from "./components/Buttons";
import InfoCard from "./components/InfoCard";
import Badge from "./components/Badges";
import Checkbox from "./components/CheckBoxes";
import Chipbox from "./components/Chipbox";
import Pagination from "./components/Pagination";
import Indeterminate from "./components/Indeterminate";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Button />
      <InfoCard />
      <Badge />
      <Checkbox />
      <Chipbox />
      <Indeterminate />
      <Pagination />
    </div>
  );
}

export default App;
