import { Suspense, lazy } from "react";

import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import PageLoading from "./components/PageLoading";

const WelcomePage = lazy(() => import("./pages/welcome"))
const LoginPage = lazy(() => import("./pages/auth/Login"))
const RegisterPage = lazy(() => import("./pages/auth/Register"))
const HomePage = lazy(() => import("./pages/home"))
const ProfilePage = lazy(() => import("./pages/profile"))
const AboutGamePage = lazy(() => import("./pages/about"))
const CartPage = lazy(() => import("./pages/cart"))
const PaymentPage = lazy(() => import("./pages/payment"))
const DetailGamePage = lazy(() => import("./pages/detail"))


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Suspense fallback={<PageLoading />}>
                <WelcomePage />
            </Suspense>,
            errorElement: <ErrorPage />
        },
        {
            path: "/login",
            element: <Suspense fallback={<PageLoading />}>
                <LoginPage />
            </Suspense>,
            errorElement: <ErrorPage />
        },
        {
            path: "/register",
            element: <Suspense fallback={<PageLoading />}>
                <RegisterPage />
            </Suspense>,
            errorElement: <ErrorPage />
        },
        {
            path: "/home",
            element: <Suspense fallback={<PageLoading />}>
                <HomePage />
            </Suspense>,
            errorElement: <ErrorPage />
        },
        {
            path: "/profile",
            element: <Suspense fallback={<PageLoading />}>
                <ProfilePage />
            </Suspense>,
            errorElement: <ErrorPage />
        },
        {
            path: "/about/:slug",
            element: <Suspense fallback={<PageLoading />}>
                <AboutGamePage />
            </Suspense>,
            errorElement: <ErrorPage />
        },
        {
            path: "/cart",
            element: <Suspense fallback={<PageLoading />}>
                <CartPage />
            </Suspense>,
            errorElement: <ErrorPage />
        },
        {
            path: "/payment",
            element: <Suspense fallback={<PageLoading />}>
                <PaymentPage />
            </Suspense>,
            errorElement: <ErrorPage />
        },
        {
            path: "/detail/:slug",
            element: <Suspense fallback={<PageLoading />}>
                <DetailGamePage />
            </Suspense>,
            errorElement: <ErrorPage />
        },
    ]
);

export default router