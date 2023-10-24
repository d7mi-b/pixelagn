import { useEffect } from 'react';
import style from './styles/services.module.css';

const Services = () => {

    return (
        <section className={`page ${style.services}`}>
            <article>
                <header>
                    <h1>خدماتنا</h1>
                </header>

                <ul>
                    <li>
                        <span>ui/ux</span> تحليل وتصميم واجهات المستخدم
                    </li>

                    <li>
                        <span>&lt;/&gt;</span> تطوير المواقع الالكترونية
                    </li>
                </ul>
            </article>

            <section className={`center ${style.img}`} id='imgContainer'>
                <img src="/images/services.png" alt="Services" />
            </section>
        </section>
    );
}

export default Services;