import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";

import Example from "./components/Examples.jsx";
import { useState } from "react";

function App() {
 

  return (
    <>
      <Header></Header>
      <main>
        <CoreConcept></CoreConcept>
        <Example></Example>
      </main>
    </>
  );
}

export default App;
