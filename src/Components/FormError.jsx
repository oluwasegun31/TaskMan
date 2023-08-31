import closeIcon from '../Assets/Images/icons8-close.svg';
/**
 * FormError Component
 * 
 * This component displays an error mesage when certain conditions are not met
 * 
 */
export default function FormError({errorMessage}){
    return(
        <section className='sm:w-[300px] w-[250px] h-[50px] bg-red-400 border-l-8 border-l-red-800 flex justify-start items-center font-SupremeBold sm:text-lg text-[16px] text-white absolute top-20 right-5 z-50'>
            <img 
                src={closeIcon} 
                alt="close" 
                className='w-7 h-7 sm:mx-5 mx-2'
            />
            <p>{errorMessage}</p>
        </section>
    )
}