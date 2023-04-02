import { Dispatch, SetStateAction } from "react";

interface IProps {
    formState: {
        state: any,
        onFormChange: (event: any) => void,
        isFieldValid: (fieldName: string, value: string) => string | undefined | null,
    },
    config: {
        title: string,
        titleSpan: string,
        description: string,
        descriptionModal: JSX.Element,
        variableonDescription: string,
        step: number,
        loadingScreen?: boolean,
        backLink?: {
            LabelText: string,
            linkText: string,
            step: number,
        },
        fields: IInput[]
    },
    changeStep: Dispatch<SetStateAction<number>>,
    setShowSplash: Dispatch<SetStateAction<boolean>>
}

interface IInput {
    name: string,
    type: string,
    placeholder: string,
    label: string
}

const Form = ({formState, config, changeStep, setShowSplash}:IProps) => {
    const { state={}, onFormChange, isFieldValid } = formState;
    const {
        title,
        titleSpan,
        description,
        step,
        fields
    } = config;

    const onSubmit = (showSplash?:boolean, directionPage?:number) => {
        if(config.loadingScreen || showSplash) {
            setShowSplash(true)
        }
        changeStep((curr:number) =>  directionPage ? directionPage : curr +1 )
        
    }

    const renderInput = (input:IInput) => {
        switch(input.type) {
            case 'text':
                return (
                    <div key={input.name} className="py-5 flex flex-col w-1/2">
                        <label className="text-white text-lg tracking-wider mb-1" htmlFor={input.name}>{input.label}</label>
                        <input 
                            {...input} 
                            value={state[input.name]}
                            onChange={onFormChange}
                            className={`py-2 px-5 rounded-sm text-base focus:outline-0 
                                ${isFieldValid(input.name, state[input.name]) && state[input.name] && 'border-solid border-2 border-red-500 focus:border-4'}`}
                        />
                        {
                            state[input.name]
                            && <p className="text-red-500">{isFieldValid(input.name, state[input.name])}</p>                        
                        }
                    </div>
                )
            case 'checkbox':
                return(
                    <div key={input.name} className="py-5 flex items-center w-1/2">
                        <input 
                            {...input} 
                            value={state[input.name]}
                            onChange={onFormChange}
                            className={`w-6 h-6 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'}`}
                        />
                        <label htmlFor={input.name} className="text-white text-lg tracking-wider ml-2">{input.label}</label>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <>
            <header className="flex flex-col py-5">
                <div className="flex justify-start items-center gap-5">
                    <p className="bg-orange-600 text-white rounded-full p-3 px-5 text-lg">
                        {step}
                    </p>

                    <h1 className="text-4xl uppercase font-bold tracking-wide text-white">
                        {title} <span className="text-orange-600">{titleSpan}</span>
                    </h1>
                </div>

                <p className="text-2xl text-white font-light tracking-wider my-5">
                    {description} {config.variableonDescription && state[config.variableonDescription]}
                </p>

                {config.descriptionModal && config.descriptionModal}
            </header>
            
            {fields.map((field) => (
                renderInput(field)
            ))}

            {config.backLink?.step &&
                <div>
                    <p className="text-lg text-white">{config.backLink.LabelText} 
                        <span
                            onClick={() => onSubmit(true, config.backLink?.step)}
                            className="ml-3 font-bold cursor-pointer underline"
                        >{config.backLink.linkText}</span>
                    </p>
                </div>
            }

            <div className="grid place-items-end w-full mt-[10%]">
                <button 
                    onClick={() => onSubmit()}
                    className="rounded-full py-3 px-16 bg-orange-600 text-white"
                >
                    Enviar
                </button>
            </div>


        </>

    )    
}

export default Form;