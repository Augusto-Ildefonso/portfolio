import React from "react";
import NavBar from "../components/NavBar/NavBar";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import '../styles/Projects.css'
import {Helmet} from "react-helmet";

export default function ProjectPT (){
    return (
        <div className="ProjectsPage">
            <Helmet>
                <title>Projetos | Augusto Ildefonso</title>
            </Helmet>
            <div className='ContentArea'>
                <NavBar currentPage='projectspt'/>

                <h1 className='PageTitle'>Projetos</h1>

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
        </div>
    );
}