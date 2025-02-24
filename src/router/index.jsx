import {createBrowserRouter} from 'react-router';
import Home from '../pages/Home';
import NotFound from '../pages/404';
import Login from '../pages/Login';
import Layout from '../Layouts/layout';
import BookDetails from '../pages/BookDetails';
export const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
        {
                path : '/',
                element: <Home />   
        },
        {
            path: '/book/1',
            element: <BookDetails />
        },
        {
            path:'/books',
            element: "Books Pages"
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
    },
  
])