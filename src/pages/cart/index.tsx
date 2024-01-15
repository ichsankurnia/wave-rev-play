import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';
import { CART_GANE, HISTORY_GANE } from '@/lib/data';
import { IDRFormatter } from '@/lib/helper';

type Props = {};

const CartPage: FC<Props> = () => {
    const [selectedGames, setSelectedGames] = useState<typeof CART_GANE[0][]>([])
    const navigate = useNavigate()

    const handleSelectGame = (game: typeof CART_GANE[0]) => {
        if (selectedGames.find(item => item.name === game.name)) {
            const newSelectedGame = [...selectedGames].filter(item => item.name !== game.name)
            setSelectedGames(newSelectedGame)
        } else {
            setSelectedGames([...selectedGames, game])
        }
    }

    const calculatePrice = () => {
        return selectedGames.reduce((accumulator, currantValue) => accumulator + currantValue.price, 0)
    }

    const handleBuyGame = () => {
        const boughtGame = JSON.stringify(selectedGames)

        // SAVE TOTAL PRICE & BOUGHT GAME TO LOCAL STORAGE
        localStorage.setItem('bought_game', boughtGame)
        localStorage.setItem('total_price', calculatePrice().toString())
        navigate('/payment')
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
                        <div className='w-full relative bg-chocolate sm:rounded-2xl text-chocolate'>
                            <div className='h-52 sm:h-64 w-full sm:rounded-t-2xl flex-center'>
                                <h1 className='text-yellow-w text-3xl sm:text-4xl font-bold'>Wave <span className='text-white'>Cart</span></h1>
                            </div>
                            <i className="ti ti-arrow-narrow-left absolute text-white top-3 left-5 text-4xl sm:hidden" onClick={() => navigate(-1)}></i>

                            <div className='flex-col-center bg-white rounded-t-2xl sm:rounded-2xl relative px-5 sm:px-10 pt-10 pb-32 sm:pb-10 space-y-8'>
                                <div className='flex-col-center text-center gap-5 sm:gap-8 text-chocolate w-full'>
                                    {CART_GANE.map((item, key) =>
                                        <label className='w-full bg-[#CCC1BC] border-2 border-chocolate rounded-2xl flex justify-between items-center p-3 sm:p-4 cursor-pointer hover:opacity-70 anim' key={key}>
                                            <div className='flex items-center gap-5'>
                                                <LazyLoadImage effect='blur' alt={item.name} src={item.image} className='w-16 h-16 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl' />
                                                <div className='flex flex-col items-start font-semibold'>
                                                    <span className='text-xl sm:text-2xl'>{item.name}</span>
                                                    <span>{IDRFormatter(item.price)}</span>
                                                </div>
                                            </div>
                                            <input type='checkbox' className='accent-chocolate' checked={selectedGames.find((game: any) => game.name === item.name) ? true : false} onChange={() => handleSelectGame(item)} />
                                        </label>
                                    )}
                                </div>
                                <div className='w-full flex items-center font-semibold gap-2'>
                                    <p className='text-sm sm:text-base'>History</p>
                                    <div className='w-full h-0.5 bg-chocolate'></div>
                                </div>
                                <div className='flex-col-center text-center gap-5 sm:gap-8 text-chocolate w-full'>
                                    {HISTORY_GANE.map((item, key) =>
                                        <div className='w-full bg-[#CCC1BC] border-2 border-chocolate rounded-2xl flex justify-between items-center p-3 sm:p-4 opacity-50' key={key}>
                                            <div className='flex items-center gap-5'>
                                                <LazyLoadImage effect='blur' alt={item.name} src={item.image} className='w-16 h-16 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl' />
                                                <div className='flex flex-col items-start font-semibold'>
                                                    <span className='text-xl sm:text-2xl truncate'>{item.name}</span>
                                                    <span>{IDRFormatter(item.price)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className='hidden sm:block pt-6 w-full space-y-4'>
                                    <div className='w-full bg-white px-4 py-3 rounded-xl border-2 border-chocolate flex items-center justify-between'>
                                        <span className='text-yellow-w font-semibold text-xl'>Wave<span className='text-chocolate'>Wallet</span></span>
                                        <div className='flex items-center text-chocolate font-medium gap-3'>
                                            <p>Rp 200.000</p>
                                            <i className="ti ti-scan text-2xl"></i>
                                        </div>
                                    </div>

                                    <div className='w-full bg-chocolate p-4 text-2xl flex items-center justify-between rounded-xl'>
                                        <span className='text-white text-xl font-medium'>Total : <span className='text-yellow-w'>{IDRFormatter(calculatePrice())}</span></span>
                                        <button className=' bg-yellow-w text-chocolate px-6 py-2 font-semibold rounded-lg text-sm hover:opacity-70 anim disabled:opacity-50 disabled:cursor-not-allowed'
                                            disabled={calculatePrice() === 0} onClick={handleBuyGame}
                                        >
                                            Buy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <footer className='sm:hidden w-full flex flex-col justify-center items-center fixed bottom-0 z-10'>
                    <div className='w-full max-w-[400px] mb-3'>
                        <div className='w-11/12 mx-auto'>
                            <div className='w-full bg-white px-4 py-3 rounded-xl border-2 border-chocolate flex items-center justify-between'>
                                <span className='text-yellow-w font-semibold text-xl'>Wave<span className='text-chocolate'>Wallet</span></span>
                                <div className='bg-chocolate h-8 w-[2px]'></div>
                                <div className='flex items-center text-chocolate font-medium gap-3'>
                                    <p>Rp 200.000</p>
                                    <i className="ti ti-scan text-2xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full max-w-[400px] bg-chocolate p-4 text-2xl flex items-center justify-between'>
                        <span className='text-white text-xl font-medium'>Total : <span className='text-yellow-w'>{IDRFormatter(calculatePrice())}</span></span>
                        <div className='bg-white h-10 w-[2px]'></div>
                        <button className=' bg-yellow-w text-chocolate px-6 py-2 font-semibold rounded-lg text-sm hover:opacity-70 anim disabled:opacity-50 disabled:cursor-not-allowed'
                            disabled={calculatePrice() === 0} onClick={handleBuyGame}
                        >
                            Buy
                        </button>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default CartPage;