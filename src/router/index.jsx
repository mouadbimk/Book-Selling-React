import {createBrowserRouter} from 'react-router';
import Home from '../pages/Home';
import NotFound from '../pages/404';
import Login from '../pages/Login';
import Layout from '../Layouts/layout';
import BookDetails from '../pages/BookDetails';
import Books from '../pages/Books';
import Categories from '../pages/Categories';
import About from '../pages/About';
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
            element: <Books/>
        },
        {
            path:'/category/audio-book',
            element: <Categories/>
        },
        {
            path:'/about',
            element: <About/>
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