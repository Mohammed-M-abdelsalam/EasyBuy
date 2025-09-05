import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import { getAllProducts } from "../services/products-service";

const ProductsContext = createContext();
function ProductsProvider({ children }) {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['featured'],
        queryFn: () => getAllProducts(),
    })
    return <ProductsContext.Provider value={{productsData: data?.data, isLoading, isError, error}}>
            {children}
        </ProductsContext.Provider>;
}

export { ProductsProvider, ProductsContext };