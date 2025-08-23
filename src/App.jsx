import { RouterProvider, createBrowserRouter} from 'react-router';
import Layout from './Layout/Layout';
import Signup from './pages/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
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
        {
          path: 'product/:id',
          element: 
            <ProtectedRoutes>
              <ProductDetails />
            </ProtectedRoutes>
        },
        {
          path: 'cart',
          element: 
            <ProtectedRoutes>
              <h1>Cart</h1>
            </ProtectedRoutes>
        }
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
