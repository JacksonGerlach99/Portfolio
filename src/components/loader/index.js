import "./index.scss"
import Loader from "react-loaders"

const ScreenChange = () =>{

    return (
 
            <div className="loading">
                <Loader type="line-scale"
                    color ="#f2f2f2"
                    height = "500px"
                    widith = "500px"
                />
            </div>

    )
}

export default ScreenChange