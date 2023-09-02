import writeIcon from '../Assets/Images/icons8-pen-50.png';
import deleteIcon from '../Assets/Images/icons8-delete-50.png';
import backIcon from '../Assets/Images/icons8-arrow-50.png';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DetailNavContext } from '../Hooks';

export default function DetailNav({editClick}){
    const navigate = useNavigate()
    const navData = useContext(DetailNavContext);
    const {setIsDelete, storageArr} = navData;
    
    return(
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
                    onClick={()=> navigate('edit', {state: storageArr})}
                />
                <img 
                    src={deleteIcon} 
                    alt="delete" 
                    className="sm:w-10 w-7 sm:h-10 h-7 object-cover cursor-pointer"
                    onClick={()=> setIsDelete(val => !val)}
                />
            </div>
        </div>
    )
}