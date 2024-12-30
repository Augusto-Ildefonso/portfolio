import React from 'react';
import { HiArrowUpRight } from "react-icons/hi2";
import '../../styles/BlogCard.css';

export default function BlogCard(props) {
    return (
        <div className="BlogCardBase">
            <div className='ContentBlogCard'>
                    <h1>{props.title}</h1>
                    <h2>{props.subtitle}</h2>
                    <p>{props.content}</p>
                    <div className='GitHubLinkBlogCard'>
                        <a
                            href={props.link}
                            onMouseEnter={(e) => {
                                e.currentTarget.querySelector('.BlogCardIcon').style.fill = '#B9EEE9'; // Ajusta a cor no hover
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.querySelector('.BlogCardIcon').style.fill = '#1D2951'; // Restaura a cor
                            }}
                        >{props.postText}
                            <HiArrowUpRight className="BlogCardIcon"
                                            style={{fill: '#1D2951', transition: '0.3s'}}/>
                        </a>
                    </div>
            </div>
        </div>
    );
}