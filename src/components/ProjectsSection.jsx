import style from './styles/project.module.css';

let projects = [
    {
        id: 1,
        img: 'images/project1.png'
    },
    {
        id: 2,
        img: 'images/project2.png'
    }
];

const ProjectsSection = () => {
    return (
        <section className={`page center ${style.projects}`}>
            <header>
                <h1>أعمالنا</h1>
            </header>

            <section className={style.projectsContainer}>
                {
                    projects.map(e => {
                        return (
                            <article className={style.project} key={e.id}>
                                <img src={e.img} alt={`project-${e.id}`} />
                            </article>
                        );
                    })
                }
            </section>
        </section>
    );
}

export default ProjectsSection;