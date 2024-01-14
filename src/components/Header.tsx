import { FC, useState } from 'react';
import Logo from './Logo';
import { MENU } from '@/lib/data';
import { Link, useLocation } from 'react-router-dom';
import SideMenu from './SideMenu';
import { cn } from '@/lib/utils';

type Props = {
    className?: string
};

const Header: FC<Props> = ({ className }) => {
    const [showSideMenu, setShowSideMenu] = useState(false)
    const { pathname } = useLocation()

    return (
        <>
            <header className={cn('w-full flex justify-between items-center px-5 py-4 sticky inset-0 z-10 backdrop-blur-sm', className)}>
                <div className='flex items-center gap-10'>
                    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer sm:hidden' onClick={() => setShowSideMenu(true)}>
                        <rect width="24" height="2" rx="1" fill="white" />
                        <rect y="5" width="15" height="2" rx="1" fill="white" />
                        <rect y="10" width="15" height="2" rx="1" fill="white" />
                    </svg>

                    <div className='hidden sm:block'>
                        <Logo />
                    </div>

                    <div className='hidden sm:flex items-center space-x-5'>
                        {[...MENU].map((item, key) =>
                            <Link className={`flex items-center space-x-1 hover:text-white anim ${pathname === item.path ? 'text-white' : 'text-yellow-w font-light'} `} key={key} to={item.path}>
                                <i className={`${item.icon}`}></i>
                                <p>{item.menu_name}</p>
                            </Link>
                        )}
                    </div>
                </div>

                <div className='hidden lg:flex items-center'>
                    <input className='input-form py-1 rounded-lg rounded-r-none border-none w-64' placeholder='Search game' />
                    <div className='bg-yellow-w flex-center w-8 h-8 rounded-r-lg text-xl'>
                        <i className="ti ti-search"></i>
                    </div>
                </div>

                <div className='flex space-x-10'>
                    <div>
                        <p className='text-yellow-w text-xs text-right'>WaveWallet</p>
                        <p className='text-white font-semibold'>Rp 200.000</p>
                    </div>
                </div>
            </header>

            <div className={`md:hidden fixed -top-5 w-max h-full z-30 transform transition-all duration-500 ease-in-out ${showSideMenu ? 'translate-x-0' : '-translate-x-96'}`}>
                <SideMenu />
            </div>
            {showSideMenu && <div className='fixed -top-5 left-0 z-20 w-full h-full backdrop-blur-sm' onClick={() => setShowSideMenu(false)}></div>}
        </>
    );
}

export default Header;