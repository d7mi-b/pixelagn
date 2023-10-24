import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './styles/details.module.css';
import { faMobileScreen, faPaintBrush, faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

function addAnimation() {
    var elements = document.querySelectorAll(`.${style.detailsContainer}`);
    console.log(elements)
    for (var i = 0; i < elements.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = elements[i].getBoundingClientRect().top;
        var elementVisible = 40;

        if (elementTop < windowHeight - elementVisible) {
            elements[i].classList.add(style.animationToTop);
        }
    }
}

const Details = () => {

    useEffect(() => {
        window.addEventListener('scroll', addAnimation)
    }, []) 

    return (
        <section className={`page center ${style.details}`} id='details'>
            <header>
                <h1>نهتم بكل التفاصيل</h1>
            </header>

            <section className={`${style.detailsContainer}`}>
                <article className={`center ${style.detail}`}>
                    <section className={`center ${style.icon}`}>
                        <FontAwesomeIcon icon={faPaintBrush} />
                    </section>

                    <header className={`center`}>
                        <h2>نبدع في التصميم</h2>
                    </header>
                </article>

                <article className={`center ${style.detail}`}>
                    <section className={`center ${style.icon}`}>
                        <FontAwesomeIcon icon={faPenRuler} />
                    </section>

                    <header className={`center`}>
                        <h2>موقع متناسق مع هويتك</h2>
                    </header>
                </article>

                <article className={`center ${style.detail}`}>
                    <section className={`center ${style.icon}`}>
                        <FontAwesomeIcon icon={faMobileScreen} />
                    </section>

                    <header className={`center`}>
                        <h2>موقع متجاوب مع مختلف الشاشات</h2>
                    </header>
                </article>
            </section>
        </section>
    );
}

export default Details;