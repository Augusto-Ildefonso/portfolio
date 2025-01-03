import React from 'react';
import '../styles/Home.css'
import Button from '../components/Button/Button'
import NavBar from "../components/NavBar/NavBar";
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';

export default function Home () {
    const isBigScreen = useMediaQuery({query: 'only screen and (min-width: 1500px)'});
    const isMediumScreen = useMediaQuery({query: 'only screen and (min-width: 600px) and (max-width: 1499px)'});
    const isSmallScreen = useMediaQuery({query: 'only screen and (max-width: 599px)'});

    return (
        <div className="HomePage">
            <Helmet>
                <title>Augusto Ildefonso | Portifólio</title>
            </Helmet>

            {isBigScreen && (
                <React.Fragment>
                    <NavBar currentPage='homept'/>
                    <div className="ContentAreaHomePage">
                        <article className="ContentArticle">
                            <div className='ContentLeft'>
                                <h1 id='TitleHomePage'>Olá!<br/>Eu sou o <em>Augusto</em>.</h1>
                                <span id='TextHomePage'>
                                    <p>Eu sou um programador apaixonado por engenharia de software e
                        desenvolvimento de software.</p>
                                </span>

                                <div className="ButtonContainer">
                                    <Button text='Descubra meus projetos' link='projectspt'/>
                                    <Button text='Me contate' link='contactpt'/>
                                </div>
                            </div>
                            <div className="ContentRight">
                                <img src="images/Avatar.png" alt="Avatar" className="AvatarImage"/>
                            </div>
                        </article>
                    </div>
                </React.Fragment>
            )}

            {isMediumScreen && (
                <React.Fragment>
                    <NavBar currentPage='homept'/>
                    <div className="ContentAreaHomePage">
                        <article className="ContentArticle">
                            <div className="ImageContainerArticleHome">
                                <img src="images/Avatar.png" alt="Avatar" className="AvatarImage"/>
                            </div>
                            <span id='TitleHomePage'><h1>Olá! Eu sou o <em>Augusto</em>.</h1></span>
                            <span id='TextHomePage'>
                                    <p>Eu sou um programador apaixonado por engenharia de software e
                        desenvolvimento de software.</p>
                            </span>
                            <div className="ButtonContainer">
                                <Button text='Descubra meus projetos' link='projectspt'/>
                                <Button text='Me contate' link='contactpt'/>
                            </div>
                        </article>
                    </div>
                </React.Fragment>
            )}

            {isSmallScreen && (
                <React.Fragment>
                    <Helmet>
                        <meta name="theme-color" content="black"/>
                    </Helmet>

                    <article className="ContentArticleMobile">
                        <NavBar currentPage='homept'/>
                        <div className="ImageContainerArticleHome">
                            <img src="images/Avatar.png" alt="Avatar" className="AvatarImage"/>
                        </div>
                        <span id='TitleHomePage'><h1>Olá! Eu sou o <em>Augusto</em>.</h1></span>
                        <span id='TextHomePage'>
                                <p>Eu sou um programador apaixonado por engenharia de software e
                        desenvolvimento de software.</p>
                        </span>
                        <div className="ButtonContainer">
                            <Button text='Descubra meus projetos' link='projectspt'/>
                            <Button text='Me contate' link='contactpt'/>
                        </div>
                    </article>
                </React.Fragment>
            )}


        </div>
    );
}