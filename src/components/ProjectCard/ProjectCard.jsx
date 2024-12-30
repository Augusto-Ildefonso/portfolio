import React from 'react';
import { HiArrowUpRight } from "react-icons/hi2";
import '../../styles/ProjectCard.css';

export default function ProjectCard(props) {
    return (
        <div className="ProjectCardBase">
            <div className='ContentProjectCard'>
                <img src={props.image}/>
                <div className='ProjectCardText'>
                    <h1>{props.title}</h1>
                    <p>{props.content}</p>
                    <div className='GitHubLink'>
                        <a
                            href={props.link}
                            onMouseEnter={(e) => {
                                e.currentTarget.querySelector('.ProjectCardIcon').style.fill = '#B9EEE9'; // Ajusta a cor no hover
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.querySelector('.ProjectCardIcon').style.fill = '#1D2951'; // Restaura a cor
                            }}
                            target="_blank"
                            >{props.githubText}
                            <HiArrowUpRight className="ProjectCardIcon" style={{ fill: '#1D2951', transition: '0.3s' }}/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}