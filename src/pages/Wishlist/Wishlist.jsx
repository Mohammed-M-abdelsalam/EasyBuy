import { useContext } from "react";
import { WishlistContext } from "../../context/Wishlist.context";
import Loading from "../../components/Loading/Loading";
import WishlistProductCard from "../../components/WishlistProductCard/WishlistProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Wishlist () {
    const {wishlistData, isLoading, isError, error} = useContext(WishlistContext);
    if (isLoading) return <Loading />;
    if (isError) return <p>{error}</p>;
    return (
        <section className="container-style py-10">
            <div>
                <h2 className="text-2xl font-bold">My Wishlist</h2>
                <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-gray-500">{wishlistData?.length} items in  your wishlist</p>
                    <div className="flex gap-3">
                        <button className="btn flex items-center gap-2 bg-transparent border-1 text-gray-500 hover:text-red-600 transition-colors duration-300">
                            <p>Clear All</p>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <button className="btn bg-primary-500 text-white">Add All to Cart</button>
                    </div>
                </div>
                <div className="space-y-5 mt-5">
                    {
                        wishlistData?.length === 0 ? <p className="text-sm font-bold text-gray-500">Your wishlist is empty</p> 
                        : (
                            wishlistData?.map(product =>{
                                return <WishlistProductCard key={product._id} product={product} />
                            })
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Wishlist