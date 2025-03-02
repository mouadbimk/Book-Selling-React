import {RouterProvider} from 'react-router';
import './App.css';
import { router } from './router';
import UserContext from './context/UserContext';
function App() {

  return (
    <>
      <UserContext>
      <RouterProvider router={router}/>
      </UserContext>
    </>
  )
}

export default App
