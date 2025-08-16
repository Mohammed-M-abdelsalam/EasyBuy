import { faCodeCompare, faEye, faHeart, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Rating from "../Rating/Rating"
import { calculateProductDiscount } from "../../utils/prouctDiscount"

function ProductCard({product}){
    const discount = calculateProductDiscount(product.price, product.priceAfterDiscount)
    const {slug, title, description, images, price, priceAfterDiscount, ratingsAverage} = product
    return(
        <div className="bg-white relative rounded-xl overflow-hidden shadow">
            <div>
                <img className="w-full h-60 object-cover" src={images[0]} alt={slug} />
            </div>
            <div className="p-3">
                <h3 className="text-xs text-gray-500">{title.slice(0, 20)}{title.length > 20 && '...'} </h3>
                <p className="text-xs font-bold my-2">{description.slice(0, 50)}{description.length > 50 && '...'} </p>
                <div className="flex items-center gap-2">
                    <span>
                        <Rating rating={ratingsAverage} />
                    </span>
                    <span className="text-gray-400 text-sm">{ratingsAverage} | 5</span>
                </div>
                <div className=" flex items-center justify-between">
                    <p className="text-primary-500 font-bold">{priceAfterDiscount || price} EFP <del className="text-gray-400 font-light text-sm">{priceAfterDiscount && price}</del></p>
                    <button className="btn flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 text-white">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
            {
                priceAfterDiscount &&
                <div className="absolute top-2 left-2 text-white bg-red-500 text-sm px-4">{discount}%</div>
            }
            <div className="absolute top-2 right-2 flex flex-col gap-1 text-gray-900">
                <button className="hover:text-red-500 transition-colors duration-300">
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <button className="hover:text-blue-500 transition-colors duration-300">
                    <FontAwesomeIcon icon={faCodeCompare} />
                </button>
                <button className="hover:text-yellow-500 transition-colors duration-100">
                    <FontAwesomeIcon icon={faEye} />
                </button>
            </div>
        </div> 
    )

}

export default ProductCard