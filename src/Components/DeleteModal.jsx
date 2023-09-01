import deleteIcon from '../Assets/Images/icons8-delete-50.png';
/**
 * Delete Modal  Component
 * 
 * This component displays the delete modal and it is made up of 2 onClick props the cancel button and the delete button.
*/

export default function DeleteModal({cancelClick, deleteClick}){
    return(
        <aside className="w-full h-[100vh] bg-[#dadada67] fixed top-0 left-0 flex justify-center items-center modalAni">
            <div className="sm:w-[450px] w-[85%] sm:h-[300px] h-auto bg-white z-50 flex flex-col justify-start items-center sm:p-5 p-3 text-center">
                <img src={deleteIcon} alt="delete" className="sm:w-16 w-12 sm:h-16 h-12 object-cover"/>
                <p className="font-ErodeSemibold sm:text-3xl text-[20px] leading-[1] my-4">You are about to delete a task</p>
                <p className="leading-[1] text-slate-400 font-SupremeRegular sm:text-lg text-base">This will delete the task from your storage permanently. Are you sure?</p>
                <div className="mt-6 sm:text-lg text-base font-SupremeBold">
                    <button className="mr-8 cursor-pointer outline-none" onClick={cancelClick}>Cancel</button>
                    <button className="bg-slate-800 text-white py-1 sm:px-3 px-2 outline-none" onClick={deleteClick}>Delete</button>
                </div>
            </div>
        </aside>
    )
}