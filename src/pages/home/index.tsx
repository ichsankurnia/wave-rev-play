import { FC } from 'react';
import Header from '@/components/Header';
import { POPULAR_GAME, SLIDER_HOME, SPECIAL_OFFER_GANE } from '@/lib/data';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IDRFormatter } from '@/lib/helper';
import { Link } from 'react-router-dom';
import Slider, { Settings } from 'react-slick';
import BottomNavigation from '@/components/BottomNavigation';
import SideMenu from '@/components/SideMenu';

type Props = {};

const HomePage: FC<Props> = () => {

    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        dotsClass: "button__bar"
    }

    return (
        <>
            {/* <div className='flex-col-center bg-gradient-to-br from-orange-500 to-yellow-w'> */}
            <div className='flex-col-center'>
                <div className='w-full max-w-[1200px] space-y-5 sm:space-y-6 lg:space-y-8'>
                    <Header />

                    <div className='flex lg:hidden items-center w-11/12 mx-auto'>
                        <input className='input-form py-2 rounded-lg rounded-r-none border-none text-sm w-full' placeholder='Search game' />
                        <div className='bg-yellow-w flex-center w-9 h-9 rounded-r-lg text-xl'>
                            <i className="ti ti-search"></i>
                        </div>
                    </div>

                    {/* SLIDER */}
                    <div>
                        <div className='flex justify-end text-yellow-w w-11/12 mx-auto text-xs mb-1 lg:hidden'>
                            See All
                        </div>
                        <Slider {...settings}>
                            {SLIDER_HOME.map((item, key) =>
                                <div key={key} className='h-44 sm:h-64 lg:h-96 w-full relative'>
                                    <div className='bg-black bg-opacity-20 w-11/12 mx-auto h-full absolute inset-0 rounded-xl sm:rounded-2xl'></div>
                                    <img alt='thumbnail' src={item.image} className='rounded-xl sm:rounded-2xl w-11/12 mx-auto h-full' />
                                    <div className='absolute bottom-2 sm:bottom-4 lg:bottom-6 left-6 sm:left-12 lg:left-20 font-semibold text-white'>
                                        {item.price <= 0 ? 'Free' : IDRFormatter(item.price)}
                                    </div>
                                </div>
                            )}
                        </Slider>
                    </div>

                    <div className='flex flex-row'>
                        <div className='hidden lg:block mr-5'>
                            <SideMenu />
                        </div>

                        {/* FEED */}
                        <div className='w-full relative bg-yellow-w rounded-t-2xl sm:rounded-2xl px-5 pt-8 pb-24 sm:p-10 text-chocolate space-y-10'>
                            <div className='w-full'>
                                <h2 className='text-xl font-medium mb-3'>POPULAR</h2>
                                <div className='w-full flex sm:grid grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-hidden'>
                                    {POPULAR_GAME.map((item, key) =>
                                        <Link className='bg-yellow-200 border-2 border-chocolate flex flex-col rounded-2xl space-y-2 p-5 min-w-[148px] sm:w-full hover:opacity-70 anim' key={key}
                                            to={`/about/${item.name.replaceAll(' ', '-').toLowerCase()}`}
                                        >
                                            <LazyLoadImage effect='blur' alt='' src={item.image} className='w-full rounded-2xl ' />
                                            <p className='font-semibold text-xl truncate'>{item.name}</p>
                                            <p className='text-xs sm:text-base'>{item.price <= 0 ? 'Free' : IDRFormatter(item.price)}</p>
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <div className='w-full'>
                                <h2 className='text-xl font-medium mb-3'>SPECIAL OFFER</h2>
                                <div className='w-full flex sm:grid grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-hidden'>
                                    {SPECIAL_OFFER_GANE.map((item, key) =>
                                        <Link className='bg-yellow-200 border-2 border-chocolate flex flex-col rounded-2xl space-y-2 p-5 min-w-[148px] sm:w-full hover:opacity-70 anim' key={key}
                                            to={`/about/${item.name.replaceAll(' ', '-').toLowerCase()}`}
                                        >
                                            <LazyLoadImage effect='blur' alt='' src={item.image} className='w-full rounded-2xl ' />
                                            <p className='font-semibold text-xl truncate'>{item.name}</p>
                                            <p className='text-xs sm:text-base'>{item.price <= 0 ? 'Free' : IDRFormatter(item.price)}</p>
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <div className='flex justify-center'>
                                <button className='btn-primary w-44 font-medium rounded-full text-base sm:text-lg'>Load More</button>
                            </div>
                        </div>

                    </div>
                </div>

                <BottomNavigation />
            </div>
        </>
    );
}

export default HomePage;