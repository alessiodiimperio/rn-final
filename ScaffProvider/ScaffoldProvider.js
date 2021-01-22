import React, { createContext, useContext, useReducer } from "react";
import {
    initialScaffoldState,
    reducer,
} from "./ScaffoldReducer";

const ScaffoldContext = createContext();

export const ScaffoldProvider = ({children}) => (
    <ScaffoldContext.Provider value={useReducer(reducer, initialScaffoldState)}>
        {children}
    </ScaffoldContext.Provider>
);

export const useScaffold = () => useContext(ScaffoldContext);
