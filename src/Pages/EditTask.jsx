import { useLocation, useParams, useNavigate } from "react-router-dom";
import { EditInput } from "../Components";
import { useState } from "react";
import { EditContext } from "../Hooks";

export default function EditTask(){
    const location = useLocation();
    const {pos} = useParams()
    const {title, label, priority, assignee, desc} = location.state[pos]
    const navigate = useNavigate()
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
        const updatedTask = {
            ...taskDetailsData,
            title: data.title,
            label: data.label,
            priority: data.priority,
            assignee: data.assignee,
            desc: data.desc,
        }
        // Remove the former data and replace with the updated data
        storageArr.splice(pos, 1, updatedTask);
        const updatedArrJson = JSON.stringify(storageArr);
        localStorage.setItem('Tasks', updatedArrJson);
        return navigate('/')
    }
    return(
        <section className="w-full sm:p-8 p-2 mt-4">
            <form className="flex flex-col justify-start items-start">
                <EditContext.Provider value={{data, setIsData, updateTask}}>
                    <EditInput />
                </EditContext.Provider>
            </form>
        </section>
        
    )
}