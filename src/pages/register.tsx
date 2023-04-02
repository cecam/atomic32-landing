import { useState, useEffect } from 'react';

import FormLayout from '@/components/layout/FormLayout'
import Form from '@/components/Form';
import SplashScreen from '@/components/SplashScreen';

import useForm from '@/hooks/useForm';

import * as Configs from '@/utils/formConfigs.js'

const RegisterPage = () => {
    const stepState = useState(1);
    const [ currStep, ] = stepState;
    const [ showSplash, setShowSplash ] = useState(false);
    const [currConfig, setCurrConfig] = useState(Configs.knowYouCongif)
    const formState = useForm({
        name: '',
        lastName: '',
        phone: '',
        verification: ''
    });

    useEffect(() => {
        switch(currStep) {
            case 1:
                setCurrConfig(Configs.knowYouCongif);
                break;
            case 2:
                setCurrConfig(Configs.validateNumber);
                break;
            case 3:
                setCurrConfig(Configs.numberVerification);
                break;
            case 4:
                setCurrConfig(Configs.poitics);
                break;
            default:
                setCurrConfig(Configs.knowYouCongif)
        }
    }, [currStep])

    return (
        <div>
            <FormLayout stepState={stepState} config={currConfig}>
                <Form 
                    formState={formState} 
                    config={currConfig} 
                    changeStep={stepState[1]} 
                    setShowSplash={setShowSplash} 
                />
            </FormLayout>
            <SplashScreen show={showSplash} setShowSplash={setShowSplash} />
        </div>
    )
}

export default RegisterPage;