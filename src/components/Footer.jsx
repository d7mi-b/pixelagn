import style from "./styles/footer.module.css";

const Footer = () => {
    return (
        <footer className={`center ${style.footer}`}>
            <header>
                <img src="images/pixel.svg" alt="pixel" />
                <h3>وكالة إبداعية مهتمة بتصميم وتطوير المواقع الإلكترونية </h3>
            </header>

            <p className={style.copyright}>جميع الحقوق محفوظة &copy; وكالة بكسل 2023</p>
        </footer>
    );
}

export default Footer;