import style from "./styles/aboutSection.module.css";

const AboutSection = () => {
    return (
        <section className={`page center ${style.about}`}>
            <article>
                <header>
                    <h1>بكسـل؟</h1>
                </header>

                <p>
                    وكالة إبداعية مهتمة بتصميم وتطوير المواقع الإلكترونية ، نسعى دائما إلى تطوير
                    مواقع احترافية ذات تصاميم عصرية وتجربة مستخدم فريدة من نوعها.
                </p>
            </article>
        </section>
    );
}

export default AboutSection;