import React from "react";
import Button from "./Button";

function Body() {
  return (
    <>
      <div id="body-container" className="py-40 flex justify-between w-[94%]">
        <div className="h-[250px] bg-red-600 m-6 shadow-black shadow-lg w-40 rounded-full mx-auto"></div>
        <div className=" w-1/2 bg-red-200 py-4 px-6 max-h-fit">
          Hi 👋🏽, I Am <br /> Justice Udehegbunam <br /> An Aspiring Web
          Developer.
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempora quis, officiis dolore iusto voluptatum dolorem, eos ratione
          animi cumque veniam illum velit consectetur possimus illo adipisci.
          Eum omnis delectus quod.
          <br />
          <div className="mt-4">
            <Button name="Hire Me" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
