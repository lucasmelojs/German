import React from 'react'
import styles from '.css/Card.module.css';

const Card = () => {
    return (
        <div className={styles.card_Container}>
            <img src="{avatar}" alt="user-avatar" />
            <h3>{client_name}, {client_second_name}</h3>
            <p>{date} | Verified Purchase</p>
            <div>
                {[...Array(5)].map((stars, index) => {
                    const ratingValue = index + 1;
                    return (
                        <span key={index}>
                            {ratingValue <= rating ? '★' : '☆'}
                        </span>
                    );
                })}
            </div>
            <blockquote>
                {review}
            </blockquote>
        </div>
    );
};

const CardList = ({ cards }) => {
    return (
        <div>
            {cards.map((card, index) => (
                <CardList key={index} {...card} />
            ))}
        </div>
    );
};

export default Card;