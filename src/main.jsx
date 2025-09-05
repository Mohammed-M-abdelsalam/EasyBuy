import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/poppins';
import App from './App.jsx'
import { AuthProvider } from './context/Auth.context.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WishlistProvider } from './context/Wishlist.context.jsx';
import { ProductsProvider } from './context/Products.context.jsx';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ProductsProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </ProductsProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
