import React from "react";

const Property = (props) => {
  return (
    <>
      <div className="bg-red-500 p-5 w-fit rounded-xl shadow-md shadow-black m-5">
        <h1 className="text-2xl font-bold text-white shadow-md mb-3 text-center">
          {props.product}
        </h1>
        <h2 className="text-xl mb-2 font-serif">{props.description}</h2>
        <p className="text-xl font-semibold text-gray-200 underline">
          N{props.price}
        </p>
      </div>
    </>
  );
};

export default Property;
