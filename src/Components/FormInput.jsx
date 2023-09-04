import labelIcon from '../Assets/Images/icons8-label-48.png';
import flagIcon from '../Assets/Images/icons8-flag-48.png';
import maleIcon from '../Assets/Images/icons8-male-50.png';
import descIcon from '../Assets/Images/icons8-handle-with-care-48.png';
/**
 * FormInput Component
 * 
 * This component renders the input fields and options for creating a new task.
 * It includes fields for task title, label, priority, assignee, and description.
 */
export function FormInput(){
    return(
        <>
        {/* Task Title */}
        <input 
                type="text" 
                name="title"
                placeholder="Task Title"
                className="w-full outline-none px-1 py-0 font-SupremeBold sm:text-[2rem] text-[1.5rem] text-slate-900 bg-inherit focus:border-b focus:border-b-slate-500 mb-4"
                maxLength={20}
        />
        {/* Task Label */}
        <div className='flex justify-center items-center mb-1'>
            <label htmlFor="select" className='flex justify-center items-center sm:text-[1.3rem] text-lg font-ErodeBold sm:mr-7 mr-3 text-slate-400'>
                <img 
                    src={labelIcon} 
                    alt="label" 
                    className='w-7 h-7 object-cover mr-3'
                />
                <p>add label:</p>
            </label>
            <select 
                id="selectInput" 
                name="label"
                className='sm:w-[10rem] w-[8.5rem] h-[3rem] sm:p-2 p-0 bg-transparent outline-none font-SupremeBold sm:text-[1.3rem] text-lg text-black cursor-pointer'
            >
                <option value="" className='bg-slate-500 text-white text-lg'>Select Label</option>
                <option value="Bug" className='bg-slate-500 text-white text-lg'>Bug</option>
                <option value="Docs" className='bg-slate-500 text-white text-lg'>Docs</option>
                <option value="Feature" className='bg-slate-500 text-white text-lg'>Feature</option>
            </select>
        </div>
        {/* Task Priority */}
        <div className='flex justify-center items-center mb-1'>
            <label htmlFor="select" className='flex justify-center items-center sm:text-[1.3rem] text-lg font-ErodeBold sm:mr-10 mr-5 text-slate-400'>
                <img 
                    src={flagIcon} 
                    alt="label" 
                    className='w-7 h-7 object-cover mr-3'
                />
                <p>Priority:</p>
            </label>
            <select 
                id="selectInput" 
                name="priority"
                className='sm:w-[11rem] w-[9.5rem] h-[3rem] sm:p-2 p-0 bg-transparent outline-none font-SupremeBold sm:text-[1.3rem] text-lg text-black cursor-pointer'
            >
                <option value="" className='bg-slate-500 text-white text-lg'>Select Priority</option>
                <option value="high" className='bg-slate-500 text-white text-lg'>High</option>
                <option value="medium" className='bg-slate-500 text-white text-lg'>Medium</option>
                <option value="low" className='bg-slate-500 text-white text-lg'>Low</option>
            </select>
        </div>
        {/* Task Assignee */}
        <div className='flex justify-center items-center mb-7'>
            <label htmlFor="select" className='flex justify-center items-center sm:text-[1.3rem] text-lg font-ErodeBold sm:mr-7 mr-5 text-slate-400'>
                <img 
                    src={maleIcon} 
                    alt="label" 
                    className='w-7 h-7 object-cover mr-3'
                />
                <p>Assignee:</p>
            </label>
            <select 
                id="selectInput" 
                name="assignee"
                className='sm:w-[12rem] w-[10.5rem] h-[3rem] sm:p-2 p-0 bg-transparent outline-none font-SupremeBold sm:text-[1.3rem] text-lg text-black cursor-pointer'
            >
                <option value="" className='bg-slate-500 text-white text-lg'>Select Assignee</option>
                <option value="oluwasegun" className='bg-slate-500 text-white text-lg'>Oluwasegun</option>
                <option value="charles" className='bg-slate-500 text-white text-lg'>Charles</option>
                <option value="arupi" className='bg-slate-500 text-white text-lg'>Arupi</option>
            </select>
        </div>
        {/* Description */}
        <div className='w-full flex flex-col justify-start items-start'>
            <label htmlFor="description" className='text-2xl font-ErodeBold text-slate-400 mb-3 flex justify-center items-center'>
                <img 
                    src={descIcon} 
                    alt="desc" 
                    className='w-7 h-7 object-cover mr-3'
                />
                <p>Task Description:</p>
            </label>
            <textarea name="description"
                className="resize-none w-full h-[300px] p-3 font-SupremeRegular sm:text-[22px] text-[16px] leading-[1] outline-none mb-7 bg-transparent border-l-2 border-l-slate-400 border-b-2 border-b-slate-700 rounded-none focus:border-l-slate-900"
            >
            </textarea>
        </div>
        {/* Submit button */}
        <button 
            type="submit" 
            className="bg-slate-800 text-white text-[18px] font-ErodeMedium px-3 py-2 outline-none"
        >
            ADD TASK
        </button>
        </>
    )
}