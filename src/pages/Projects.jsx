import React from "react";
import NavBar from "../components/NavBar/NavBar";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import '../styles/Projects.css'
import {Helmet} from "react-helmet";

export default function Project (){
    return (
        <div className="ProjectsPage">
            <Helmet>
                <title>Projects | Augusto Ildefonso</title>
            </Helmet>
            <div className='ContentArea'>
                <NavBar currentPage='projects'/>

                <h1 className='PageTitle'>Projects</h1>

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
        </div>
    );
}