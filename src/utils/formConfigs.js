import TermsAndContionModal from "@/components/TermsAndConditionModal"

export const knowYouCongif = {
    title: 'te queremos',
    titleSpan: 'conocer',
    description: 'Queremos saber que eres tú, por favor ingresa los siguientes datos:',
    image: '/atomic/a-1.png',
    step: 1,
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
    loadingScreen: true,
    image: '/atomic/a-2.png',
    step: 2,
    fields: [
        {
            name: 'phone',
            type: 'text',
            placeholder: 'Ej: 7226549912',
            label: 'Número de celular',
        },
    ]
}

export const numberVerification = {
    title: 'código de',
    titleSpan: 'verificación',
    description: 'Te enviamos un SMS al número:',
    variableonDescription: 'phone',
    image: '/atomic/a-2.png',
    step: 3,
    backLink: {
        LabelText: '¿No recibiste el código?',
        linkText: 'Reenviar Código',
        step: 3,
    },
    fields: [
        {
            name: 'verification',
            type: 'text',
            placeholder: 'Ej: 123456',
            label: 'Código de verificación',
        },
    ]
}

export const poitics = {
    title: 'términos y ',
    titleSpan: 'condiciones',
    description: 'Por favor revisa nuestros términos y condifiones para este servicio:',
    descriptionModal: <TermsAndContionModal />,
    image: '/atomic/a-3.png',
    step: 4,
    fields: [
        {
            name: 'politics',
            type: 'checkbox',
            placeholder: '',
            label: 'Acepto los términos y condiciones',
        },
    ]
}