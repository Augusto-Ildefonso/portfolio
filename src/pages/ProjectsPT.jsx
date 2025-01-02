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
                <title>Projetos | Augusto Ildefonso</title>
            </Helmet>

            {isBigScreen && (
                <div className='ContentAreaProjectPage'>
                    <NavBar currentPage='projectspt'/>

                    <h1 className='ProjectsPageTitle'>Projetos</h1>

                    <article className='CardsArea'>
                        <ProjectCard
                            image={'images/To-do_List_App.png'}
                            title={'App de Tarefas'}
                            content={'Organize sua rotina catalogando suas tarefas em quatro categorias: atrasadas, sem prazo, em andamento e concluídas. Construídas com React Native e NodeJS.'}
                            githubText={'Veja no GitHub'}
                            link={'https://github.com/Augusto-Ildefonso/Projeto-App-de-Tarefas'}
                        />

                        <ProjectCard
                            image={'https://raw.githubusercontent.com/Augusto-Ildefonso/Catraca-RFID/refs/heads/main/figs/circuito_rfid.jpg'}
                            title={'Catraca RFID'}
                            content={'Controle o acesso ao seu edifício com cartões RFID e essa catraca. O software foi construído com C++.'}
                            githubText={'Veja no GitHub'}
                            link={'https://github.com/Augusto-Ildefonso/Catraca-RFID'}
                        />

                    </article>
                </div>
            )}

            {isMediumScreen && (
                <div className='ContentAreaProjectPage'>
                    <NavBar currentPage='projectspt'/>

                    <h1 className='ProjectsPageTitle'>Projetos</h1>

                    <div className='CardsArea'>
                        <ProjectCard
                            image={'images/To-do_List_App.png'}
                            title={'App de Tarefas'}
                            content={'Organize sua rotina catalogando suas tarefas em quatro categorias: atrasadas, sem prazo, em andamento e concluídas. Construídas com React Native e NodeJS.'}
                            githubText={'Veja no GitHub'}
                            link={'https://github.com/Augusto-Ildefonso/Projeto-App-de-Tarefas'}
                        />

                        <ProjectCard
                            image={'https://raw.githubusercontent.com/Augusto-Ildefonso/Catraca-RFID/refs/heads/main/figs/circuito_rfid.jpg'}
                            title={'Catraca RFID'}
                            content={'Controle o acesso ao seu edifício com cartões RFID e essa catraca. O software foi construído com C++.'}
                            githubText={'Veja no GitHub'}
                            link={'https://github.com/Augusto-Ildefonso/Catraca-RFID'}
                        />

                    </div>

                </div>
            )}

            {isSmallScreen && (
                <React.Fragment>
                    <Helmet>
                        <meta name="theme-color" content="black"/>
                    </Helmet>

                    <div className='ContentAreaProjectPage'>
                        <NavBar currentPage='projectspt'/>

                        <h1 className='ProjectsPageTitle'>Projetos</h1>

                        <div className='CardsArea'>
                            <ProjectCard
                                image={'images/To-do_List_App.png'}
                                title={'App de Tarefas'}
                                content={'Organize sua rotina catalogando suas tarefas em quatro categorias: atrasadas, sem prazo, em andamento e concluídas. Construídas com React Native e NodeJS.'}
                                githubText={'Veja no GitHub'}
                                link={'https://github.com/Augusto-Ildefonso/Projeto-App-de-Tarefas'}
                            />

                            <ProjectCard
                                image={'https://raw.githubusercontent.com/Augusto-Ildefonso/Catraca-RFID/refs/heads/main/figs/circuito_rfid.jpg'}
                                title={'Catraca RFID'}
                                content={'Controle o acesso ao seu edifício com cartões RFID e essa catraca. O software foi construído com C++.'}
                                githubText={'Veja no GitHub'}
                                link={'https://github.com/Augusto-Ildefonso/Catraca-RFID'}
                            />

                        </div>

                    </div>
                </React.Fragment>
            )}


        </div>
    );
}