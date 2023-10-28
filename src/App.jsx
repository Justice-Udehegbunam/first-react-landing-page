import React from "react";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Property from "./components/property";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <NavBar />
      <Body />
      <Counter />
      <div className="flex items-center justify-center flex-wrap">
        <Property
          product="Latest BMW"
          description="Very Fast & Pocket Friendly."
          price="2,000,000"
        />
        <Property
          product="Toyota Prado"
          description="Very Fast & Pocket Friendly."
          price="3,000,000"
        />
        <Property
          product="Lexus RX-350"
          description="Very Fast & Pocket Friendly."
          price="3,500,000"
        />
        <Property
          product="Lexus RX-300"
          description="Very Fast & Pocket Friendly."
          price="2,500,000"
        />
      </div>
    </>
  );
}

export default App;
