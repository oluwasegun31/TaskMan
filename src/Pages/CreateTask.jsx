import { Form } from 'react-router-dom';
import { useActionData } from 'react-router-dom';
import {FormError, FormInput} from '../Components'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from '../Assets/Images/icons8-arrow-50.png';
/**
 * CreateTask Component Page
 * 
 * This component renders a form for creating a new task. It uses React Router for navigation and manages form data with some error handling.
*/
export default function CreateTask(){
    // Fetch data for action
    const data = useActionData(false)
    // State for controlling error visibility
    const[ isVisible, setIsVisible] = useState(false);
    // React Router's navigate function for navigation
    const navigate = useNavigate()
    // Function to show error message and hide it after 3 seconds
    const showError = ()=> {
        setIsVisible(true)
        setTimeout(()=> {
            setIsVisible(false)
        }, 3000)
    }
    // Use useEffect to check for data and display error if needed
    useEffect(()=> {
        data && data.error && showError()
    }, [data])

    return(
        <section className="w-full sm:px-8 px-2 my-4">
            <div className="md:mb-5 mb-2">
                <img 
                    src={backIcon} 
                    alt="back" 
                    className="sm:w-8 w-6 sm:h-8 h-6 object-cover cursor-pointer"
                    onClick={()=> navigate(-1)}
                />
            </div>
            <Form action='/create' method='post' className="flex flex-col justify-start items-start">
                <FormInput />
            </Form>
            {isVisible ? <FormError errorMessage={data.error}/> : null}
        </section>
    )
}