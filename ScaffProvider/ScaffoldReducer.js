import { action } from "../Actions";

export const initialScaffoldState = {
    scaffoldings: [],
};

export const reducer = (state, event) => {
    switch (event.action) {
        case action.initialize:
            const fetchedScaffoldings = event.payload;
            return { ...state, scaffoldings: fetchedScaffoldings };
        default:
            return state;
    }
};
