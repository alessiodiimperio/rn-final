import { action } from "./Actions";

export const initialState = {
    scaffoldings: [],
    total: {},
};

export const reducer = (state, event) => {
    switch (event.action) {
        case action.addScaffolding:
            return {
                ...state,
                scaffoldings: [...state.scaffoldings, event.scaffold],
            };
        case action.deleteScaffolding:
            const mutableScaffoldings = state.scaffoldings.slice();
            const mutatedScaffoldings = mutableScaffoldings.filter(
                (scaffold) => scaffold.id != event.id
            );
            return { ...state, scaffoldings: mutatedScaffoldings };
        default:
            return state;
    }
};
