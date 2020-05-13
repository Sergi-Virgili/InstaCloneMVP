import React from "react";
import { Link } from 'react-router-dom';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const style = {
    boxSizing: 'border-box',
    borderBottom: 'solid 1px #aaa',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',

} as React.CSSProperties

export default class NavBar extends React.Component {
    public render() {

        return (
            <div style={style}>
                <Link to='/app/newsfeed' style={{ textDecoration: 'none' }} >InstaClone</Link>
                <Link to='/app/profile' style={{ textDecoration: 'none' }}> <FontAwesomeIcon icon={faUser} /> Profile</Link>
            </div>
        );
    }
}