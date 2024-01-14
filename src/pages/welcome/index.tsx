import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const WelcomePage: FC<Props> = ({ }) => {
    return (
        <>
            <div className='hidden sm:flex h-screen flex-center flex-col space-y-16'>
                <div className=' bg-yellow-w w-64 h-64 rounded-full flex-center'>
                    <div className='text-chocolate font-semibold text-[300px]'>W</div>
                </div>
                <div className='bg-yellow-w rounded-2xl w-full sm:w-[400px] py-12 flex-col-center px-10 space-y-10'>
                    <span className='text-chocolate text-4xl text-center font-bold'>Let's Play the Game</span>
                    <p className='text-black text-center'> <span className='font-semibold'>Wave Revplay</span> a better gaming paltform and better experience</p>
                    <Link to='/login'>
                        <button className='rounded-xl bg-chocolate text-yellow-w text-2xl w-40 py-3 font-bold'>Start</button>
                    </Link>
                </div>
            </div>
            <div className='sm:hidden'>
                <div className='flex w-full justify-center mt-10'>
                    <div className=' bg-yellow-w w-64 h-64 rounded-full flex-center'>
                        <div className='text-chocolate font-semibold text-[300px]'>W</div>
                    </div>
                </div>
                <div className='absolute bottom-0 bg-yellow-w rounded-t-2xl w-full sm:w-[400px] py-12 flex-col-center px-10 space-y-10'>
                    <span className='text-chocolate text-4xl text-center font-bold'>Let's Play the Game</span>
                    <p className='text-black text-center'> <span className='font-semibold'>Wave Revplay</span> a better gaming paltform and better experience</p>
                    <Link to='/login'>
                        <button className='rounded-xl bg-chocolate text-yellow-w text-2xl w-40 py-3 font-bold'>Start</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default WelcomePage;