import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Rating from "../Rating/Rating"
import { useContext } from "react"
import { WishlistContext } from "../../context/Wishlist.context"

function WishlistProductCard({product}){
    const {removeWishlistProduct} = useContext(WishlistContext);

    return(
        <div className="flex flex-col md:flex-row gap-5 md:items-center justify-between border-b-1 border-gray-300 py-3">
            <div className="flex items-center gap-5">
                <div className="rounded-xl w-20 overflow-hidden">
                    <img className="object-cover" src={`https://ecommerce.routemisr.com/Route-Academy-products/${product.images[0]}`} alt={product.title} />
                </div>
                <div>
                    <p className="text-sm text-gray-500"> {product.slug} </p>
                    <h3 className="text-sm font-bold"> {product.title} </h3>
                    <Rating rating={product.ratingsAverage} />
                    <p className="text-primary-500 font-bold"> ${product.price} </p>
                </div>
            </div>
            <div className="flex items-center justify-between gap-3">
                <button className="btn text-sm bg-primary-500 text-white">Add to Cart</button>
                <button onClick={() => removeWishlistProduct(product._id)} className="btn text-lg bg-transparent text-gray-500 hover:text-red-600 transition-colors duration-300">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    )
}

export default WishlistProductCard