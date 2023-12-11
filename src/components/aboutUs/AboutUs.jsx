import React, {useContext} from "react";
import './AboutUs.css';
import Persons from "./Persons";
import { AboutUsCreatorContainer } from "./CreatorAbout/AboutUsCreatorContainer";
import AdminContext from "../../redux/adminContext";
const images = require.context('../../assets/aboutUsImage', true);

const AboutUs = (props) => {
    
    const isAdmin = useContext(AdminContext);

    return (
        <div className="aboutAs">
            <div className="container">
                <div className="assedis__discription">
                    <div className="wrapperForDescriptionAndLogo">
                        <div className="box__image">
                            <img src={images("./imageAs.png")} alt="" />
                        </div>
                        <div className="box__text AboutAs">
                            <p className="item">Общественная ассоциация «Essedis» является некоммерческой,
                                независимой от органов публичной власти организацией и имеет
                                статус республиканского общественного объединения в виде Ассоциации
                            </p>
                            <p className="item"><span className="colorAssedis AboutAs">ОА «Essedis»</span> является юридическим лицом с момента
                                государственной регистрации, имеет свою печать и символику.
                            </p>
                            <p className="item">
                                <span className="colorAssedis AboutAs">ОА «Essedis»</span> может способствовать своей деятельностью органам публичной власти
                                в реализации общественно значимых и общественно-полезных целей и задач и действует
                                в целях реализации и защиты социальных, культурных, гражданских и иных прав и свобод.
                            </p>
                            <p className="item">
                                <span className="colorAssedis AboutAs">ОА «Essedis»</span> преследует нравственные,
                                социальные, просветительские, культурные и иные общественно-полезные цели.
                            </p>
                        </div>
                    </div>
                    <div className="scope">
                        <div className="scope__title AboutAs">
                            Цель организации
                        </div>
                        <div className="scope__title-text AboutAs">
                            Консолидация усилий сообщества для решения проблем жителей АТО Гагаузии и Республики
                            Молдова и поддержка инициатив, способствующих реализации прав
                            граждан на достойное проживание, сохранение и укрепление здоровья, социальную защиту.
                        </div>
                    </div>
                    <div className="wrapper__team">
                        <div className="team AboutAs">
                            Команда
                        </div>
                        <div className="fullTeam">
                            <Persons aboutUsData={props.aboutUsData} onHandleDelete={props.onHandleDelete} onHandleUpdate={props.onHandleUpdate}/>
                        </div>
                    </div>
                    <div className="wrapper-partners">
                        <div className="ourPartners">
                            <div className="partners">
                                Наши партнеры
                            </div>
                        </div>
                        <div className="fullPartners">
                            <div className="logoPartners"><img src={images('./Pharos.png')} alt="" /></div>
                            <div className="logoPartners"><img src={images('./RofM.png')} alt="" /></div>
                            <div className="logoPartners"><img src={images('./YouthofGagauzia.png')} alt="" /></div>
                        </div>
                    </div>
                    <div className="wrapper-сharter">
                        <div className="ourCharter">
                            <div className="сharter">
                                Наш устав
                            </div>
                        </div>
                        <div className="documentation">
                            <div className="logoPartners"><img src={images('./document.png')} alt="" /></div>
                        </div>
                    </div>
                </div>
                {isAdmin && <AboutUsCreatorContainer idUpdate={props.idUpdate} isShowForm={props.isShowForm}/>}
            </div>
        </div>
    )
}

export default AboutUs;