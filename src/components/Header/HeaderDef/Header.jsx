import React, { useState } from "react";
import './headerStyle.css';
import image from "./../../../assets/headerImage/sss.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';
import classes from './../../footer/Links.module.css';
import ScrollToTopButton from "../../../logicComponents/ScrollToTopButton";
import EmailForm from "./EmailForm";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header ZenKaku">
            <div className="container">
                <div className="wrapper__header">
                    <div className="footerIcon">
                        <div className="icon">
                            <Link to="/">
                                <img src={image} alt="icon" />
                            </Link>
                        </div>
                        <div className="info">
                            <div className="infoName">Essedis</div>
                            <div className="infoDescription">Общественная <br /> ассоциация</div>
                        </div>
                    </div>
                    <div className={classes.links}>
                        <div>
                            <NavLink to="/news" className={navData => navData.isActive ? classes.active : classes.div}>Новости </NavLink>
                        </div>
                        <div>
                            <NavLink to="/about" className={navData => navData.isActive ? classes.active : classes.div}>О нас </NavLink>
                        </div>
                        <div>
                            <NavLink to="/contacts" className={navData => navData.isActive ? classes.active : classes.div}>Контакты </NavLink>
                        </div>
                        <div>
                            <NavLink to="/gallery" className={navData => navData.isActive ? classes.active : classes.div}>Галерея </NavLink>
                        </div>
                    </div>
                    <div className="box__socialNetworks">
                        <div className="help">
                            <button className="ZenKaku" onClick={() => setIsOpen(true)}>Напиши нам</button>
                            {isOpen && (
                                <div className="pop_up" id="pop_up">
                                    <div className="pop_up_container">
                                        <div className="pop_up_body">
                                            <h3>Служба поддержки</h3>
                                            <p>Для связи заполните следующие поля</p>
                                            <EmailForm/>
                                            <button className="pop_up_close" onClick={() => setIsOpen(false)}>
                                                <FontAwesomeIcon icon={faXmark} size="xl" color='#F26627' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="wrapper__icon">
                            <div className="header__burger" >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="box__iconSocial">
                                <NavLink target="_blank" to="https://ru-ru.facebook.com/" className={navData => navData.isActive ? classes.active : classes.div}>
                                    <div className='icon_social'><FontAwesomeIcon icon={faFacebook} size="lg" color='#325D79' /></div>
                                </NavLink>
                                <NavLink target="_blank" to="https://vk.com/" className={navData => navData.isActive ? classes.active : classes.div}>
                                    <div className='icon_social'><FontAwesomeIcon icon={faVk} size="lg" color='#325D79' /></div>
                                </NavLink>
                                <NavLink target="_blank" to="https://www.instagram.com/" className={navData => navData.isActive ? classes.active : classes.div}>
                                    <div className='icon_social'><FontAwesomeIcon icon={faInstagram} size="lg" color='#325D79' /></div>
                                </NavLink>
                                <NavLink target="_blank" to="https://web.telegram.org/" className={navData => navData.isActive ? classes.active : classes.div}>
                                    <div className='icon_social'><FontAwesomeIcon icon={faTelegram} size="lg" color='#325D79' /></div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <ScrollToTopButton />
                </div>
            </div>
            <script src="https://kit.fontawesome.com/e5fe0dfbf5.js" crossorigin="anonymous"></script>

        </div>

    )

}
export default Header;