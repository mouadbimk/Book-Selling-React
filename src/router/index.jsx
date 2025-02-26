import {createBrowserRouter} from 'react-router';
import Home from '../pages/Home';
import NotFound from '../pages/404';
import Login from '../pages/Login';
import Layout from '../Layouts/layout';
import BookDetails from '../pages/BookDetails';
import Books from '../pages/Books';
import Categories from '../pages/Categories';
import About from '../pages/About';
import ContactPage from '../pages/ContactPage';
import Account from '../pages/Account';
import AccountSettings from '../components/Account/AccountSettings';
import UserBooks from '../components/Account/UserBooks';
import UserComments from '../components/Account/UserComments';
import UserCommands from '../components/Account/UserCommands';
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
        {
            path: '/contact',
            element: <ContactPage/>
        },
        {
            element: <Account/>,
            children:[
                {
                    path:'/account/setting',
                    element: <AccountSettings/>

                },
                {
                    path:'/account/books',
                    element:<UserBooks/>
                },
                {
                    path: '/account/comments',
                    element:<UserComments/>
                },
                {
                    path: '/account/commands',
                    element:<UserCommands/>
                },
            ]
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