import './Footer.css';
import classes from './Links.module.css';
import footerIMG from './../../assets/footerImage/sss.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';
import { NavLink, Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer ZenKaku">
            <div className="container">
                <div className="footerBox">
                    <div className="footerIcon">
                        <div className="icon">
                            <Link to="/">
                                <img src={footerIMG} alt="icon" />
                            </Link>
                        </div>
                        <div className="info">
                            <div className="infoName">Essedis</div>
                            <div className="infoDescription">Общественная <br/> ассоциация</div>
                        </div>
                    </div>

                    <div className={classes.links}>
                        <div>
                            <NavLink to="/news" className = { navData => navData.isActive ? classes.active : classes.div}>Новости </NavLink>
                        </div>
                        <div>
                            <NavLink to="/about" className = { navData => navData.isActive ? classes.active : classes.div}>О нас </NavLink>
                        </div>
                        <div>
                            <NavLink to="/contacts" className = { navData => navData.isActive ? classes.active : classes.div}>Контакты </NavLink>
                        </div>
                        <div>
                            <NavLink to="/gallery" className = { navData => navData.isActive ? classes.active : classes.div}>Галерея </NavLink>
                        </div>
                    </div>

                    <div className="socialNetworks">
                        <div className="info">
                            Все права защищены
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
            </div>
        </div>
    )
}

export default Footer;