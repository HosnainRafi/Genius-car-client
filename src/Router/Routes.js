import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main> ,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
        ]
    }
]);

export default router;