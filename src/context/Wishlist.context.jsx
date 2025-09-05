import { createContext, useContext } from "react";
import { AuthContext } from "./Auth.context";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addToWishlist, getWishlist, removeFromWishlist } from "../services/wishlist-service";

const WishlistContext = createContext({});
function WishlistProvider({ children }) {
    const queryClient = useQueryClient();
    const {token} = useContext(AuthContext);
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['wishlist'],
        queryFn: () => getWishlist(token),
    });

    // function addWishlistProduct(productId, token) {
    //     addToWishlist(productId, token)
    // }
    const addMutation = useMutation({
        mutationFn: (productId) => addToWishlist(productId, token),
        onSuccess: () => queryClient.invalidateQueries(['wishlist']),
    });

    const removeMutation = useMutation({
        mutationFn: (productId) => removeFromWishlist(productId, token),
        onMutate: async (productId) => {
            await queryClient.cancelQueries(['wishlist']);
            
            const previousData = queryClient.getQueryData(['wishlist']);

            queryClient.setQueryData(['wishlist'], (old) => ({
                ...old,
                data: old.data.filter(item => item._id !== productId),
            }));

            return { previousData };
        },
        onError: (err, productId, context) => {
            queryClient.setQueryData(['wishlist'], context.previousData);
        },
        onSettled: () => {
            queryClient.invalidateQueries(['wishlist']);
        },
    });

    return <WishlistContext.Provider value={{wishlistData: data?.data, isLoading, isError, error, addWishlistProduct: addMutation.mutate, removeWishlistProduct: removeMutation.mutate}}>
            {children}
        </WishlistContext.Provider>;
}

export {WishlistContext, WishlistProvider};