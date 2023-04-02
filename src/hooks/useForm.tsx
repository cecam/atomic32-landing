import { useState } from 'react'

const useForm = (initialState = {}) => {
    const [ state, setState ] = useState(initialState);

    const isFieldValid = (fieldName:string, value:string) => {
        let stringRegex = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/g 
        let phoneRegex = /^[0-9]{10}$/

        switch(fieldName) {
            case 'name':                
                return  !value.match(stringRegex) && 'El nombre deberá tener mínimo 5 caracteres'
            case 'lastName':
                return !value.match(stringRegex) && 'Los apellidos deberán tener mínimo 5 caracteres'
            case 'phone':
                return value.match(phoneRegex) ? '' : 'Teléfono con formato incorrecto'
            case 'verification':
                return value.split('').length === 6 ? '' : 'El código debe contener 6 caracteres'
            default:
                return ''
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