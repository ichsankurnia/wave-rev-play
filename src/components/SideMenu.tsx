import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {};

const SideMenu: FC<Props> = () => {

    const { pathname } = useLocation()

    return (
        <div className='h-full sm:h-max w-[300px] bg-chocolate rounded-r-2xl p-5 space-y-8 text-yellow-w overflow-y-auto'>
            <div className='font-semibold'>
                <img src='/image 19.png' />
                <p className='text-sm mt-2 text-white'>Hello,</p>
                <p className='text-lg'>Sleepy Dav</p>
            </div>
            <hr className='border-white' />
            <div className='flex flex-col gap-5'>
                <Link to='/profile' className={`flex items-center gap-2 hover:opacity-70 anim ${pathname === '/profile' && 'text-white'}`}>
                    <i className="ti ti-user text-xl"></i>
                    <p>Profile</p>
                </Link>
                <div className='flex items-center gap-2'>
                    <i className="ti ti-device-gamepad text-xl"></i>
                    <p>Collection</p>
                </div>
                <div className='flex items-center gap-2'>
                    <i className="ti ti-users-group text-xl"></i>
                    <p>Friends</p>
                </div>
            </div>
            <div className='flex items-center'>
                <input className='input-form bg-white py-2 rounded-lg rounded-r-none border-none w-full text-sm' placeholder='Find friends' />
                <div className=' bg-yellow-w flex-center w-8 h-9 rounded-r-lg text-xl'>
                    <i className="ti ti-search text-chocolate"></i>
                </div>
            </div>
            <div className='bg-white rounded-2xl font-medium p-3 text-chocolate'>
                <h3 className='text-lg'>Genres</h3>
                <div className='grid grid-cols-3 text-xs gap-2 gap-y-3 mt-2'>
                    {['Action', 'Strategy', 'Adventure', 'Horror', 'Simulation', 'Sci-Fi', 'RPG', 'Racing', 'Sports', 'Puzzle', 'Music', 'Sandbox', 'VN', 'Co-op'].map((item) =>
                        <p key={item}>{item}</p>
                    )}
                </div>
                <hr className='border-chocolate border-2 rounded mt-5' />
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex items-center gap-2'>
                    <i className="ti ti-settings text-xl"></i>
                    <p>Setting</p>
                </div>
                <Link to='/' className='flex items-center gap-2 hover:opacity-70 anim'>
                    <i className="ti ti-logout text-xl"></i>
                    <p>Logout</p>
                </Link>
            </div>
            <hr className='border-white' />
        </div>
    );
}

export default SideMenu;