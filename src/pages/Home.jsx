import style from './styles/home.module.css';
import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Details from '../components/Details';
import OurWay from '../components/OurWay';
import ProjectsSection from '../components/ProjectsSection';
import ContactusSection from '../components/ContactusSection';
import { useEffect } from 'react';
import Scroll, { Element } from 'react-scroll';

const ScrollLink = Scroll.Link;

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
            <Element id='/' name='pixel'>
                <Hero />
            </Element>

            <Element id='about' name='about'>
                <AboutSection />
            </Element>

            <Element id='services' name='sevices'>
                <Services />
            </Element>

            <section className={`center ${style.partners}`}>
                <header>
                    <h1>لنكن شركاء نجاح</h1>
                </header>

                <section className={`btn-container`}>
                    <ScrollLink className={`btn ${style.btn}`} to='contact-us' spy={true} smooth={true} duration={500}>
                        أطلب موقعك
                    </ScrollLink>
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

            <Element id='projects' name='projects'>
                <ProjectsSection />
            </Element>

            <Element id='contact-us' name='contact-us'>
                <ContactusSection />
            </Element>

        </main>
    );
}

export default Home;