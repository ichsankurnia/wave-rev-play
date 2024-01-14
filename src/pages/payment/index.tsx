import { FC, useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import ModalSuccessPayment from '@/components/ModalSuccessPayment';
import PageLoading from '@/components/PageLoading';

type Props = {};

const PaymentPage: FC<Props> = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccessPayment, setIsSuccessPayment] = useState(false)

    const navigate = useNavigate()

    const toRef = useRef<any>(null)

    const handleSuccessPayment = () => {
        setIsLoading(true)
        toRef.current = setTimeout(() => {
            setIsSuccessPayment(true)
            setIsLoading(false)
        }, 3000);
    }

    useEffect(() => {
        return clearTimeout(toRef.current)
    }, [])

    return (
        <>
            <div className='flex-col-center'>
                <div className='w-full max-w-[1200px]'>
                    <Header className='hidden sm:flex' />

                    <div className='flex flex-row sm:mt-6 lg:mt-8 sm:pb-10'>
                        <div className='hidden lg:block mr-5'>
                            <SideMenu />
                        </div>

                        {/* FEED */}
                        <div className='w-full relative bg-chocolate sm:rounded-2xl text-chocolate px-5 sm:px-0'>
                            <div className='h-40 sm:h-52 w-full sm:rounded-t-2xl flex-center'>
                                <h1 className='text-yellow-w text-3xl sm:text-4xl font-bold'>Wave <span className='text-white'>Payment</span></h1>
                            </div>
                            <i className="ti ti-arrow-narrow-left absolute text-white top-3 left-5 text-4xl sm:hidden" onClick={() => navigate(-1)}></i>

                            <div className='w-full space-y-5 sm:space-y-8'>
                                <hr className='border-white w-8/12 mx-auto' />
                                <div className='w-8/12 mx-auto flex flex-col divide-y divide-chocolate'>
                                    <div className='h-14 flex-col-center rounded-t-xl bg-yellow-w'>
                                        <p className='text-xs'>Total</p>
                                        <p className='font-bold'>Rp 169.000</p>
                                    </div>
                                    <div className='h-14 flex-col-center bg-[#D9D9D9]'>
                                        <p className='text-xs'>Buy at</p>
                                        <p className='font-bold'>Wave Revplay</p>
                                    </div>
                                    <div className='h-14 flex-col-center bg-[#D9D9D9] rounded-b-xl'>
                                        <p className='text-xs'>Games</p>
                                        <p className='font-bold text-xs'>Minecraft</p>
                                        <p className='font-bold text-xs'>Five Nights at Freddy's</p>
                                    </div>
                                </div>

                                <div className='relative flex-center mx-auto sm:w-8/12'>
                                    <hr className='absolute border-[1.5px] border-white w-full rounded z-0' />
                                    <span className='text-yellow-w bg-chocolate px-5 z-10 font-semibold text-xs sm:text-sm'>Select Payment</span>
                                </div>

                                <div className='w-full sm:w-8/12 mx-auto bg-white rounded-xl'>
                                    <div className='bg-white rounded-lg flex justify-between items-center border-b-4 border-chocolate px-5 py-2'>
                                        <LazyLoadImage effect='blur' alt='' src='/dana.png' />
                                        <i className="ti ti-circle-dot text-2xl"></i>
                                    </div>
                                    <div className='bg-white p-5 sm:px-10 rounded-b-xl space-y-5 text-center'>
                                        <div className='flex-center pt-5 pb-3'>
                                            <QRCode
                                                value='https://www.figma.com/file/Pl7O7NgXZv4MdVnK0UuUQ7/WaveRevplay?type=design'
                                                bgColor='#fff'
                                                fgColor='#000'
                                                size={256}
                                            />
                                        </div>
                                        <hr className='border-chocolate border-[1.5px] rounded' />
                                        <div className='flex items-center justify-between'>
                                            <span className='font-semibold'>Rp 169.000</span>
                                            <button className='text-white bg-chocolate px-6 py-2 font-semibold rounded-lg text-sm hover:opacity-70 anim' onClick={handleSuccessPayment}>Next</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {isSuccessPayment && <ModalSuccessPayment />}
            {isLoading && <PageLoading />}
        </>
    );
}

export default PaymentPage;