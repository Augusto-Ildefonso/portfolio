import React from 'react';
import {HiBookOpen, HiChatBubbleLeftRight, HiCommandLine, HiHome, HiUser} from "react-icons/hi2";
import {Link} from "react-router-dom";
import '../../styles/NavBar.css'

export default function NavBar (props) {
    return (
        <nav className="HomeNav">
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
                    <Link to={props.currentPage.includes('home') ? '/' : `/${props.currentPage.replace('pt', '')}`}
                          className={props.currentPage.includes('pt') ? 'OtherLanguage' : 'CurrentlyLanguage'}>EN</Link>
                    |
                    <Link to={props.currentPage.includes('pt') ? `/${props.currentPage}` : `/${props.currentPage}pt`}
                          className={props.currentPage.includes('pt') ? 'CurrentlyLanguage' : 'OtherLanguage'}>PT</Link>
                </p>
            </div>
        </nav>
    );
}