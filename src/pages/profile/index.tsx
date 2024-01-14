import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';
import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';

type Props = {};

const ProfilePage: FC<Props> = () => {
    const navigate = useNavigate()

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
                        <div className='w-full relative bg-white sm:rounded-2xl text-chocolate'>
                            <img loading='lazy' alt='banner' src='/winda.jpg' className='h-52 sm:h-64 w-full object-cover object-top sm:rounded-t-2xl' />
                            <div className='absolute inset-0 bg-black/20 sm:rounded-t-2xl w-full h-64 backdrop-blur-sm'></div>
                            <i className="ti ti-arrow-narrow-left absolute text-white top-3 left-5 text-4xl sm:hidden" onClick={() => navigate(-1)}></i>


                            <div className='flex-col-center bg-white rounded-t-2xl sm:rounded-2xl relative -mt-5 px-5 sm:px-10 pb-16 sm:pb-10'>
                                <LazyLoadImage effect='blur' alt='icon-game' src='/image 19.png' className='h-32 w-32 sm:w-40 sm:h-40 rounded-full -mt-16 sm:-mt-20' />
                                <div className='flex-col-center mt-3'>
                                    <h1 className='font-bold text-2xl'>Sleepy Dav</h1>
                                    <p className='text-sm'>DKI Jakarta, Indonesia</p>
                                </div>
                                <div className='flex-col-center text-center gap-8 mt-6 text-chocolate'>
                                    <span className='font-medium px-9'>Guess what I'm wearing? the smile u gave me</span>
                                    <div className='grid grid-cols-3 items-center gap-6'>
                                        <i className="ti ti-message text-3xl"></i>
                                        <button className='bg-yellow-w rounded-full w-28 py-2 font-semibold'>Edit</button>
                                        <i className="ti ti-share text-3xl"></i>
                                    </div>
                                    <div className='grid grid-cols-3 items-center gap-20 pb-4 border-b-2 sm:border-b-[3px] border-chocolate font-semibold'>
                                        <div className='flex-col-center'>
                                            <span className='text-2xl'>24</span>
                                            <p className='text-xs'>Following</p>
                                        </div>
                                        <div className='flex-col-center'>
                                            <span className='text-2xl'>2404</span>
                                            <p className='text-xs'>Followers</p>
                                        </div>
                                        <div className='flex-col-center'>
                                            <span className='text-2xl'>4</span>
                                            <p className='text-xs'>Games</p>
                                        </div>
                                    </div>
                                    <div className='space-y-2'>
                                        <div className='flex justify-between items-end font-semibold'>
                                            <p>Collection</p>
                                            <p className='text-xs'>See all</p>
                                        </div>
                                        <div className='w-full border-b-2 sm:border-b-[3px] border-chocolate pb-4'>
                                            <div className='w-full bg-yellow-w overflow-x-auto sm:overflow-hidden flex items-center gap-2 sm:gap-4 p-2 sm:p-4 rounded-2xl border-2 border-chocolate'>
                                                <img loading='lazy' alt='' src='/image 2.png' className='w-[76px] h-[76px] sm:w-32 sm:h-32 object-cover  rounded-lg sm:rounded-2xl' />
                                                <img loading='lazy' alt='' src='/image 11.png' className='w-[76px] h-[76px] sm:w-32 sm:h-32 object-cover  rounded-lg sm:rounded-2xl' />
                                                <img loading='lazy' alt='' src='/image 10.png' className='w-[76px] h-[76px] sm:w-32 sm:h-32 object-cover  rounded-lg sm:rounded-2xl' />
                                                <img loading='lazy' alt='' src='/image 8.png' className='w-[76px] h-[76px] sm:w-32 sm:h-32 object-cover  rounded-lg sm:rounded-2xl' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='space-y-2'>
                                        <div className='flex justify-between items-end font-semibold'>
                                            <p>Album</p>
                                            <p className='text-xs'>See all</p>
                                        </div>
                                        <div className='w-full border-b-2 sm:border-b-[3px] border-chocolate pb-4'>
                                            <div className='w-full bg-yellow-w overflow-x-auto sm:overflow-hidden flex items-center gap-2 sm:gap-4 p-2 sm:p-4 rounded-2xl border-2 border-chocolate'>
                                                <img loading='lazy' alt='' src='/album/image 25.png' className='w-[76px] h-[76px] sm:w-32 sm:h-32 object-cover  rounded-lg sm:rounded-2xl' />
                                                <img loading='lazy' alt='' src='/album/image 26.png' className='w-[76px] h-[76px] sm:w-32 sm:h-32 object-cover  rounded-lg sm:rounded-2xl' />
                                                <img loading='lazy' alt='' src='/album/image 27.png' className='w-[76px] h-[76px] sm:w-32 sm:h-32 object-cover  rounded-lg sm:rounded-2xl' />
                                                <img loading='lazy' alt='' src='/album/image 28.png' className='w-[76px] h-[76px] sm:w-32 sm:h-32 object-cover  rounded-lg sm:rounded-2xl' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;