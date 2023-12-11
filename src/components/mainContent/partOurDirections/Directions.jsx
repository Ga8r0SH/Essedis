import './Directions.css';
import DirectionElement from './DirectionElement';
import projectImg from './../../../assets/mainImage/projects.png';
import presentationImg from './../../../assets/mainImage/presentation.png';
import ecologyImg from './../../../assets/mainImage/ecology.png';
import charityImg from './../../../assets/mainImage/charity.png';

const Directions = () => {
    return (
        <div className="directions montseratt">
            <div className="container">
                <div className="directionsHeader">
                    Наши направления:
                </div>
                <div className="directionsBox">
                    <DirectionElement img={projectImg} name="Проекты" description="Инициирование и реализация, общественно значимых дел, проектов и программ."/>
                    <DirectionElement img={presentationImg} name="Тренинги" description="Повышение гражданского активизма. Развитие критического мышления."/>
                    <DirectionElement img={ecologyImg} name="Экология" description="Проведение экологических акций. Повышение уровня экологической грамотности."/>
                    <DirectionElement img={charityImg} name="Благотворительность" description="Проведение благотворительных мероприятий и акций."/>
                </div>
            </div>
        </div>
    );
}

export default Directions;