import { useLocation, useNavigate } from "react-router-dom";
import writeIcon from '../Assets/Images/icons8-pen-50.png';
import deleteIcon from '../Assets/Images/icons8-delete-50.png';
import backIcon from '../Assets/Images/icons8-arrow-50.png';
import { DetailsCard } from "../Components";
import { DetailContext } from "../Hooks";

export default function TaskDetails(){
    const navigate = useNavigate()
    const location = useLocation();
    const taskDetails = location.state;
    return(
        <section className="w-full mt-3 md:px-6 px-2">
            <div className="flex justify-between items-center mb-3">
                <div>
                    <img 
                        src={backIcon} 
                        alt="back" 
                        className="sm:w-8 w-6 sm:h-8 h-6 object-cover cursor-pointer"
                        onClick={()=> navigate(-1)}
                    />
                </div>
                <div className="px-5 flex justify-start items-center">
                    <img 
                        src={writeIcon} 
                        alt="write" 
                        className="sm:w-10 w-7 sm:h-10 h-7 object-cover cursor-pointer mr-4"
                    />
                    <img 
                        src={deleteIcon} 
                        alt="delete" 
                        className="sm:w-10 w-7 sm:h-10 h-7 object-cover cursor-pointer"
                    />
                </div>
            </div>
            <DetailContext.Provider value={taskDetails}>
                <DetailsCard />
            </DetailContext.Provider>
            <div className="mt-4">
                <button className="bg-slate-400 text-lg font-SupremeBold py-1 px-3 cursor-pointer text-slate-900 outline-none">Done Task..</button>
            </div>
        </section>
    )
}