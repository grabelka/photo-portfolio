import React from 'react';

function Comment(props) {
    return (
        <section>
            <section className='App-comment-stars'>
                <p>★</p>
                <p>{ props.stars > 1 ? '★' : '☆'}</p>
                <p>{ props.stars > 2 ? '★' : '☆'}</p>
                <p>{ props.stars > 3 ? '★' : '☆'}</p>
                <p>{ props.stars > 4 ? '★' : '☆'}</p>
            </section>
            <p className='App-comment-text'>{ props.text }</p>
        </section>
    );
};

export default Comment;