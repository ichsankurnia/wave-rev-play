import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';
import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useNavigate } from 'react-router-dom';
import Slider, { Settings } from 'react-slick';

type Props = {};

const AboutGamePage: FC<Props> = () => {
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
                            <i className="ti ti-arrow-narrow-left absolute text-white top-3 left-5 text-4xl sm:hidden" onClick={() => navigate(-1)}></i>


                            <div className='flex-col-center bg-yellow-w rounded-t-2xl sm:rounded-2xl relative -mt-5 px-5 sm:px-10 pb-28 sm:pb-10'>
                                <LazyLoadImage effect='blur' alt='icon-game' src='/image 2.png' className='h-32 w-32 sm:w-40 sm:h-40 rounded-2xl border-8 border-yellow-w -mt-16 sm:-mt-20' />
                                <div className='flex-col-center mt-3'>
                                    <h1 className='font-bold text-2xl'>Minecraft</h1>
                                    <p>1.20.10</p>
                                </div>
                                <div className='flex-col-center gap-8 mt-6'>
                                    {/* <div className=''> */}
                                    <div className='grid grid-cols-3 items-center gap-8 sm:gap-10'>
                                        <div className='flex-col-center border-[1.5px] border-chocolate rounded-lg font-semibold h-12 w-24'>
                                            <span>10M</span>
                                            <p className='text-xs font-light'>Download</p>
                                        </div>
                                        <div className='flex-col-center border-[1.5px] border-chocolate rounded-lg font-semibold h-12 w-24'>
                                            <span>4,4 <span className='text-xl'>★</span></span>
                                        </div>
                                        <div className='flex-col-center border-[1.5px] border-chocolate rounded-lg font-semibold h-12 w-24'>
                                            <span>879 MB </span>
                                        </div>
                                    </div>
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

                                    <div className='hidden sm:flex w-full bg-chocolate p-4 text-2xl items-center justify-between rounded-xl'>
                                        <span className='text-white text-sm'>Rp <span className='text-4xl font-bold'>50</span>.000</span>
                                        <Link to='/cart' className=' bg-yellow-w text-chocolate px-5 py-2 font-semibold rounded-lg text-sm hover:opacity-70 anim'>Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <footer className='sm:hidden w-full flex justify-center items-center fixed bottom-0 z-10'>
                    <div className='w-full max-w-[400px] bg-chocolate p-4 text-2xl flex items-center justify-between'>
                        <span className='text-white text-sm'>Rp <span className='text-4xl font-bold'>50</span>.000</span>
                        <div className='bg-white h-10 w-[2px]'></div>
                        <Link to='/cart' className=' bg-yellow-w text-chocolate px-5 py-2 font-semibold rounded-lg text-sm hover:opacity-70 anim'>Add to Cart</Link>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default AboutGamePage;