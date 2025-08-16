import { useQuery } from "@tanstack/react-query"
import { getCategories } from "../../services/categories-services"
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";

function HomeCategories(){
    const [stopLoading, setStopLoading] = useState(false);
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
    })
    useEffect(() => {
        setTimeout(() => {
            setStopLoading(true);
        }, 2000);
    })
    if (isLoading || !stopLoading) return <Loading />;
    if (isError) return <p>{error}</p>;
    return (
        <section className="container-style py-10">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Shop by Category</h2>
                <Link to="/categories" className="flex items-center text-primary-500 gap-2">
                    <p>View All</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 py-10">
                {
                    data?.data?.map(category =>(
                        <div key={category._id} className="flex flex-col items-center justify-center gap-2 bg-white rounded-lg p-3 hover:transform hover:scale-105 duration-300">
                            <div className="w-16 h-16 overflow-hidden rounded-full">
                                <img className="w-full h-full object-cover" src={category.image} alt={category.slug} />
                            </div>
                            <h3 className="text-sm">{category.name}</h3>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default HomeCategories


