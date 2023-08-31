import noTaskImg from '../Assets/Images/absurd.design - Chapter 1 - 04.png';

/**
 * NoTask Component
 * 
 * This component renders a display when no Task is input on first render or when all task is deleted.
 */
export default function NoTask(){
    return(
        <section className="w-full h-[80vh] flex lg:flex-row flex-col md:justify-start justify-center items-center">
                    <div className="lg:w-[50%] w-full flex justify-center items-center">
                        <img 
                            src={noTaskImg} 
                            alt="task" 
                            className="md:w-[350px] md:h-[350px] w-[250px] h-[250px] object-cover"
                        />
                    </div>
                    <div className="lg:w-[50%] w-full flex flex-col justify-center lg:items-start items-center">
                        <h3 className="font-SupremeExtrabold md:text-[3rem] text-2xl leading-[1] text-slate-700">NO TASK AVAILABLE</h3>
                        <p className="md:text-[28px] text-lg font-SupremeRegular text-slate-600 mt-3">Start By Adding a New Task👌🏽👌🏽</p>
                    </div>
        </section>
    )
}