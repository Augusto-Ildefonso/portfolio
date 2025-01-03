import React from 'react';
import {HiBookOpen, HiChatBubbleLeftRight, HiCommandLine, HiHome, HiUser, HiBars3, HiOutlineXMark } from "react-icons/hi2";
import {Link} from "react-router-dom";
import '../../styles/NavBar.css'
import { useMediaQuery } from "react-responsive";

export default function NavBar (props) {
    const isLanguageText = useMediaQuery({query: 'only screen and (min-width: 1101px)'})
    const isLanguageMenu = useMediaQuery({query: 'only screen and (max-width: 1100px)'});

    const [isMenuVisible, setMenuVisible] = React.useState(false);

    const ChangeMenu = () => {
        setMenuVisible(!isMenuVisible)
    }

    return (
        <nav className="HomeNav">
            {isLanguageText && (
                    <div className='ContainerNavBar'>
                        <ul>
                            <li style={{marginLeft: '0'}}>
                                <Link
                                    to={props.currentPage.includes('pt') ? '/homept' : '/'}
                                    className='ListElement'>
                                    <HiHome className='Icons'
                                            style={{color: props.currentPage.includes('home') ? '#B9EEE9' : 'fff'}}/>
                                    <span><p>{props.currentPage.includes('home') ? 'Home' : '\u00A0'}</p></span>
                                </Link>

                            </li>
                            <li>
                                <Link
                                    to={props.currentPage.includes('pt') ? '/projectspt' : '/projects'}
                                    className='ListElement'>
                                    <HiCommandLine className='Icons'
                                                   style={{color: props.currentPage.includes('projects') ? '#B9EEE9' : 'fff'}}/>
                                    <span>
                            <p>{props.currentPage.includes('projects')
                                ? props.currentPage.includes('pt') ? 'Projetos' : 'Projects'
                                : '\u00A0'}</p>
                        </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={props.currentPage.includes('pt') ? '/blogpt' : '/blog'}
                                    className='ListElement'>
                                    <HiBookOpen className='Icons'
                                                style={{color: props.currentPage.includes('blog') ? '#B9EEE9' : 'fff'}}/>
                                    <span>
                            <p>{props.currentPage.includes('blog') ? 'Blog' : '\u00A0'}</p>
                        </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={props.currentPage.includes('pt') ? '/aboutmept' : '/aboutme'}
                                    className='ListElement'>
                                    <HiUser className='Icons'
                                            style={{color: props.currentPage.includes('aboutme') ? '#B9EEE9' : 'fff'}}/>
                                    <span>
                            <p>{props.currentPage.includes('aboutme')
                                ? props.currentPage.includes('pt') ? 'Sobre mim' : 'About me'
                                : '\u00A0'}</p>
                        </span>
                                </Link>

                            </li>
                            <li>
                                <Link
                                    to={props.currentPage.includes('pt') ? '/contactpt' : '/contact'}
                                    className='ListElement'>
                                    <HiChatBubbleLeftRight className='Icons'
                                                           style={{color: props.currentPage.includes('contact') ? '#B9EEE9' : 'fff'}}/>
                                    <span>
                            <p>{props.currentPage.includes('contact')
                                ? props.currentPage.includes('pt') ? 'Me contate' : 'Contact me'
                                : '\u00A0'}</p>
                        </span>
                                </Link>
                            </li>
                        </ul>

                        <div className='SelectLanguage'>
                            <p className='TextLanguage'>
                                <Link
                                    to={props.currentPage.includes('home') ? '/' : `/${props.currentPage.replace('pt', '')}`}
                                    className={props.currentPage.includes('pt') ? 'OtherLanguage' : 'CurrentlyLanguage'}>EN</Link>
                                |
                                <Link
                                    to={props.currentPage.includes('pt') ? `/${props.currentPage}` : `/${props.currentPage}pt`}
                                    className={props.currentPage.includes('pt') ? 'CurrentlyLanguage' : 'OtherLanguage'}>PT</Link>
                            </p>
                        </div>
                    </div>
                )}
            {isLanguageMenu && (
                <React.Fragment>
                    <div className='TitleNavBarMobile'>
                        <h1>Augusto Ildefonso</h1>
                    </div>
                    <div className={isMenuVisible ? 'ContainerMenuIconNotVisible' : 'ContainerMenuIcon'} onClick={ChangeMenu}>
                        <HiBars3 className='IconMenu'/>
                    </div>

                    <div className={isMenuVisible ? 'MenuNavBarVisible' : 'MenuNavBarNotVisible'}>
                        <ul className='ListMenuNavBar'>
                            <li>
                                <Link
                                    to={props.currentPage.includes('pt') ? '/homept' : '/'}
                                    onClick={ChangeMenu}
                                >
                                    <p style={{color: props.currentPage.includes('home') ? '#B9EEE9' : 'fff'}}>Home</p>
                                </Link>
                            </li>

                            <li>
                                <Link to={props.currentPage.includes('pt') ? '/projectspt' : '/projects'} onClick={ChangeMenu}>
                                    <p style={{color: props.currentPage.includes('projects') ? '#B9EEE9' : 'fff'}}>Projects</p>
                                </Link>
                            </li>

                            <li>
                                <Link to={props.currentPage.includes('pt') ? '/blogpt' : '/blog'} onClick={ChangeMenu}>
                                    <p style={{color: props.currentPage.includes('blog') ? '#B9EEE9' : 'fff'}}>Blog</p>
                                </Link>
                            </li>

                            <li>
                                <Link to={props.currentPage.includes('pt') ? '/aboutmept' : '/aboutme'} onClick={ChangeMenu}>
                                    <p style={{color: props.currentPage.includes('aboutme') ? '#B9EEE9' : 'fff'}}>About me</p>
                                </Link>
                            </li>

                            <li>
                                <Link to={props.currentPage.includes('pt') ? '/contactpt' : '/contact'} onClick={ChangeMenu}>
                                    <p style={{color: props.currentPage.includes('contact') ? '#B9EEE9' : 'fff'}}>Contact me</p>
                                </Link>
                            </li>

                            <li className="ChooseLanguageMenu">
                                <Link
                                    to={props.currentPage.includes('home') ? '/' : `/${props.currentPage.replace('pt', '')}`}
                                    className={props.currentPage.includes('pt') ? 'OtherLanguage' : 'CurrentlyLanguage'}>EN</Link>
                                |
                                <Link
                                    to={props.currentPage.includes('pt') ? `/${props.currentPage}` : `/${props.currentPage}pt`}
                                    className={props.currentPage.includes('pt') ? 'CurrentlyLanguage' : 'OtherLanguage'}>PT</Link>
                            </li>

                        </ul>

                        <HiOutlineXMark className='IconMenu IconMenuVisible' onClick={ChangeMenu}/>
                    </div>


                </React.Fragment>
            )}
        </nav>
    );
}