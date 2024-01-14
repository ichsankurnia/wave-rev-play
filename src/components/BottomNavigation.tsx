import { MENU } from '@/lib/data';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {};

const BottomNavigation: FC<Props> = () => {

    const { pathname } = useLocation()

    return (
        <>
            <footer className='sm:hidden w-full flex justify-center items-center fixed bottom-0 z-10'>
                <nav className='w-full max-w-[400px] grid grid-cols-3 items-center bg-chocolate py-3.5 text-2xl'>
                    {[...MENU].sort((a, b) => a.order - b.order).map((item, key) =>
                        <Link className={`flex-col-center space-y-1 ${pathname === item.path ? 'text-white font-medium' : 'text-yellow-w font-light'}`}
                            to={item.path} key={key}
                        >
                            <i className={`${item.icon}`}></i>
                            <p className='text-xs'>{item.menu_name}</p>
                        </Link>
                    )}
                </nav>
            </footer>
        </>
    );
}

export default BottomNavigation;