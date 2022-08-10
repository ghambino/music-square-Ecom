import React, { useContext } from "react";
import { DataContext } from "../utilities/context";
import Category from "./Category";

function Earphones() {
  const { fetchedData } = useContext(DataContext);
  const filteredData = fetchedData
    .filter((unit) => unit.category == "earphones")
    .sort((a, b) => b.new - a.new);
  console.log(filteredData);
  return (
    <>
      <Category
        fetchedData={fetchedData}
        filteredData={filteredData}
        category="earphones"
      />
    </>
  );
}

export default Earphones;
