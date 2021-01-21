import React, { createContext, useContext, useReducer } from "react";

export const ScaffoldContext = createContext();

export const ScaffoldProvider = ({ reducer, initialState, children }) => (
    <ScaffoldContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </ScaffoldContext.Provider>
);

export const useScaffold = () => useContext(ScaffoldContext);
