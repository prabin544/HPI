// import React, {createContext} from "react";

// const InputContext = createContext({
//   display: false,
//   symptoms: symptomInput,
//   Durations:"",
//   Qualities:qualityInput,
//   Radiations:radiationInput,
//   AssSymps:assSympInput,
//   Pallatives:pallativeInput,
//   Provocatives:provocativeInput,
//   Quantities: qunatityInput,
// });

// export default InputContext;
import React from 'react'
const InputContext = React.createContext({})
export const InputProvider = InputContext.Provider
export default InputContext
