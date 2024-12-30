import React from 'react';
import '../styles/Home.css'
import Button from '../components/Button/Button'
import NavBar from "../components/NavBar/NavBar";
import {Helmet} from "react-helmet";

export default function HomePT () {
    return (
        <div className="HomePage">
            <Helmet>
                <title>Augusto Ildefonso | Portifólio</title>
            </Helmet>
            <div className="ContentArea">
                <NavBar currentPage='homept'/>

                <article className="ContentArticle">
                    <div className='ContentLeft'>
                        <h1 id='TitleHomePage'>
                            Olá!
                            <br/>
                            Eu sou o <em>Augusto</em>.
                        </h1>
                        <p id='TextHomePage'>Eu sou um programador apaixonado por engenharia de software e
                            desenvolvimento de software</p>

                        <div className="ButtonContainer">
                            <Button text='Descubra meus projetos' link='projectspt'/>
                            <Button text='Me contate' link='contactpt'/>
                        </div>
                    </div>

                    <div className='ContentRight'>
                        <img src="images/Avatar.png" alt="Avatar" className="AvatarImage"/>
                    </div>

                </article>

            </div>
        </div>
    );
}