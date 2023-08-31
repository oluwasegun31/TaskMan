import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../Assets/Images/icons8-completed-task-48.png';
import plusSign from '../Assets/Images/icons8-plus-48.png'
/**
 * RootLayout Component
 * 
 * This component represents the navigation bar of the application. It includes links to different routes
 * and includes an outlet component provided by React Router to enable the rest of the pages to also render.
*/

export default function RootLayout(){
    const navigate = useNavigate()
    return (
        <section>
            <header className="w-full">
                <nav className="max-w-[1400px] mx-auto flex justify-between items-center p-4">
                    <div className="font-ErodeSemibold text-[1.8rem] cursor-pointer flex justify-center items-center" onClick={()=> navigate('/')}>
                        <img 
                            src={logo} 
                            alt="logo"
                            className='w-8 h-8 object-cover mr-2'
                        />
                        <p className='sm:block hidden'>TaskyMan</p>
                    </div>
                    <div className='text-[1.3rem] font-ErodeMedium'>
                        <button
                            className='outline-0 bg-slate-600 px-2 py-1 text-white rounded-none flex justify-center items-center hover:bg-slate-500 hover:text-slate-100 transition-colors'
                            onClick={()=> navigate('create')}
                        >
                            <img src={plusSign} alt="plus" className='w-5 h-5 object-cover mr-3'/>
                            New Task
                        </button>
                    </div>
                </nav>
            </header>
            <main className='mt-1'>
                <Outlet />
            </main>
        </section>
    )
}