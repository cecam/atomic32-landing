import { useState } from 'react'

const useForm = (initialState = {}) => {
    const [ state, setState ] = useState(initialState);
    const [ errors, setErrors] = useState(() => {
        return Object.keys(state)
    })

    const isFieldValid = (fieldName:string, value:string) => {
        switch(fieldName) {
            case 'name':
            case 'lastName':
               let stringRegex = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/g 
               console.log(value.match(stringRegex));
               
               return value.match(stringRegex)
        }
    }

    const onFormChange = (event:any) => {
        setState({
            ...state,
            [event.target.name] : event.target.value
        })
    }

    return { state, onFormChange, isFieldValid }
}

export default useForm;