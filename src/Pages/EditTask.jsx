import { useLocation, useParams, useNavigate } from "react-router-dom";
import { EditInput, FormError } from "../Components";
import { useState } from "react";
import { EditContext } from "../Hooks";
import backIcon from '../Assets/Images/icons8-arrow-50.png';
/**
 * EditTask Component
 * 
 * This component is responsible for editing an existing task. It retrieves task data from the location state and updates it. It provides a form for editing task details and handles form submission, updating the local storage and navigating back to the home page.
 */
export default function EditTask(){
    // Get task data from the location state and route parameters
    const location = useLocation();
    const {pos} = useParams()
    const {title, label, priority, assignee, desc} = location.state[pos]
    // Initialize React Router's navigate function
    const navigate = useNavigate()
    // Error handling
    const [isError, setIsError] = useState(false)
    // Store the task data in a state object
    const [data, setIsData] = useState({
        title,
        label,
        priority,
        assignee,
        desc,
    })

    // Retrieve tasks from local storage
    const getStorage = localStorage.getItem('Tasks');
    const storageArr = JSON.parse(getStorage)
    const taskDetailsData = storageArr[pos]
    // Function to update task data, update local storage, and navigate back to home
    const updateTask =()=> {
        // Validate if all fields are filled
        if(data.title === "" || data.label === "" || data.priority === "" || data.assignee === "" || data.desc === ""){
            setIsError(true)
            return setTimeout(()=> setIsError(false), 3000)
        }
        // Create an updated task object
        const updatedTask = {
            ...taskDetailsData,
            title: data.title,
            label: data.label,
            priority: data.priority,
            assignee: data.assignee,
            desc: data.desc,
        }
        // Replace the former data with the updated data and clear the error
        storageArr.splice(pos, 1, updatedTask);
        const updatedArrJson = JSON.stringify(storageArr);
        localStorage.setItem('Tasks', updatedArrJson);
        setIsError(false);
        // Navigate back to the home page
        return navigate('/')
    }
    return(
        <section className="w-full sm:px-6 px-2 mb-4">
            <div className="my-4">
                <img 
                    src={backIcon} 
                    alt="back" 
                    className="sm:w-8 w-6 sm:h-8 h-6 object-cover cursor-pointer"
                    onClick={()=> navigate(-1)}
                />
            </div>
            <form className="flex flex-col justify-start items-start">
                <EditContext.Provider value={{data, setIsData, updateTask}}>
                    <EditInput />
                </EditContext.Provider>
            </form>
            {isError && <FormError errorMessage={'All Field Must be Filled'}/>}
        </section>
        
    )
}