import style from './styles/home.module.css';
import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Details from '../components/Details';
import OurWay from '../components/OurWay';
import ProjectsSection from '../components/ProjectsSection';
import ContactusSection from '../components/ContactusSection';
import { useEffect } from 'react';

function addAnimation() {
    var elements = document.querySelectorAll('#mockups');
    for (var i = 0; i < elements.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = elements[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            elements[i].classList.add(style.slide_out_bck_center);
        }
    }
}

const Home = () => {
    useEffect(() => {
        window.addEventListener('scroll', addAnimation)
    }, [])

    return (
        <main>
            <Hero />

            <AboutSection />

            <Services />

            <section className={`center ${style.partners}`}>
                <header>
                    <h1>لنكن شركاء نجاح</h1>
                </header>

                <section className={`btn-container`}>
                    <a href="#" className={`btn ${style.btn}`}>أطلب موقعك</a>
                </section>
            </section>

            <Details />

            <section className={`center page ${style.mockup}`}>
                <div id='mockups'>
                    <img src="images/mockup-front.png" alt="mockup front pixel" />
                    <img src="images/phone-mocup.png" alt="phone mocup pixel" />
                </div>
            </section>

            <OurWay />

            <ProjectsSection />

            <ContactusSection />

        </main>
    );
}

export default Home;