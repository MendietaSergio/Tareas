import React, { useState } from 'react'

export default function useForm(initialState = {}) {
    const [formValues, setformValues] = useState(initialState)
    const handleInputChange = ({target}) =>{
        setformValues({
            ...formValues,
            [target.name] : target.value
        })
    }
    const reset = () => setformValues(initialState)
    return [formValues, handleInputChange, reset]
    //devuelvo los resultados
}
