import statusIcon from '../Assets/Images/icons8-status-50.png';
import labelIcon from '../Assets/Images/icons8-tags-50.png';
import priorityIcon from '../Assets/Images/icons8-priority-50.png';
import timeIcon from '../Assets/Images/icons8-watches-front-view-50.png';
import personIcon from '../Assets/Images/icons8-person-50.png';
import descIcon from '../Assets/Images/icons8-details-50.png';
import user1Icon from '../Assets/Images/arupi.jpg';
import user2Icon from '../Assets/Images/charlie.jpg';
import user3Icon from '../Assets/Images/segs.jpg';
import { useContext } from 'react';
import { DetailContext } from '../Hooks';
/**
 * Details Card Component
 * 
 * This component displays detailed information about a task, including its title, status, label, priority, assignee, time, day, and description.
*/

export default function DetailsCard(){
    //Retrive the data from the context hook
    const detailData = useContext(DetailContext);
    const {taskDetails, isComplete} = detailData
    const {title, label, priority, assignee, time, day, desc} = taskDetails;
    // Function to display task progress status.
    const checkIsProgress = (bol)=> {
        return bol ? 'In Progress...' : 'Completed..' 
    }
    // Function to apply styling based on progress status
    const isProgressStyle = (bol)=> {
        return bol ?  'bg-yellow-100 text-yellow-700' : 'bg-green-300 text-green-900'
    }
    // Function to determine the CSS class for the priority.
    const checkPriority = (str)=> {
        return str === 'high' ? 'bg-red-200 text-red-800' : str === 'medium' ? 'bg-orange-200 text-orange-800' : 'bg-blue-200 text-blue-800'
    }
    // Function to determine the user icon.
    const checkUser = (str)=> {
        return str === 'oluwasegun' ? user3Icon : str === 'arupi' ? user1Icon : user2Icon
    }

    
    return(
        <section>
            <h2 className="font-SupremeBold md:text-[3rem] text-3xl leading-[1]">{title}</h2>
            <div className="flex justify-start items-center mt-4">
                <div className="flex justify-start items-center sm:mr-12 mr-6">
                    <img 
                        src={statusIcon} 
                        alt="status" 
                        className="sm:w-7 w-5 sm:h-7 h-5 object-cover"
                    />
                    <p className="sm:text-lg text-base font-SupremeRegular text-slate-500">Status:</p>
                </div>
                <p className={`sm:px-4 px-2 py-[2px] rounded-full sm:text-base text-sm font-SupremeMedium ${isProgressStyle(isComplete)} transition-all duration-1000`}>{checkIsProgress(isComplete)}</p>
            </div>
            <div className="flex justify-start items-center mt-4">
                <div className="flex justify-start items-center sm:mr-14 mr-8">
                    <img 
                        src={labelIcon} 
                        alt="status" 
                        className="sm:w-7 w-5 sm:h-7 h-5 object-cover"
                    />
                    <p className="sm:text-lg text-base font-SupremeRegular text-slate-500">Label:</p>
                </div>
                <p className="sm:px-4 px-2 py-[2px] bg-blue-200 rounded-full sm:text-base text-sm font-SupremeMedium text-blue-800">{label}</p>
            </div>
            <div className="flex justify-start items-center mt-4">
                <div className="flex justify-start items-center sm:mr-11 mr-5">
                    <img 
                        src={priorityIcon} 
                        alt="status" 
                        className="sm:w-7 w-5 sm:h-7 h-5 object-cover"
                    />
                    <p className="sm:text-lg text-base font-SupremeRegular text-slate-500">Priority:</p>
                </div>
                <p className={`sm:px-4 px-2 py-[2px] rounded-full sm:text-base text-sm font-SupremeMedium ${checkPriority(priority)}`}>{priority}</p>
            </div>
            <div className="flex justify-start items-center mt-4">
                <div className="flex justify-start items-center sm:mr-11 mr-6">
                    <img 
                        src={timeIcon} 
                        alt="status" 
                        className="sm:w-7 w-5 sm:h-7 h-5 object-cover"
                    />
                    <p className="sm:text-lg text-base font-SupremeRegular text-slate-500">Time:</p>
                </div>
                <p className="sm:px-4 px-2 py-[2px] rounded-full sm:text-base text-sm font-SupremeMedium ">{time} - {day}</p>
            </div>
            <div className="flex justify-start items-center mt-4">
                <div className="flex justify-start items-center sm:mr-9 mr-4">
                    <img 
                        src={personIcon} 
                        alt="status" 
                        className="sm:w-7 w-5 sm:h-7 h-5 object-cover"
                    />
                    <p className="sm:text-lg text-base font-SupremeRegular text-slate-500">Assignee:</p>
                </div>
                <div className='flex justify-start items-center'>
                    <img 
                        src={checkUser(assignee)} 
                        alt="user"  
                        className="sm:w-10 w-7 sm:h-10 h-7 object-cover rounded-full mr-2"
                    />
                    <p className='sm:text-lg text-base font-SupremeMedium'>{assignee}</p>
                </div>
            </div>
            <div className="mt-3 flex flex-col justify-start items-start">
                <div className="flex justify-start items-center border-b border-b-slate-300 w-full pb-3 mb-3">
                    <img src={descIcon} alt="desc" className="sm:w-7 w-5 sm:h-7 h-5 object-cover"/>
                    <p className="sm:text-2xl text-lg font-SupremeRegular text-slate-500">Task description</p>
                </div>
                <p className="font-SupremeRegular text-lg leading-[1.3]">{desc}</p>
            </div>
        </section>
    )
}