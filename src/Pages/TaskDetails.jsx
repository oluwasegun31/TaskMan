import { useLocation, useParams, useNavigate } from "react-router-dom";
import { DeleteModal, DetailNav, DetailsCard } from "../Components";
import { DetailContext } from "../Hooks";
import { useState } from "react";

/**
 * Task Details Component
 * 
 * This component displays the details of a specific task, including options to edit, delete and update task Completion.
 * (note that edit and delete buttons are yet to be implemented).
*/

export default function TaskDetails(){
    // Retrive the data passed during navigation
    const location = useLocation();
    const navigate = useNavigate();
    const taskDetails = location.state;
    const {pos} = useParams()

    // Retrieve the tasks from local storage
    const getStorage = localStorage.getItem('Tasks');
    const storageArr = JSON.parse(getStorage)
    const [isComplete, setIsComplete] = useState(storageArr[pos].isProgress)
    // Function to update the task completion status and local storage.
    const updateStorage = ()=> {
        setIsComplete(val => !val)
    }
    const newTaskDetails = {
        ...taskDetails,
        isProgress: isComplete
    }
    //Replacing the old progress with the new progress and updating the local storage
    storageArr.splice(pos, 1, newTaskDetails);
    const updatedArrJson = JSON.stringify(storageArr);
    localStorage.setItem('Tasks', updatedArrJson);
    // Function to determine the CSS class for the update button based on completion status.
    const updateBtn = (bol)=> {
        return bol ? 
        'bg-slate-400 text-slate-900' : 'bg-green-300 text-green-800'
    }
    // Function to delete a task by pos and navigating to home page
    const [isDelete, setIsDelete] = useState(false)
    const deleteTask =()=> {
        storageArr.splice(pos, 1);
        const updatedArrJson = JSON.stringify(storageArr);
        localStorage.setItem('Tasks', updatedArrJson);
        navigate('/');
    }

    return(
        <section className="w-full mt-3 md:px-6 px-2 relative">
            <DetailNav onClick={()=> setIsDelete(val => !val)}/>
            <DetailContext.Provider value={{taskDetails, isComplete}}>
                <DetailsCard />
            </DetailContext.Provider>
            <div className="mt-4">
                <button 
                    className={` text-lg font-SupremeBold py-1 px-3 cursor-pointer outline-none hover:text-white ${updateBtn(isComplete)} transition-all duration-1000`}
                    onClick={updateStorage}
                >
                    {isComplete ? `Close Task..`: `Open Task..`}
                </button>
            </div>
            {isDelete && <DeleteModal cancelClick={()=> setIsDelete(val=> !val)} deleteClick={()=> deleteTask()}/>}
        </section>
    )
}