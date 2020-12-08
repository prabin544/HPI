import React, {createContext} from "react";

const InputContext = createContext({
  display: false,
  symptoms: "",
  Durations:"",
  Qualities:"",
  PainLevel:"",
  Radiations:"",
  AssSymps:"",
  Pallatives:"",
  Provocatives:"",
  Quantities: "",
});

export default InputContext;