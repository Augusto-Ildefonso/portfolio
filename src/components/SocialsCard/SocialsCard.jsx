import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMediumSquare, AiFillGoogleCircle } from "react-icons/ai";
import '../../styles/SocialsCard.css'

export default function SocialsCard() {
    return(
        <div className="SocialsCard">
            <a href='https://github.com/Augusto-Ildefonso' target="_blank">
                <AiFillGithub className="Icon"/>
            </a>

            <a href='https://www.linkedin.com/in/augustofernandesildefonso/' target="_blank">
                <AiFillLinkedin className="Icon"/>
            </a>

            <a href='https://medium.com/@afildefonso16' target="_blank">
                <AiFillMediumSquare className="Icon"/>
            </a>

            <a href='#' target="_blank">
                <AiFillGoogleCircle className="Icon"/>
            </a>
        </div>
    );
}