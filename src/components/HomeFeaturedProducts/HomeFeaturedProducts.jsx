import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../../services/products-service"
import ProductCard from "../ProductCard/ProductCard"
import Loading from "../Loading/Loading";

function HomeFeaturedProducts(){
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['featured'],
        queryFn: () => getAllProducts({limit: 6}),
    })
    if (isLoading) return <Loading />;
    if (isError) return <p>{error}</p>;
    return(
        <section className="container-style py-10">
            <h2 className="text-xl font-bold">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 py-10">
                {
                    data?.data?.map(product =>(
                        <ProductCard key={product._id} product={product} discount={product.discount} />
                    ))
                }
            </div>
        </section>
    )
}

export default HomeFeaturedProducts