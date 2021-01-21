import React, { useContext, createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const initialState = {
        uid: null,
    };
    const [state, setState] = useState(initialState);
    return (
        <UserContext.Provider value={[state, setState]}>
            {children}
        </UserContext.Provider>
    );
};
export const useUser = () => useContext(UserContext);
