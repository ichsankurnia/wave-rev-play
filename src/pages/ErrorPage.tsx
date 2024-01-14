import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();
    const navigate = useNavigate()

    return (
        <div id="error-page" className="h-screen w-full flex justify-center items-center flex-col font-medium text-white">
            <h1 className="font-semibold text-2xl">Oops!</h1>
            <p className="sm:text-2xl text-center">Sorry, an unexpected error has occurred.</p>
            <p>
                <i className="text-center text-yellow-w">{error.status} {error.statusText || error.message}</i>
            </p>
            <button onClick={() => navigate(-1)} className='flex items-center justify-center sm:text-xl md:text-2xl bg-primary hover:bg-yellow-w duration-500 px-10 py-2 rounded-full text-white space-x-3 shadow-lg mt-3'>
                <i className="fa-solid fa-rotate-right"></i>
                <p>Back</p>
            </button>
        </div>
    );
}