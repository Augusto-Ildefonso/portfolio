import React from "react";
import NavBar from "../components/NavBar/NavBar";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import '../styles/Projects.css'
import {Helmet} from "react-helmet";
import {useMediaQuery} from "react-responsive";

export default function Project (){
    const isBigScreen = useMediaQuery({query: 'only screen and (min-width: 1500px)'});
    const isMediumScreen = useMediaQuery({query: 'only screen and (min-width: 600px) and (max-width: 1499px)'});
    const isSmallScreen = useMediaQuery({query: 'only screen and (max-width: 599px)'});

    return (
        <div className="ProjectsPage">
            <Helmet>
                <title>Projects | Augusto Ildefonso</title>
            </Helmet>

            {isBigScreen && (
                <React.Fragment>
                    <NavBar currentPage='projects'/>
                    <div className='ContentAreaProjectPage'>
                        <h1 className='ProjectsPageTitle'>Projects</h1>

                        <article className='CardsArea'>
                            <ProjectCard
                                image={'images/To-do_List_App.png'}
                                title={'To-do List App'}
                                content={'Organize your routine by cataloging your tasks in four categories: missed, no deadline, on progress and finished. Build with React Native and NodeJS.'}
                                githubText={'See it on GitHub'}
                                link={'https://github.com/Augusto-Ildefonso/Projeto-App-de-Tarefas'}
                            />

                            <ProjectCard
                                image={'https://raw.githubusercontent.com/Augusto-Ildefonso/Catraca-RFID/refs/heads/main/figs/circuito_rfid.jpg'}
                                title={'RFID Turnstile'}
                                content={'Control the access of your building with RFID Cards by using this turnstile. The software was built with C++.'}
                                githubText={'See it on GitHub'}
                                link={'https://github.com/Augusto-Ildefonso/Projeto-App-de-Tarefas'}
                            />

                        </article>
                    </div>
                </React.Fragment>
            )}

            {isMediumScreen && (
                <React.Fragment>
                    <NavBar currentPage='projects'/>
                    <div className='ContentAreaProjectPage'>
                        <h1 className='ProjectsPageTitle'>Projects</h1>

                        <div className='CardsArea'>
                            <ProjectCard
                                image={'images/To-do_List_App.png'}
                                title={'To-do List App'}
                                content={'Organize your routine by cataloging your tasks in four categories: missed, no deadline, on progress and finished. Build with React Native and NodeJS.'}
                                githubText={'See it on GitHub'}
                                link={'https://github.com/Augusto-Ildefonso/Projeto-App-de-Tarefas'}
                            />

                            <ProjectCard
                                image={'https://raw.githubusercontent.com/Augusto-Ildefonso/Catraca-RFID/refs/heads/main/figs/circuito_rfid.jpg'}
                                title={'RFID Turnstile'}
                                content={'Control the access of your building with RFID Cards by using this turnstile. The software was built with C++.'}
                                githubText={'See it on GitHub'}
                                link={'https://github.com/Augusto-Ildefonso/Projeto-App-de-Tarefas'}
                            />

                        </div>

                    </div>
                </React.Fragment>
            )}

            {isSmallScreen && (
                <React.Fragment>
                    <Helmet>
                        <meta name="theme-color" content="black"/>
                    </Helmet>

                    <div className='ContentAreaProjectPage'>
                        <NavBar currentPage='projects'/>

                        <h1 className='ProjectsPageTitle'>Projects</h1>

                        <div className='CardsArea'>
                            <ProjectCard
                                image={'images/To-do_List_App.png'}
                                title={'To-do List App'}
                                content={'Organize your routine by cataloging your tasks in four categories: missed, no deadline, on progress and finished. Build with React Native and NodeJS.'}
                                githubText={'See it on GitHub'}
                                link={'https://github.com/Augusto-Ildefonso/Projeto-App-de-Tarefas'}
                            />

                            <ProjectCard
                                image={'https://raw.githubusercontent.com/Augusto-Ildefonso/Catraca-RFID/refs/heads/main/figs/circuito_rfid.jpg'}
                                title={'RFID Turnstile'}
                                content={'Control the access of your building with RFID Cards by using this turnstile. The software was built with C++.'}
                                githubText={'See it on GitHub'}
                                link={'https://github.com/Augusto-Ildefonso/Projeto-App-de-Tarefas'}
                            />

                        </div>

                    </div>
                </React.Fragment>
            )}


        </div>
    );
}