import { FC, FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type Props = {};

const LoginPage: FC<Props> = () => {
    const [showPass, setShowPass] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        navigate('/home')
    }

    return (
        <>
            <div className='w-full min-h-screen bg-[#f5f5f5] flex-center py-0 sm:py-10'>
                <div className=' bg-chocolate sm:rounded-2xl w-full h-screen sm:h-max sm:w-[480px] text-yellow-w shadow-2xl flex flex-col justify-between'>
                    <div className='space-y-3 p-5 sm:p-8 h-full flex flex-col justify-center'>
                        <span className='text-3xl font-bold leading-10'>Welcome Back<br />Gamers</span>
                        <p className='font-light'>Sign up to Continue</p>
                    </div>
                    <div className='bg-yellow-w rounded-t-2xl sm:rounded-2xl space-y-8 p-5 py-10 sm:p-8 sm:py-10 text-chocolate'>
                        <form className='space-y-5' onSubmit={handleSubmit}>
                            <div className='flex flex-col'>
                                <label htmlFor='name' className='label'>Email</label>
                                <input id='name' name='name' type='email' className='input-form' required />
                            </div>
                            <div className='flex flex-col relative'>
                                <label htmlFor='name' className='label'>Password</label>
                                <input id='name' name='name' type={showPass ? 'text' : 'password'} className='input-form' required />
                                <div className='absolute right-4 bottom-2 text-chocolate text-2xl cursor-pointer hover:opacity-80 duration-150'>
                                    {showPass ?
                                        <i className="ti ti-eye-off" onClick={() => setShowPass(false)}></i>
                                        :
                                        <i className="ti ti-eye" onClick={() => setShowPass(true)}></i>
                                    }
                                </div>
                            </div>
                            <div className='flex item-center space-x-2'>
                                <input id='remember-me' name='remember-me' type='checkbox' className='accent-chocolate' />
                                <label htmlFor='remember-me' className='text-sm font-medium'>Remember me</label>
                            </div>
                            <div className='pt-3'>
                                <button type='submit' className='btn-primary'>Log In</button>
                            </div>
                        </form>
                        <div className='flex-col-center space-y-3'>
                            <p className=' opacity-50'>You can connect with</p>
                            <div className='flex items-center space-x-3'>
                                <div className='bg-white w-12 h-12 rounded-full shadow p-2 flex-center'>
                                    <img loading='lazy' src='/google.png' alt='google' />
                                </div>
                                <div className='bg-white w-12 h-12 rounded-full shadow p-2 flex-center'>
                                    <img loading='lazy' src='/fb.png' alt='google' />
                                </div>
                            </div>
                        </div>
                        <div className='flex-center'>
                            <span className='font-medium'>Don't have an account? <Link to='/register' className='font-bold hover:opacity-80 duration-200'>Sign Up</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;