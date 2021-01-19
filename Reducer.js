import { action } from './Actions'

export const initialState = {
    scaffoldings: [],
    total:{}
};

export const reducer = (state, event) => {
    switch (event.action) {
        case action.addScaffolding:
            return {
                ...state,
                scaffoldings: [...state.scaffoldings, event.payload],
            };
        default:
            return state;
    }
};
