import notFoundImg from '../Assets/Images/notfound.png';
import { useNavigate } from 'react-router-dom';
export default function NotFound(){
    const navigate = useNavigate()
    return(
        <section className="w-full h-[85vh] md:p-5 p-2 flex lg:flex-row flex-col lg:justify-start justify-center items-center">
            <div className='lg:w-[45%] w-full lg:h-full h-auto flex justify-center items-center'>
                <img 
                    src={notFoundImg} 
                    alt="notFound" 
                    className='lg:w-[350px] w-[200px] lg:h-[350px] h-[200px] object-cover'
                />
            </div>
            <div className='lg:w-[55%] w-full flex flex-col lg:justify-start justify-center lg:items-start items-center text-center'>
                <h3 className='font-ErodeBold md:text-[12rem] text-[5rem] leading-[1]'>404</h3>
                <p className='font-SupremeBold sm:text-5xl text-3xl leading-[1]'>Looks like you've lost</p>
                <p className='font-SupremeMedium md:text-lg text-base text-gray-500'>the page you're looking for is not available!</p>
                <button className='bg-slate-800 text-slate-400 px-3 py-3 font-SupremeMedium text-lg cursor-pointer outline-none mt-3' onClick={()=> navigate('/')}>
                    Go to Homepage
                </button>
            </div>
        </section>
    )
}