import { RouterProvider, createBrowserRouter} from 'react-router';
import Layout from './Layout/Layout';
import Signup from './pages/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ]
    },
    {
      path: 'signup',
      element: <Signup />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: '*',
      element: <h1>404</h1>
    }
  ])

  return (
    <section className='bg-gray-100'>
        <RouterProvider router={router} />
        <ToastContainer autoClose={2000} />
    </section>
  )
}

export default App
