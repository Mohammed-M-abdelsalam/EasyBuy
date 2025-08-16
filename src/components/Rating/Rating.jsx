import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons"
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Rating({rating}){
    return(
        <span className="text-yellow-500">
        {
            [1, 2, 3, 4, 5].map( item =>{
                if(rating >= item){
                    return <FontAwesomeIcon key={item} icon={faStar} /> 
                }else if(rating >= item - 0.5){
                    return <FontAwesomeIcon key={item} icon={faStarHalfStroke} />
                }else{
                    return <FontAwesomeIcon key={item} icon={regularStar} />
                }
            })
        }
        </span>
    )
}

export default Rating