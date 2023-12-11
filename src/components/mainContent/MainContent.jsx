import Maps from "./map/Map";
import Directions from "./partOurDirections/Directions";


const MainContent = () => {
    return (
        <div className="main">
            <Directions />
            <Maps/>
        </div>
    )
}

export default MainContent;