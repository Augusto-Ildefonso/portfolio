import React from 'react';
import NavBar from "../components/NavBar/NavBar";
import '../styles/AboutMe.css'
import { HiArrowLongRight, HiArrowDown } from "react-icons/hi2";
import SocialsCard from "../components/SocialsCard/SocialsCard";
import {Helmet} from "react-helmet";

export default function AboutMe() {
    return (
        <div className="AboutMePage">
            <Helmet>
                <title>Sobre Mim | Augusto Ildefonso</title>
            </Helmet>
            <div className="ContentArea">

                <NavBar currentPage='aboutmept'/>

                <article className='Introduction'>
                    <div className='TextAreaIntroduction'>
                        <h1 id='TitleAboutMePage'>
                            Sobre mim
                        </h1>
                        <p id='TextHomePage'>Meu nome é Augusto Fernandes Ildefonso e eu sou um estudante de ciência da
                            computação com experiência em aplicações web e aplicativos mobile. Eu sou um programador
                            competente e de rápido aprendizado que adora ajudar as pessoas a construírem seus
                            sonhos.</p>
                        <a
                            id='LinkCV'
                            href='download/CV - Augusto Ildefonso.pdf'
                            onMouseEnter={(e) => {
                                e.currentTarget.querySelector('.LinkIcon').style.fill = '#fff'; // Ajusta a cor no hover
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.querySelector('.LinkIcon').style.fill = '#B9EEE9'; // Restaura a cor
                            }}
                            download
                        >Baixar CV
                            <HiArrowLongRight className="LinkIcon"/>
                        </a>
                    </div>

                    <div className="ImageAreaIntroduction">
                        <div className="ImageBackgroundAboutMePage">
                            <img src="images/Foto_EU.png" alt="Avatar" className="AvatarImage"/>
                        </div>

                        <SocialsCard className='SocialsCard'/>
                    </div>

                </article>

                <div className="SeeMore">
                    <span><h1>Veja mais</h1></span>
                    <HiArrowDown className="ArrowIcon"/>
                </div>

                <article className="History">

                    <section className='FirstSteps'>

                        <div className='Text'>
                            <h1 className='pt'>Primeiros Passos</h1>
                            <p>
                                Eu tive meu primeiro contato com programação durante meu ensino médio em 2020.
                                <br/><br/>
                                Eu estava, inicialmente, planejando me tornar um engenheiro elétrico, mas quando
                                descobri o mundo da computação eu me apaixonei por ele e decidi cursar ciência da
                                computação. Entretanto, antes mesmo de terminar o ensino médio, eu comecei a fazer
                                cursos de programação e tive meu primeiro contato com Python.
                                <br/><br/>
                                Depois disso, fiz outros cursos sobre HTML e CSS e comecei minha jornada em
                                desenvolvimento web. Então, finalmente, fui para a faculdade, onde pude aprofundar meus
                                conhecimentos.
                            </p>
                        </div>

                        <img src='images/AboutMe_1st_Image.png' className='ImageHistory1'/>
                    </section>

                    <section className='MyExperience'>

                        <img src='images/AboutMe_2nd_Image.png' className='ImageHistory2'/>

                        <div className='Text'>
                            <h1 className='pt'>Minhas Experiências</h1>
                            <p>
                                Atualmente, estou trabalhando no ICMC Júnior, a empresa júnior da minha faculdade, onde
                                melhorei minhas habilidades de front-end e back-end, enquanto colaborava com outros
                                membros para entregar aplicações web ou mobiles.
                                <br/><br/>
                                Eu tenho uma sólida fundação em Javascript, Python e C e também trabalhei com frameworks
                                modernos como React. Em relação ao back-end, tenho experiência com NodeJS e MongoDB para
                                bases de dados. Eu sigo as melhores práticas para cada linguagem, de modo que possa
                                entregar um código limpo e eficiente.
                            </p>
                        </div>

                    </section>

                    <section className='TechStack'>
                        <div className='Text'>
                            <h1 className='pt'>Tech Stack</h1>
                            <ul>
                                <li>Languages: C, Python, Javascript, HTML, CSS, NodeJS</li>

                                <li>Frameworks: React, React-Native</li>

                                <li>Database: MongoDB</li>

                                <li>System version control: Git</li>

                                <li>Design: Figma</li>
                            </ul>
                        </div>

                        <img src='images/AboutMe_3rd_Image.png' className='ImageHistory3'/>

                    </section>

                </article>
            </div>
        </div>
    );
}