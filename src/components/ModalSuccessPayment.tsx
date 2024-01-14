import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const ModalSuccessPayment: FC<Props> = () => {
    return (
        <>
            <div className='backdrop-blur-sm w-full h-full fixed inset-0 z-50 flex-center flex-col overflow-hidden'>
                <div className='w-10/12 sm:w-6/12 lg:w-3/12 bg-white rounded-2xl px-10 pt-12 pb-16 flex-col-center space-y-10'>
                    <svg width="120" height="120" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="40" cy="40" r="30" fill="#FFD93D" />
                        <path d="M23.3335 43.3333L33.3335 53.3333L56.6668 30" stroke="white" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span className='text-chocolate font-semibold text-xl sm:text-2xl text-center'>Payment <span className='text-yellow-w'>Successfully</span></span>
                    <span className='text-chocolate/50 text-xs'>TRANSACTION ID <span className='text-chocolate font-semibold'>#2404241945</span></span>
                    <Link to='/detail/minecraft' className='btn-primary bg-yellow-w rounded-full text-white text-center text-base sm:text-lg'>Done Ga Bang?</Link>
                </div>
            </div>
        </>
    );
}

export default ModalSuccessPayment;