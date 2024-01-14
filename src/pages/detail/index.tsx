import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';
import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import Slider, { Settings } from 'react-slick';

type Props = {};

const DetailGamePage: FC<Props> = () => {
    const navigate = useNavigate()
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
            <div className='flex-col-center'>
                <div className='w-full max-w-[1200px]'>
                    <Header className='hidden sm:flex' />

                    <div className='flex flex-row sm:mt-6 lg:mt-8 sm:pb-10'>
                        <div className='hidden lg:block mr-5'>
                            <SideMenu />
                        </div>

                        {/* FEED */}
                        <div className='w-full relative bg-yellow-w sm:rounded-2xl text-chocolate'>
                            <img loading='lazy' alt='banner' src='/banner/minecraft-banner.jpg' className='h-52 sm:h-64 w-full object-cover object-top sm:rounded-t-2xl' />
                            <div className='absolute inset-0 bg-black/20 sm:rounded-t-2xl w-full h-64 backdrop-blur-sm'></div>
                            <i className="ti ti-arrow-narrow-left absolute text-white top-3 left-5 text-4xl sm:hidden" onClick={() => navigate('/home')}></i>


                            <div className='flex-col-center bg-yellow-w rounded-t-2xl sm:rounded-2xl relative -mt-5 px-5 sm:px-10 pb-16 sm:pb-10'>
                                <LazyLoadImage effect='blur' alt='icon-game' src='/image 2.png' className='h-32 w-32 sm:w-40 sm:h-40 rounded-2xl border-8 border-yellow-w -mt-16 sm:-mt-20' />
                                <div className='flex-col-center mt-3'>
                                    <h1 className='font-bold text-2xl'>Minecraft</h1>
                                    <p>1.20.10</p>
                                </div>
                                <div className='flex-col-center gap-8 mt-6'>

                                    <button className='btn-primary text-base'>DOWNLOAD</button>

                                    <div className='flex-col-center border-[1.5px] border-chocolate rounded-xl p-5 text-center bg-yellow-600/40 gap-2'>
                                        <h2 className='font-bold'>About this Game</h2>
                                        <p className='text-sm font-medium'>Minecraft adalah permainan untuk menempatkan blok dan berpetualan, Minecraft adalah permainan yang terbuat dari blok yang dapat diubah menjadi apapun yang dapat kamu bayangkan </p>
                                    </div>

                                    <div className='w-[350px] sm:w-[640px] lg:w-full max-w-[800px]'>
                                        <Slider {...settings}>
                                            <img alt='thumbnail' src='/image 20.png' className='rounded-xl sm:rounded-2xl w-full h-44 sm:h-64 object-cover z-20' />
                                            <img alt='thumbnail' src='/image 2.png' className='rounded-xl sm:rounded-2xl w-full h-44 sm:h-64 object-cover z-20' />
                                            <img alt='thumbnail' src='/banner/minecraft-banner.jpg' className='rounded-xl sm:rounded-2xl w-full h-44 sm:h-64 object-cover z-20' />
                                        </Slider>
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

export default DetailGamePage;