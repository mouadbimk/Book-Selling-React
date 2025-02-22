import {createBrowserRouter} from 'react-router';
import Home from '../pages/Home';
import NotFound from '../pages/404';
import Login from '../pages/Login';
import Layout from '../Layouts/layout';
export const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
        {
                path : '/',
                element: <Home />   
        },
        
        ]
    },

    {
        path: '*',
        element: <NotFound />
    },
    {
        path: '/login',
        element: <Login/>
    }
])