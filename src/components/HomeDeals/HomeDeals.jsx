import { Link } from "react-router"
import Loading from "../Loading/Loading"
import ProductCard from "../ProductCard/ProductCard"
import { useContext, useEffect, useState } from "react"
import { counterDown } from "../../utils/counterDown"
import { ProductsContext } from "../../context/Products.context"

function HomeDeals() {
    const [time, setTime] = useState(() => counterDown(new Date() + 600000))
    useEffect(() => {
        const interval = setInterval(() => {
            const timer = counterDown(new Date(2025, 11, 16, 23, 59, 59))
            if (time.hours == 0 && time.minutes == 0 && time.seconds == 0){
                clearInterval(interval)
                return
            }
            setTime(timer)
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);

    const {productsData, isLoading, isError, error} = useContext(ProductsContext);
    if (isLoading) return <Loading />
    if (isError) return <p>{error}</p>
    const deals =  productsData?.filter(product => product.priceAfterDiscount).slice(0, 6)
    return (
        <section className="container-style">
            <div className="flex justify-between">
                <div>
                    <h2 className="text-lg font-bold">Deals of the Day</h2>
                    <div className="flex flex-col gap-2 text-sm">
                        <p>offers ends in: </p>
                        <div className="text-red-600 text-5xl font-extrabold">
                            {time.days && time.days.toString() || '00'}
                            <span className="text-sm text-gray-600 ms-1">Days</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-gray-900 text-white min-w-6 h-6 flex items-center justify-center px-1 rounded">{time.hours && time.hours.toString().padStart(2, '0') || '00'}</div>
                            <div className="bg-gray-900 text-white min-w-6 h-6 flex items-center justify-center px-1 rounded">{time.minutes && time.minutes.toString().padStart(2, '0') || '00'}</div>
                            <div className="bg-gray-900 text-white min-w-6 h-6 flex items-center justify-center px-1 rounded">{time.seconds && time.seconds.toString().padStart(2, '0') || '00'}</div>
                        </div>
                    </div>
                </div>
                <Link className="text-primary-500 text-sm" to="/">View All Deals</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3 py-10">
                {/* cards */}
                {deals.map((product) => {
                    return <ProductCard key={product._id} product={product} /> 
                })}
            </div>
        </section>
    )
}

export default HomeDeals