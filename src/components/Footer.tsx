import React from 'react';
import { faRetweet, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
    footer: {
        backgroundColor: '#eee',
        marginLeft: '-15px',
        marginBottom: '-10px',
        width: 'calc(100% + 30px)',
        display: 'flex'
    },
    button: { flex: 1, textAlign: 'center', padding: '10px 15px', cursor: 'pointer' } as React.CSSProperties
}

export default class Footer extends React.Component {
    public render() {
        return (
            <footer style={styles.footer}>
                <div style={styles.button}>
                    <FontAwesomeIcon icon={faThumbsUp} /> Like
                </div>
                <div style={styles.button}>
                    <FontAwesomeIcon icon={faRetweet} />Compartir
                </div>
            </footer>
        )
    }
}