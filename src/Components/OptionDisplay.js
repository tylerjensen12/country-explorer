import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayCountry } from "./redux/slices/displayCountrySlice";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";

const OptionDisplay = () => {
  let currentPotentials = useSelector(selectPotentials);
  const dispatch = useDispatch();
  return (
    <div className="stack">
      {currentPotentials.map((event, i) => {
        return (
          <h2
            key={event.name.official}
            className="country-option"
            onClick={() => {
              dispatch(setDisplayCountry(currentPotentials[i]));
            }}
          >
            {event.name.common}
          </h2>
        );
      })}
    </div>
  );
};

export default OptionDisplay;
