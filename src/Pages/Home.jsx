import { useEffect, useState } from "react";
import { DisplayCards, NoTask, FilterBtn } from "../Components";
import {FilterContext, CardContext} from "../Hooks";

export default function Home(){
    const [myArr] = useState(localStorage.getItem('Tasks') || [])
    const [isFilter, setIsFilter] = useState('all')
    useEffect(()=> {
        localStorage.setItem('Tasks', myArr)
    }, [myArr])

    const getStorage = localStorage.getItem('Tasks')
    const displayArr = getStorage ? JSON.parse(getStorage) : []

    const filterCard = displayArr.filter(item=> {
        return isFilter === 'bug' ? item.label === 'Bug' : isFilter === 'doc' ? item.label === 'Docs' : isFilter === 'feat' ? item.label === 'Feature' : item 
    })
    
    return(
        <div className="sm:px-6 px-3 py-1">
            <FilterContext.Provider value={{isFilter, setIsFilter}}>
                <FilterBtn />
            </FilterContext.Provider>
            {filterCard.length === 0 ?  <NoTask /> : 
                <section className="grid grid-cols-gridFluid mt-1 gap-5">
                    {filterCard.map((item, pos)=> {
                        return(
                            <CardContext.Provider value={{item, pos}} key={item.id}>
                                <DisplayCards/>
                            </CardContext.Provider>
                        )
                    })}
                </section> 
            }
        </div>
    )
}