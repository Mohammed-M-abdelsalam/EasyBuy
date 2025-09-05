import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./Auth.context";
import { useQuery } from "@tanstack/react-query";
import { addToWishlist, getWishlist, removeFromWishlist } from "../services/wishlist-service";

const WishlistContext = createContext({});
function WishlistProvider({ children }) {
    const {token} = useContext(AuthContext);
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['wishlist'],
        queryFn: () => getWishlist(token),
    });
    const [wishlistData, setWishlistData] = useState([]);
    useEffect(()=>{
        setWishlistData(data?.data);
    }, [data]);
    function addWishlistProduct(productId, token) {
        addToWishlist(productId, token)
    }
    function removeWishlistProduct(productId, token) {
        removeFromWishlist(productId, token);
        setWishlistData(wishlistData.filter(item => item._id !== productId));
    }
    return <WishlistContext.Provider value={{wishlistData, isLoading, isError, error, addWishlistProduct, removeWishlistProduct}}>
            {children}
        </WishlistContext.Provider>;
}

export {WishlistContext, WishlistProvider};