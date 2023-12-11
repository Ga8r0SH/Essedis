import React from "react";
import './LearnMore.css';


const Learnmore = () => {
    return (
        <div className="container">
            <div className="wrapper__learnmore">
                <div className="learnmore__name">
                    Рады приветствовать именно тебя!
                </div>
                <div className="learnmore__info SegoeUI">
                    Присоединяйся к волонтерскому движению. Участвуй в экологических акциях.
                </div>
                <div className="learn__more-button">
                    <a className='buttonMore' href="./news">Узнать больше</a>
                </div>
            </div>
        </div>
    )
}


export default Learnmore;