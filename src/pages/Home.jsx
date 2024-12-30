import React from 'react';
import '../styles/Home.css'
import Button from '../components/Button/Button'
import NavBar from "../components/NavBar/NavBar";
import { Helmet } from 'react-helmet'

export default function Home () {
    return (
        <div className="HomePage">
            <Helmet>
                <title>Augusto Ildefonso | Portifolio</title>
            </Helmet>
            <div className="ContentArea">

                <NavBar currentPage='home'/>

                <article className="ContentArticle">

                    <div className='ContentLeft'>
                        <h1 id='TitleHomePage'>
                            Hi!
                            <br/>
                            I'm <em>Augusto</em>.
                        </h1>
                        <p id='TextHomePage'>I am a programmer passionate about software engineering and software
                            development.</p>
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
        </div>
    );
}