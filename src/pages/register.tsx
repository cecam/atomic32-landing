import { useState, useEffect } from 'react';

import FormLayout from '@/components/layout/FormLayout'
import Form from '@/components/Form';

import useForm from '@/hooks/useForm';

import * as Configs from '@/utils/formConfigs.js'

const RegisterPage = () => {
    const stepState = useState(1);
    const [ currStep, ] = stepState;
    const [currConfig, setCurrConfig] = useState(Configs.knowYouCongif)
    const formState = useForm({
        name: '',
        lastName: ''
    });

    useEffect(() => {
        switch(currStep) {
            case 1:
                setCurrConfig(Configs.knowYouCongif);
                break;
            case 2:
                setCurrConfig(Configs.validateNumber);
                break;
            default:
                setCurrConfig(Configs.knowYouCongif)
        }
    }, [currStep])

    return (
        <FormLayout stepState={stepState} config={currConfig}>
             <Form formState={formState} config={currConfig} changeStep={stepState[1]} />

        </FormLayout>
    )
}

export default RegisterPage;