import React, { useState } from 'react'
export const useForm(initialValue = {}){

    const [state, stateHandler] = useState(initialValue)

    const formInput = (input) => {
        stateHandler({input})
    }
    return [state, formInput]
}