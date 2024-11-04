import style from "./styles/footer.module.css";

const Footer = () => {
    return (
        <footer className={`center ${style.footer}`}>
            <section>
                <img src="images/Pixel in white.png" alt="pixel" />
                <p>وكالة إبداعية مهتمة بتصميم وتطوير المواقع الإلكترونية </p>
            </section>

            <p className={style.copyright}>جميع الحقوق محفوظة &copy; وكالة بكسل { new Date().getFullYear() }</p>
        </footer>
    );
}

export default Footer;