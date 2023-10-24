import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './styles/navbar.module.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <header className={style.copmonent}>
            <nav className={style.navbar}>
                <section className={`center ${style.logo}`}>
                    <img src="/images/pixel.svg" alt="pixel" />
                </section>
                <ul className={style.list}>
                    <li className={style.bar}>
                        <FontAwesomeIcon icon={faBars} />
                    </li>

                    <section>
                        <li className={`center ${style.logo}`}>
                            <img src="/images/pixel.svg" alt="pixel" />
                        </li>

                        <li className={`${style.link}`}>
                            <a href="#" className={`center`}>الرئيسية</a>
                        </li>

                        <li className={`${style.link}`}>
                            <a href="#" className={`center`}>بكسل؟</a>
                        </li>

                        <li className={`${style.link}`}>
                            <a href="#" className={`center`}>أعمالنا</a>
                        </li>
                    </section>
                </ul>

                <section className={`center btn-container ${style.btnContainer}`}>
                    <a href='#' className={`btn`}>تواصل معنا</a>
                </section>
            </nav>
        </header>
    );
}

export default Navbar;