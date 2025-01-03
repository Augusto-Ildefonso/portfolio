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
                <title>Augusto Ildefonso | Portifolio</title>
            </Helmet>

                {isBigScreen && (
                    <React.Fragment>
                        <NavBar currentPage='home'/>
                        <div className="ContentAreaHomePage">
                            <article className="ContentArticle">
                                <div className='ContentLeft'>
                                    <h1 id='TitleHomePage'>Hi!<br/>I'm <em>Augusto</em>.</h1>
                                    <span id='TextHomePage'>
                                    <p>I am a programmer passionate about software engineering and software
                                    development.</p>
                                </span>

                                    <div className="ButtonContainer">
                                        <Button text='Discover my projects' link='projects'/>
                                        <Button text='Message me' link='contact'/>
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
                        <NavBar currentPage='home'/>
                        <div className="ContentAreaHomePage">

                            <article className="ContentArticle">
                                <div className="ImageContainerArticleHome">
                                    <img src="images/Avatar.png" alt="Avatar" className="AvatarImage"/>
                                </div>
                                <span id='TitleHomePage'><h1>Hi! I'm <em>Augusto</em>.</h1></span>
                                <span id='TextHomePage'>
                                    <p>I am a programmer passionate about software engineering and software
                                    development.</p>
                            </span>
                                <div className="ButtonContainer">
                                    <Button text='Discover my projects' link='projects'/>
                                    <Button text='Message me' link='contact'/>
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
                        <NavBar currentPage='home'/>
                        <div className="ImageContainerArticleHome">
                            <img src="images/Avatar.png" alt="Avatar" className="AvatarImage"/>
                        </div>
                        <span id='TitleHomePage'><h1>Hi! I'm <em>Augusto</em>.</h1></span>
                        <span id='TextHomePage'>
                                <p>I am a programmer passionate about software engineering and software
                                development.</p>
                        </span>
                        <div className="ButtonContainer">
                            <Button text='Discover my projects' link='projects'/>
                            <Button text='Message me' link='contact'/>
                        </div>
                    </article>
                </React.Fragment>
            )}


        </div>
    );
}