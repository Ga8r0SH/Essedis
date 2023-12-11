import './Directions';

const DirectionElement = (props) => {
    return (
        <div className="element">
            <div className="elementImage">
                <img src={props.img} alt="proj" />
            </div>
            <div className="elementName">
                {props.name}
            </div>
            <div className="elementDescr montserattReg">
                {props.description}
            </div>
        </div>
    );
}

export default DirectionElement;