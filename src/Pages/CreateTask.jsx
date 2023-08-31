import { Form } from 'react-router-dom';
import { useActionData } from 'react-router-dom';
import {FormError, FormInput} from '../Components'
import { useEffect, useState } from 'react';

export default function CreateTask(){
    const data = useActionData(false)
    const[ isVisible, setIsVisible] = useState(false);
    const showError = ()=> {
        setIsVisible(true)
        setTimeout(()=> {
            setIsVisible(false)
        }, 3000)
    }
    useEffect(()=> {
        data && data.error && showError()
    }, [data])

    return(
        <section className="w-full sm:p-8 p-2 mt-4">
            <Form action='/create' method='post' className="flex flex-col justify-start items-start">
                <FormInput />
            </Form>
            {isVisible ? <FormError errorMessage={data.error}/> : null}
        </section>
    )
}