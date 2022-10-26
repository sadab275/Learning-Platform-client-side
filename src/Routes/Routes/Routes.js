import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Checkout from "../../Pages/Checkout/Checkout";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://programming-courses-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`https://programming-courses-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://programming-courses-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://programming-courses-server.vercel.app/courses/${params.id}`)

            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/register',
                element: <Register></Register>

            },
            {
                path: '/blog',
                element: <Blog></Blog>

            },
            {
                path: '/faq',
                element: <FAQ></FAQ>

            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])