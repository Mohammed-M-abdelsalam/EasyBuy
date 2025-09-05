import ProductCard from "../ProductCard/ProductCard"
import Loading from "../Loading/Loading";
import { useContext } from "react";
import { ProductsContext } from "../../context/Products.context";

function HomeFeaturedProducts(){
    const {productsData, isLoading, isError, error} = useContext(ProductsContext)
    if (isLoading) return <Loading />;
    if (isError) return <p>{error}</p>;
    return(
        <section className="container-style py-10">
            <h2 className="text-xl font-bold">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3 py-10">
                {
                    productsData?.map(product =>(
                        <ProductCard key={product._id} product={product} discount={product.discount} />
                    ))
                }
            </div>
        </section>
    )
}

export default HomeFeaturedProducts