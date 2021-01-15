import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
export const mockState = {
    scaffoldings: [
        {
            id: uuidv4(),
            title: "Front",
            parts: [],
        },
        {
            id: uuidv4(),
            title: "Back",
            parts: [],
        },
        {
            id: uuidv4(),
            title: "Left",
            parts: [],
        },
        {
            id: uuidv4(),
            title: "Right",
            parts: [],
        },
    ],
};
