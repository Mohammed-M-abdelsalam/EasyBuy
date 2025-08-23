import { useQuery } from "@tanstack/react-query"
import { getProductById } from "../../services/products-service"
import { useParams } from "react-router"
import Rating from "../../components/Rating/Rating";
import { useEffect, useRef, useState } from "react";
import Loading from "../../components/Loading/Loading";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faTruck } from "@fortawesome/free-solid-svg-icons";

function ProductDetails() {
    useEffect(() => window.scrollTo(0, 0));
    const swiperRef = useRef(null);
    const {id} = useParams('id');
    const [quantity, setQuantity] = useState(1);
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['product', id],
        queryFn: () => getProductById(id),
    })
    if (isLoading) return <Loading />;
    if (isError) return <p>{error}</p>;
    return (
        <section className="container-style flex flex-col md:flex-row gap-5 my-5">
            <div className="md:w-1/3 flex flex-col justify-center bg-white">
                <div className="w-full min-h-50">
                    <Swiper
                        onSwiper= {(swiper) => swiperRef.current = swiper}
                        speed={800}
                    >
                        {
                            data?.data?.images?.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img className="aspect-[1/1] object-cover" src={image} alt={data?.data?.title} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className="flex flex-wrap justify-around mt-2">
                    {   data?.data.images.length > 1 &&
                        data?.data?.images?.map((image, index) => (
                            <button key={index} onClick={() => swiperRef.current?.slideTo(index)}>
                                <img className="h-20 object-cover" src={image} alt={data?.data?.title} />
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className="bg-white p-5 w-full h-fit">
                {data?.data.quantity == 0 ? <p className="text-red-600 bg-red-100 text-[0.6rem] font-bold rounded-lg py-1 px-2 w-fit">Out of Stock</p> : <p className="text-green-600 bg-green-100 text-[0.6rem] font-bold rounded-lg py-1 px-2 w-fit">In Stock</p>}
                <h1 className="text-lg font-bold my-2"> {data?.data?.title} </h1>
                <div className="flex items-center gap-2">
                    <Rating rating={data?.data?.ratingsAverage} />
                    <p className="text-gray-400 font-bold text-xs">{data?.data?.ratingsAverage} | 5</p>
                </div>
                <p className="font-bold text-xl mt-1">{data?.data?.price} EGP</p>
                
                <hr className="my-5 text-gray-300" />

                <div>
                    <p className="text-gray-500 font-bold text-xs"> {data?.data?.description} </p>
                    <div className="flex items-center gap-5 py-5">
                        <p className="text-xs text-gray-500">Quantity: </p>
                        <div className="relative border border-gray-200 flex items-center gap-5 w-20 h-7">
                            <button className="absolute left-1 top-0 bottom-0 " onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
                            <p className="w-full text-center"> {quantity} </p>
                            <button className="absolute right-1 top-0 bottom-0" onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                        <p className="text-gray-600 text-xs">only {data?.data?.quantity} left in stock</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="btn w-1/2 bg-primary-500 text-white">Add to Cart</button>
                        <button className="btn w-1/2 bg-transparent border">Buy Now</button>
                    </div>
                </div>

                <hr className="my-5 text-gray-300" />

                <div className="flex *:w-1/2 *:px-3">
                    <div className="flex items-center">
                        <div className="flex bg-primary-50 text-primary-500 text-[0.7rem] p-2 mr-3 rounded-full">
                            <FontAwesomeIcon icon={faTruck} />
                        </div>
                        <div>
                            <h2 className="text-sm font-bold">Free Delivery</h2>
                            <p className="text-xs font-bold text-gray-600">Free delivery on all orders over 100 EGP</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex bg-primary-50 text-primary-500 text-[0.7rem] p-2 mr-3 rounded-full">
                            <FontAwesomeIcon icon={faRotateLeft} />
                        </div>
                        <div>
                            <h2 className="text-sm font-bold">30 Days Return</h2>
                            <p className="text-[0.7rem] font-bold text-gray-600">Satisfaction guaranteed or money back</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails