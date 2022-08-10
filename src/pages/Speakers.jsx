import React, { useContext } from "react";
import { DataContext } from "../utilities/context";
import Category from "./Category";

function Speakers() {
  const { fetchedData } = useContext(DataContext);
  const filteredData = fetchedData
    .filter((unit) => unit.category == "speakers")
    .sort((a, b) => b.new - a.new);
  console.log(filteredData);
  return (
    <>
      <Category
        fetchedData={fetchedData}
        filteredData={filteredData}
        category="speakers"
      />
    </>
  );
}

export default Speakers;
