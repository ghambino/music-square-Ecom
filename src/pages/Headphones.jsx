import React, { useState, useContext } from "react";
import { DataContext } from "../utilities/context";
import Category from "./Category";
function Headphones() {
  const { fetchedData } = useContext(DataContext);
  const filteredData = fetchedData
    .filter((unit) => unit.category == "headphones")
    .sort((a, b) => b.new - a.new);
  console.log(filteredData);
  return (
    <>
      <Category
        fetchedData={fetchedData}
        filteredData={filteredData}
        category="headphones"
      />
    </>
  );
}

export default Headphones;
