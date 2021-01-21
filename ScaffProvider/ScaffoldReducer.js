import { action } from "../Actions";

export const initialScaffoldState = {
    scaffoldings: [],
};

export const reducer = (state, event) => {
    switch (event.action) {
        case action.addScaffolding:
            const scaffold = event.payload;
            return {
                ...state,
                scaffoldings: [...state.scaffoldings, scaffold],
            };
        case action.deleteScaffolding:
            const id = event.payload;
            const mutatedScaffoldings = state.scaffoldings.filter(
                (scaffold) => scaffold.id != id
            );
            return { ...state, scaffoldings: mutatedScaffoldings };
        default:
            return state;
    }
};
