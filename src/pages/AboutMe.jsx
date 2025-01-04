import React from 'react';
import NavBar from "../components/NavBar/NavBar";
import '../styles/AboutMe.css'
import { HiArrowLongRight, HiArrowDown } from "react-icons/hi2";
import SocialsCard from "../components/SocialsCard/SocialsCard";
import {Helmet} from "react-helmet";
import {useMediaQuery} from "react-responsive";

export default function AboutMe() {
    const isBigScreen = useMediaQuery({query: 'only screen and (min-width: 1500px)'});
    const isMediumScreen = useMediaQuery({query: 'only screen and (min-width: 600px) and (max-width: 1499px)'});
    const isSmallScreen = useMediaQuery({query: 'only screen and (max-width: 599px)'});

    return (
        <div className="AboutMePage">
            <Helmet>
                <title>About Me | Augusto Ildefonso</title>
            </Helmet>

            {isBigScreen && (
                <React.Fragment>
                    <NavBar currentPage='aboutme'/>
                    <div className="ContentArea">
                        <article className='Introduction'>
                            <div className="TextAreaIntroduction">
                                <h1 id='TitleAboutMePage'>
                                    About me
                                </h1>
                                <p id='TextAboutMePage'>My name is Augusto Fernandes Ildefonso and I am a computer science student
                                    with
                                    experience in web applications and mobile apps. I am an avid learner and diligent programmer
                                    who
                                    enjoys helping people build their dreams.</p>
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
                                >Download CV
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
                            <span><h1>See More</h1></span>
                            <HiArrowDown className="ArrowIcon"/>
                        </div>


                        <article className="History">

                            <section className='FirstSteps'>

                                <div className='Text'>
                                    <h1 className='en'>First Steps</h1>
                                    <p>
                                        I had my first contact with programming during my high school in 2020.
                                        <br/> <br/>
                                        I was, initially, planning to become a eletrical engineer, but when I discovered the
                                        computational world I fell in love with it and decided to pursue a degree in computer
                                        science. But even before finishing high school, I started to take online courses and had
                                        my
                                        first contact with Python.
                                        <br/> <br/>
                                        After that, I took other courses about HTML and CSS and started my journey on web
                                        development. And, finally, I head off to university, where I could deepen my knowledge.
                                    </p>
                                </div>

                                <img src='images/AboutMe_1st_Image.png' className='ImageHistory1'/>
                            </section>

                            <section className='MyExperience'>

                                <img src='images/AboutMe_2nd_Image.png' className='ImageHistory2'/>

                                <div className='Text'>
                                    <h1 className='en'>My Experience</h1>
                                    <p>
                                        I am currently working at ICMC Júnior, my university’s junior company, where I enhanced
                                        my front-end and back-end skills, while collaborating with other members to deliver web
                                        or mobile applications.
                                        <br/><br/>
                                        I have a solid foundation on Javascript, Python and C and I also worked with mordern
                                        frameworks like React. As for the back-end, I have experience with NodeJS and MongoDB
                                        for databases. I follow best practices for each language so I can deliver a clean and
                                        efficient code.
                                    </p>
                                </div>

                            </section>

                            <section className='TechStack'>
                                <div className='Text'>
                                    <h1 className='en'>Tech Stack</h1>
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
                </React.Fragment>
            )}

            {isMediumScreen && (
                <React.Fragment>
                    <NavBar currentPage='aboutme'/>
                    <div className="ContentArea">
                        <article className='Introduction'>

                            <div className="ImageAreaIntroduction">
                                <div className="ImageBackgroundAboutMePage">
                                    <img src="images/Foto_EU.png" alt="Avatar" className="AvatarImage"/>
                                </div>

                                <SocialsCard className='SocialsCard'/>
                            </div>

                            <div className="TextAreaIntroduction">
                                <h1 id='TitleAboutMePage'>
                                    About me
                                </h1>

                                <p id='TextAboutMePage'>My name is Augusto Fernandes Ildefonso and I am a computer
                                science student
                                with
                                experience in web applications and mobile apps. I am an avid learner and diligent
                                programmer
                                who
                                enjoys helping people build their dreams.</p>

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
                                >Download CV
                                    <HiArrowLongRight className="LinkIcon"/>
                                </a>
                            </div>
                        </article>

                        <article className="History">

                            <section className='FirstSteps'>

                                <h1>First Steps</h1>

                                <img src='images/AboutMe_1st_Image.png'/>

                                <div className='Text'>
                                    <p>
                                        I had my first contact with programming during my high school in 2020.
                                        <br/> <br/>
                                        I was, initially, planning to become a eletrical engineer, but when I discovered
                                        the
                                        computational world I fell in love with it and decided to pursue a degree in
                                        computer
                                        science. But even before finishing high school, I started to take online courses
                                        and had
                                        my
                                        first contact with Python.
                                        <br/> <br/>
                                        After that, I took other courses about HTML and CSS and started my journey on
                                        web
                                        development. And, finally, I head off to university, where I could deepen my
                                        knowledge.
                                    </p>
                                </div>

                            </section>

                            <section className='MyExperience'>

                                <h1>My Experience</h1>

                                <img src='images/AboutMe_2nd_Image.png' className='ImageHistory2'/>

                                <div className='Text'>

                                    <p>
                                        I am currently working at ICMC Júnior, my university’s junior company, where I
                                        enhanced
                                        my front-end and back-end skills, while collaborating with other members to
                                        deliver web
                                        or mobile applications.
                                        <br/><br/>
                                        I have a solid foundation on Javascript, Python and C and I also worked with
                                        mordern
                                        frameworks like React. As for the back-end, I have experience with NodeJS and
                                        MongoDB
                                        for databases. I follow best practices for each language so I can deliver a
                                        clean and
                                        efficient code.
                                    </p>
                                </div>

                            </section>

                            <section className='TechStack'>

                                <h1 className='en'>Tech Stack</h1>

                                <img src='images/AboutMe_3rd_Image.png' className='ImageHistory3'/>

                                <div>
                                    <ul>
                                        <li>Languages: C, Python, Javascript, HTML, CSS, NodeJS</li>

                                        <li>Frameworks: React, React-Native</li>

                                        <li>Database: MongoDB</li>

                                        <li>System version control: Git</li>

                                        <li>Design: Figma</li>
                                    </ul>
                                </div>

                            </section>

                        </article>
                    </div>
                </React.Fragment>
            )}

            {isSmallScreen && (
                <React.Fragment>
                    <Helmet>
                        <meta name="theme-color" content="black"/>
                    </Helmet>

                    <NavBar currentPage='aboutme'/>
                    <div className="ContentArea">
                        <article className='Introduction'>

                            <div className="ImageAreaIntroduction">
                                <div className="ImageBackgroundAboutMePage">
                                    <img src="images/Foto_EU.png" alt="Avatar" className="AvatarImage"/>
                                </div>

                                <SocialsCard className='SocialsCard'/>
                            </div>

                            <div className="TextAreaIntroduction">
                                <h1 id='TitleAboutMePage'>
                                    About me
                                </h1>

                                <p id='TextAboutMePage'>My name is Augusto Fernandes Ildefonso and I am a computer
                                    science student
                                    with
                                    experience in web applications and mobile apps. I am an avid learner and diligent
                                    programmer
                                    who
                                    enjoys helping people build their dreams.</p>

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
                                >Download CV
                                    <HiArrowLongRight className="LinkIcon"/>
                                </a>
                            </div>
                        </article>

                        <article className="History">

                            <section className='FirstSteps'>

                                <h1>First Steps</h1>

                                <img src='images/AboutMe_1st_Image.png'/>

                                <div className='Text'>
                                    <p>
                                        I had my first contact with programming during my high school in 2020.
                                        <br/> <br/>
                                        I was, initially, planning to become a eletrical engineer, but when I discovered
                                        the
                                        computational world I fell in love with it and decided to pursue a degree in
                                        computer
                                        science. But even before finishing high school, I started to take online courses
                                        and had
                                        my
                                        first contact with Python.
                                        <br/> <br/>
                                        After that, I took other courses about HTML and CSS and started my journey on
                                        web
                                        development. And, finally, I head off to university, where I could deepen my
                                        knowledge.
                                    </p>
                                </div>

                            </section>

                            <section className='MyExperience'>

                                <h1>My Experience</h1>

                                <img src='images/AboutMe_2nd_Image.png' className='ImageHistory2'/>

                                <div className='Text'>

                                    <p>
                                        I am currently working at ICMC Júnior, my university’s junior company, where I
                                        enhanced
                                        my front-end and back-end skills, while collaborating with other members to
                                        deliver web
                                        or mobile applications.
                                        <br/><br/>
                                        I have a solid foundation on Javascript, Python and C and I also worked with
                                        mordern
                                        frameworks like React. As for the back-end, I have experience with NodeJS and
                                        MongoDB
                                        for databases. I follow best practices for each language so I can deliver a
                                        clean and
                                        efficient code.
                                    </p>
                                </div>

                            </section>

                            <section className='TechStack'>

                                <h1 className='en'>Tech Stack</h1>

                                <img src='images/AboutMe_3rd_Image.png' className='ImageHistory3'/>

                                <div>
                                    <ul>
                                        <li>Languages: C, Python, Javascript, HTML, CSS, NodeJS</li>

                                        <li>Frameworks: React, React-Native</li>

                                        <li>Database: MongoDB</li>

                                        <li>System version control: Git</li>

                                        <li>Design: Figma</li>
                                    </ul>
                                </div>

                            </section>

                        </article>
                    </div>
                </React.Fragment>
            )}

        </div>
    );
}