import style from './styles/hero.module.css';

const Hero = () => {
    return (
        <section className={style.hero}>
            <section className={style.animationImg}>
                <img src="images/background hero.png" alt="animation" />
            </section>
            <header>
                <h1>
                    نطور مواقع رهيبة
                </h1>
                <p>تحتاج موقع شخصي لك او لمشروعك؟ </p>
            </header>

            <section className={`center ${style.btnContainer}`}>
                <a href='#' className={`btn ${style.btn}`}>اطلب موقعك</a>
            </section>
        </section>
    );
}

export default Hero;