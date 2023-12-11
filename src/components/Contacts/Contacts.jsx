import React from "react";
import './Contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';


const Contacts = () => {
    return (
        <div className="contacts">
            <div className="container">
                <div className="wrapper__contacts SegoeUI">
                    <div className="informationForCompany">
                        ИНФОРМАЦИЯ ОБ ОРГАНИЗАЦИИ
                    </div>
                    <ul className="information">
                        <li>1.Название организации: Общественная ассоциация «Essedis» </li>
                        <li>2.Юридический адрес: Республика Молдова; АТО Гагаузия (Gagauz Yeri), г. Чадыр-Лунга, ул. Победы, 48.</li>
                        <li>3.Фактический адрес: РМ; АТО Гагаузия, г. Чадыр-Лунга, ул. Ленина, 91.</li>
                        <li>4.Контактная информация:</li>
                    </ul>
                    <div className="phone">
                    <FontAwesomeIcon icon={faPhone} size="2sm" color='#F26627' /> <a href="tel:+(373)79 79 11 06">Тел.: +(373)79 79 11 06</a> 
                    </div>
                    <div className="mail">
                    <FontAwesomeIcon icon={faEnvelope} size="2sm" color='#F26627'/>  <a href="mailto:ngo.essedis@gmail.com">E-mail: ngo.essedis@gmail.com</a> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;