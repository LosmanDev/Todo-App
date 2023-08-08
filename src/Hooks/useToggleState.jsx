import { useState } from "react";

//Accept an inital value, default value of false
const useToggle = (initialVal = false) => {
  //Call useState
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState(!state);
  };

  //Return piece of state AND a function to toggle it
  return [state, toggle];
};

export default useToggle;
