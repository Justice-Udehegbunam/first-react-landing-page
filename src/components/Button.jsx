import React from "react";

function Button(buttonName) {
  return (
    <>
      <button className="text-red-600 px-6 py-3 rounded-3xl bg-white hover:text-white hover:bg-red-600 font-semibold text-xl">
        {buttonName.name}
      </button>
    </>
  );
}

export default Button;
