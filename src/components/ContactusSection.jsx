import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './styles/contactus.module.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const ContactusSection = () => {
    return (
        <section className={`page ${style.contactus}`}>
            <section className={style.logoBackground}>
                <img src="images/Pixel in purple.svg" alt="pixel" />
            </section>
            <article>
                <header>
                    <h1>نسعد بتواصلك معنا</h1>
                </header>
                <section className={style.content}>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>البريد الالكتروني</span>
                        <a href="mailto:pixelagn@gmail.com">pixelagn@gmail.com</a>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <a href="https://wa.me/+96730626247">+96730626247</a>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faXTwitter} />
                        <a href="https://twitter.com/pixelagn">@pixelagn</a>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faInstagram} />
                        <a href="https://www.instagram.com/pixelagn/">@pixelagn</a>
                    </div>
                </section>
            </article>

            <form className='center'>
                <div>
                    <label htmlFor="name">الاسم</label>
                    <input type="text" name="name" required placeholder='أحمد'/>
                </div>

                <div>
                    <label htmlFor="email">البريد الالكتروني</label>
                    <input type="email" name="email" required placeholder='example@email.com' />
                </div>

                <div>
                    <label htmlFor="title">الموضوع</label>
                    <input type="text" name="title" required placeholder='تصميم موقع' />
                </div>

                <div>
                    <label htmlFor="message">الرسالة</label>
                    <textarea type="text" name="message" required placeholder='التفاصيل'></textarea>
                </div>

                <div className={`btn-container`}>
                    <input className={`btn ${style.btn}`} type="submit" name="submit" value="ارسال" />
                </div>
            </form>

            <section className={style.contentForMedia}>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>البريد الالكتروني</span>
                    <a href="mailto:pixelagn@gmail.com">pixelagn@gmail.com</a>
                </div>

                <div>
                    <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
                </div>

                <div>
                    
                    <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
                </div>

                <div>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </section>
        </section>
    );
}

export default ContactusSection;