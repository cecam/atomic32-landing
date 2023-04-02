export const knowYouCongif = {
    title: 'te queremos',
    titleSpan: 'conocer',
    description: 'Queremos saber que eres tú, por favor ingresa los siguientes datos:',
    step: 1,
    image: '/atomic/a-1.png',
    fields: [
        {
            name: 'name',
            type: 'text',
            placeholder: 'Ej: Celso',
            label: 'Nombre(s)',
        },
        {
            name: 'lastName',
            type: 'text',
            placeholder: 'Ej: Cardenas Macías',
            label: 'Apellidos',
        },
    ]
}

export const validateNumber = {
    title: 'valida tu',
    titleSpan: 'celular',
    description: 'Necesitamos validar tu número para continuar. Ingresa tu número de 10 dígitos y te enviaremos un código SMS',
    step: 2,
    image: '/atomic/a-2.png',
    fields: [
        {
            name: 'phone',
            type: 'text',
            placeholder: 'Ej: 7226549912',
            label: 'Número de celular',
        },
    ]
}