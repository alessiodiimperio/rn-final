import { useReducer } from "react";
import { field } from "../Actions";

const initialFormState = {
    title: null,
    titleError: null,
    validTitle: false,
    height: null,
    heightError: null,
    validHeight: false,
    width: null,
    validWidth: false,
    widthError: null,
    stairs: false,
    ladders: false,
};

const reducer = (state, event) => {
    let height;
    let parsedHeight;
    let validHeight;
    let heightErrorMsg;
    let width;
    let parsedWidth;
    let validWidth;
    let widthErrorMsg;

    switch (event.change) {
        case field.title:
            const title = event.payload;
            const titleErrorMsg = title ? null : "Title is required";
            const validTitle = titleErrorMsg ? false : true;

            return {
                ...state,
                title,
                titleError: titleErrorMsg,
                validTitle,
            };

        case field.height:
            height = event.payload;
            parsedHeight = parseInt(height);
            heightErrorMsg =
                parsedHeight > 1 && parsedHeight < 11
                    ? null
                    : "Height must be a number between 2-10m";
            validHeight = heightErrorMsg ? true : false;
            return {
                ...state,
                height,
                heightError: heightErrorMsg,
                validHeight,
            };
        case field.adjustHeight:
            height = event.payload;
            parsedHeight = parseInt(height);
            heightErrorMsg =
                parsedHeight > 1 && parsedHeight < 11
                    ? null
                    : "Height must be a number between 2-10m";
            validHeight = heightErrorMsg ? true : false;
            if (!isNaN(parsedHeight)) {
                let refactoredHeight;
                if (parsedHeight < 2) {
                    refactoredHeight = 2;
                } else if (parsedHeight > 10) {
                    refactoredHeight = 10;
                } else {
                    refactoredHeight = parsedHeight;
                }
                return {
                    ...state,
                    height: refactoredHeight.toString(),
                    heightError: null,
                    validHeight: true,
                };
            } else {
                return {
                    ...state,
                    height: "2",
                    heightError: null,
                    validHeight: true,
                };
            }
        case field.width:
            width = event.payload;
            parsedWidth = parseFloat(width);
            widthErrorMsg =
                parsedWidth > 2 && parsedWidth < 31
                    ? null
                    : `${width} is not valid input`;
            validWidth = widthErrorMsg ? false : true;

            return { ...state, widthError: widthErrorMsg, width };
        case field.adjustWidth:
            width = event.payload;

            let parsedWidth = parseFloat(width);
            widthErrorMsg =
                parsedWidth >= 3 && parsedWidth < 31
                    ? null
                    : `${width} is not valid input`;
            validWidth = widthErrorMsg ? false : true;

            if (!isNaN(parsedWidth)) {
                let refactoredWidth;
                if (parsedWidth < 3.07) {
                    refactoredWidth = 3.07;
                } else if (parsedWidth > 30.7) {
                    refactoredWidth = 30.7;
                } else {
                    refactoredWidth = Math.ceil(parsedWidth / 3.07) * 3.07;
                }
                return {
                    ...state,
                    width: refactoredWidth.toString(),
                    validWidth: true,
                    widthError: null,
                };
            } else {
                return {
                    ...state,
                    width: "3.07",
                    validWidth: true,
                    widthError: null,
                };
            }
        case field.stairs:
            return { ...state, stairs: !state.stairs };
        case field.ladders:
            return { ...state, ladders: !state.ladders };
        case field.titleError:
            return { ...state, titleError: event.titleError };
        default:
            return state;
    }
};

export const useForm = () => useReducer(reducer, initialFormState);
