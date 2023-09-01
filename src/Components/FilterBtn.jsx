import { useContext } from "react"
import FilterContext from "../Hooks/FilterContext"
/**
 * Filter Button Component
 * 
 * This component represents the filter buttons for task filtering. It utilizes the FilterContext to manage the current filter state and apply active styling to the selected filter button.
*/
export default function FilterBtn(){
    const filterData = useContext(FilterContext);
    const {isFilter, setIsFilter} = filterData
    // Function to determine the active style for a button.
    const activeStyle = ()=> {
        return 'font-SupremeBold border-b-2 border-b-slate-900' 
    }


    return(
        <section className="w-full grid grid-flow-col sm:gap-6 gap-3 justify-start items-center border-b border-b-slate-500 font-SupremeRegular opacity-70 sm:text-2xl text-lg px-3">
                <button 
                    className={`outline-none hover:font-SupremeBold p-1 rounded-none ${isFilter === 'all' ? activeStyle() : ''}`} 
                    onClick={()=> setIsFilter('all')}
                >All</button>
                <button 
                    className={`outline-none hover:font-SupremeBold p-1 rounded-none ${isFilter === true ? activeStyle() : ''}`}
                    onClick={()=> setIsFilter(true)}
                >Open</button>
                <button 
                    className={`outline-none hover:font-SupremeBold p-1 rounded-none ${isFilter === false ? activeStyle() : ''}`} 
                    onClick={()=> setIsFilter(false)}
                >Closed</button>
        </section>
    )
}