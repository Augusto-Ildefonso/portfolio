import React from 'react';
import '../../styles/Button.css'
import { Link } from 'react-router-dom';

export default function Button(props) {
    return (
        <React.Fragment>
            <Link className='Button ButtonText jersey-25-regular' to={`/${props.link}`}>{props.text}</Link>
        </React.Fragment>
    );
}