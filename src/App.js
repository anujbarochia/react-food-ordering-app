import React from "react";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import ReactDOM from "react-dom";
/**
 * header
 *  - Logo
 *  - Nav Items
 * body
 *  - Search
 *  - Restaurant Container
 *    - Restaurnat Card
 * footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

function AppLayout() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
