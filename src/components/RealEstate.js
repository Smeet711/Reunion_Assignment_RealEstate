import React, { useState } from "react";
import EstateCard from "./EstateCard";
import Navbar from "./Navbar";
import "./style.css";
import Realestate from "./EstateAPI";
import Filters from "./Filters";

const uniqueList = [
  ...new Set(
    Realestate.map((curElem) => {
      return curElem.price;
    })
  ),
  "All",
];

const uniqueTypeList = [
  ...new Set(
    Realestate.map((curElem) => {
      return curElem.type;
    })
  ),
  "All",
];

const RealEstate = () => {
  const [estateData, setestateData] = useState(Realestate);
  const [locationtext, setlocation] = useState("");
  const [pricelist] = useState(uniqueList);
  const [typelist] = useState(uniqueTypeList);
  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#333";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const filterprice = (price) => {
    if (price === "All") {
      setestateData(Realestate);
      return;
    }

    const updatedprice = Realestate.filter((curEle) => {
      return curEle.price === price;
    });

    setestateData(updatedprice);
  };

  //
  //

  const filtertype = (type) => {
    if (type === "All") {
      setestateData(Realestate);
      return;
    }

    const updatedtype = Realestate.filter((curEle) => {
      return curEle.type === type;
    });

    setestateData(updatedtype);
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Filters
        placeholder="Search Location"
        handleSearchLocation={setlocation}
        filterprice={filterprice}
        pricelist={pricelist}
        filtertype={filtertype}
        typelist={typelist}
      />

      <EstateCard
        estateData={estateData.filter((loca) =>
          loca.location.toLowerCase().includes(locationtext.toLowerCase())
        )}
      />
    </>
  );
};

export default RealEstate;
