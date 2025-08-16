import { AuthContext } from "../../context/Auth.context";
import { Navigate } from "react-router";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import HomeFeatures from "../../components/HomeFeatures/HomeFeatures";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import HomeDeals from "../../components/HomeDeals/HomeDeals";
import HomeFeaturedProducts from "../../components/HomeFeaturedProducts/HomeFeaturedProducts";

function Home(){
    return(
        <>
            <HomeSlider />
            <HomeFeatures />
            <HomeCategories />
            <HomeDeals />
            <HomeFeaturedProducts />
        </>
    )
}

export default Home