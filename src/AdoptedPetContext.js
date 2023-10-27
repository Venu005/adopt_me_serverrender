/* showing the usage of context */
/* use context only if the state you gonna pass is cared about by each and every page */
import { createContext } from "react";

const AdoptedPetContext = createContext({/*default context goes here but not used*/});
export default AdoptedPetContext;
