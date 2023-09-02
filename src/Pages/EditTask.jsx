import { useLocation, useParams, useNavigate } from "react-router-dom";
import { EditInput, FormError } from "../Components";
import { useState } from "react";
import { EditContext } from "../Hooks";
import backIcon from '../Assets/Images/icons8-arrow-50.png';

export default function EditTask(){
    const location = useLocation();
    const {pos} = useParams()
    const {title, label, priority, assignee, desc} = location.state[pos]
    const navigate = useNavigate()
    // Error Logic
    const [isError, setIsError] = useState(false)
    //Store the data object input inside a usestate
    const [data, setIsData] = useState({
        title,
        label,
        priority,
        assignee,
        desc,
    })

    // Retrieve the tasks from local storage
    const getStorage = localStorage.getItem('Tasks');
    const storageArr = JSON.parse(getStorage)
    const taskDetailsData = storageArr[pos]
    // Function to store the updated data, update the local storage and navigate back home
    const updateTask =()=> {
        if(data.title === "" || data.label === "" || data.priority === "" || data.assignee === "" || data.desc === ""){
            setIsError(true)
            return setTimeout(()=> setIsError(false), 3000)
        }
        const updatedTask = {
            ...taskDetailsData,
            title: data.title,
            label: data.label,
            priority: data.priority,
            assignee: data.assignee,
            desc: data.desc,
        }
        // Remove the former data and replace with the updated data along with seting the error to false
        storageArr.splice(pos, 1, updatedTask);
        const updatedArrJson = JSON.stringify(storageArr);
        localStorage.setItem('Tasks', updatedArrJson);
        setIsError(false)
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