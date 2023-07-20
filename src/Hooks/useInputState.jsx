import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export default (initialVal) => {
  const [value, setValue] = useState(initialVal);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};
