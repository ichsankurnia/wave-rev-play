import { FC } from 'react';

type Props = {};

const Logo: FC<Props> = () => {
    return (
        <>
            <div className='flex items-center space-x-1 cursor-pointer hover:opacity-70 anim' onClick={() => window.location.href = '/home'}>
                <img src='/logo.png' alt='logo' loading='lazy' className='w-9' />
                <div className='flex flex-col items-center'>
                    <span className='text-yellow-w font-bold text-xl leading-none'>WAVE</span>
                    <span className='tracking-wide text-white text-xs leading-none'>REVPLAY</span>
                </div>
            </div>
        </>
    );
}

export default Logo;