import React from 'react';
import Card from './Card';

const ErrorModal = (props) => {
    return (
        <Card>
            <header>
                <h2>{props.title}</h2>
            </header>
            <div>
                <p>{props.msg}</p>
            </div>
            <footer>
                <button type='button' onClick={props.onModalClick}>Close</button>
            </footer>
        </Card>
    );
};

export default ErrorModal;