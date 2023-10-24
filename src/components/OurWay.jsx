import { useEffect } from "react";
import style from "./styles/ourWay.module.css";

const ways = [
    "فهم متطلبات العميل",
    "تحليل تجربة المستخدم",
    "تصميم الواجهات",
    "البرمجة",
    "الاختبار",
    "العرض الاولي",
    "التسليم"
];

function addAnimation() {
            var elements = document.querySelectorAll(`.${style.way}`);
            for (var i = 0; i < elements.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = elements[i].getBoundingClientRect().top;
                var elementVisible = 0;

                if (elementTop < windowHeight - elementVisible) {
                    elements[i].classList.add(style.animationShow);
                }
            }
        }

const OurWay = () => {
    useEffect(() => {
        window.addEventListener('scroll', addAnimation)
    }, [])

    return (
        <section className={`center page ${style.ourWay}`}>
            <header>
                <h1>كيف نعمـل؟</h1>
            </header>

            <section className={style.waysContainer}>
                {
                    ways.map((e, i) => {
                        return (
                            <article className={`center ${style.way}`} key={`way-${i + 1}`}>
                                <p>{i + 1}</p>
                                <header>
                                    <h2>{e}</h2>
                                </header>
                            </article>
                        );
                    })
                }
            </section>
        </section>
    );
}

export default OurWay;