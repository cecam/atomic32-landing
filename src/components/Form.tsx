import { Dispatch, SetStateAction } from "react";

interface IProps {
    formState: {
        state: any,
        onFormChange: (event: any) => void,
        isFieldValid: (fieldName: string, value: string) => RegExpMatchArray | null | undefined,
    },
    config: {
        title: string,
        titleSpan: string,
        description: string,
        step: number,
        fields: {
            name: string,
            type: string,
            placeholder: string,
            label: string
        }[]
    },
    changeStep: Dispatch<SetStateAction<number>>
}

const Form = ({formState, config, changeStep}:IProps) => {
    const { state={}, onFormChange, isFieldValid } = formState;
    const {
        title,
        titleSpan,
        description,
        step,
        fields
    } = config;

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

                <p className="text-2xl text-white font-light tracking-wider my-5">{description}</p>
            </header>
            
            {fields.map((field) => (
                <div key={field.name} className="py-5 flex flex-col w-1/2">
                    <label className="text-white text-lg tracking-wider mb-1" htmlFor={field.name}>{field.label}</label>
                    <input 
                        {...field} 
                        value={state[field.name]}
                        onChange={onFormChange}
                        className={`py-2 px-5 rounded-sm text-base focus:outline-0 
                            ${!isFieldValid(field.name, state[field.name]) && state[field.name] && 'border-solid border-2 border-red-500 focus:border-4'}`}
                    />
                    {
                        !isFieldValid(field.name, state[field.name]) && state[field.name]
                        && <p className="text-red-500">{field.label} inválido</p>
                        
                    }
                </div>
            ))}

            <div className="grid place-items-end w-full mt-[10%]">
                <button 
                    onClick={() => changeStep((curr:number) =>  curr +1 )}
                    className="rounded-full py-3 px-16 bg-orange-600 text-white"
                >
                    Enviar
                </button>
            </div>


        </>

    )    
}

export default Form;