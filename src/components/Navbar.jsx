import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './styles/navbar.module.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import scroll from 'react-scroll';

const ScrollLink = scroll.Link;

const Navbar = () => {
    return (
        <header className={style.copmonent}>
            <nav className={style.navbar}>
                <section className={`center ${style.logo}`}>
                    <img src="/images/Pixel in white.png" alt="pixel" />
                </section>
                <ul className={style.list}>
                    <li className={style.bar}>
                        <FontAwesomeIcon icon={faBars} />
                    </li>

                    <section>
                        <li className={`center ${style.logo}`}>
                            <img src="/images/Pixel in white.png" alt="pixel" />
                        </li>

                        <li className={`${style.link}`}>
                            <ScrollLink className='center' to='pixel' spy={true} smooth={true} duration={500}>
                                الرئيسية
                            </ScrollLink>
                        </li>

                        <li className={`${style.link}`}>
                            <ScrollLink className='center' to='about' spy={true} smooth={true} duration={500}>
                                بكسل؟
                            </ScrollLink>
                        </li>

                        <li className={`${style.link}`}>
                            <ScrollLink className='center' to='services' spy={true} smooth={true} duration={500}>
                                خدماتنا
                            </ScrollLink>
                        </li>

                        <li className={`${style.link}`}>
                            <ScrollLink className='center' to='projects' spy={true} smooth={true} duration={500}>
                                أعمالنا
                            </ScrollLink>
                        </li>
                    </section>
                </ul>

                <section className={`center btn-container ${style.btnContainer}`}>
                    {/* <ScrollLink className='btn' to='contact-us' spy={true} smooth={true} duration={500}>
                        تواصل معنا
                    </ScrollLink> */}
                    <a href="https://wa.me/+96730626247" target='_blank' className='btn'>تواصل معنا</a>
                </section>
            </nav>
        </header>
    );
}

export default Navbar;