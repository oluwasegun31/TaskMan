import { useContext } from "react";
import { CardContext } from "../Hooks/CardContext";
import priorityHigh from '../Assets/Images/icons8-high-priority-64.png';
import priorityMed from '../Assets/Images/icons8-medium-priority-64.png';
import priorityLow from '../Assets/Images/icons8-low-priority-64.png';
import user1 from '../Assets/Images/arupi.jpg';
import user2 from '../Assets/Images/charlie.jpg';
import user3 from '../Assets/Images/segs.jpg';
/**
 * DisplayCards Component
 * 
 * This component displays individual task cards with information such as title, label, priority, assignee, time,day and every data from local storage. It utilizes data from the CardContext.
 * 
 */
export default function DisplayCards({ labelIcon, taskPic }){
    // Function to truncate a string to a maximum of 15 characters
    const truncateStr = (str)=> {
        return str.length < 15 ? str : str.slice(0, 15) + '...' 
    }
    // Function to change label icon based on priority
    const changeLabel = (str)=> {
        return str === 'high' ? priorityHigh : str === 'medium' ? priorityMed : priorityLow
    }
    // Function to change user image based on assignee
    const changeUser = (str)=> {
        return str === 'oluwasegun' ? user3 : str === 'arupi' ? user1 : user2
    }
    // Access data from the CardContext
    const data = useContext(CardContext);
    const {item, pos} = data
    const {title, label, time, day, bgColor, priority, assignee} = item

    return(
        <div className="w-full md:h-[250px] h-[230px] flex flex-col justify-start items-start p-5 cursor-pointer relative gridItems transition-all duration-700 hover:top-[-5px]" style={{backgroundColor: bgColor}} onClick={()=> console.log(item, pos)}>
            <img 
                src={changeLabel(priority)} 
                alt="label" 
                className="w-8 h-8 object-cover mb-6"
            />
            <p className="font-SupremeBold text-3xl mb-1">{truncateStr(title)}</p>
            <p className="font-SupremeRegular text-lg">{label}</p>
            <div className="w-full flex justify-end">
                <img 
                    src={changeUser(assignee)} 
                    alt="task" 
                    className="w-10 h-10 rounded-full object-cover"
                />
            </div>
            <p className="font-SupremeMedium text-lg absolute bottom-4 left-4">{time} {day}</p>
        </div>
    )
}