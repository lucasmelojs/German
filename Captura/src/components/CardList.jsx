import React, { useState, useEffect } from 'react';
import CardList from './CardList';// Import the CardList component

// FetchReviews component to fetch and display reviews
const FetchReviews = () => {
    const [reviews, setReviews] = useState([]); // State to store the reviews
    const [isLoading, setIsLoading] = useState(true); // State to track loading status
    const [error, setError] = useState(null); // State to store any errors


    // Function to fetch reviews
    const fetchReviews = async () => {
        try {
            let response = await fetch('http://localhost:3000/reviews');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let data = await response.json();
            setReviews(data); // Update the state with the fetched reviews
            setIsLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            setError(error.message); // Set error message if there's an error
            setIsLoading(false); // Ensure loading is set to false
        }
    };
    useEffect(() => {
        fetchReviews();
    }, [])// Call the fetch function// The empty array ensures this effect runs once on mount

    // Render loading, error, or the CardList component based on the state
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {!isLoading && error && <p>Error: {error}</p>}
            {!isLoading && !error && <CardList cards={reviews} />}
        </div>
    );
};

export default FetchReviews;
