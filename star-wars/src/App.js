import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMoviesHandler = useCallback(async () => {
        setError(null);
        setIsLoading(true);

        try {
            const response = await fetch(
                "https://sharpener-projects-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
            );

            if (!response.ok) {
                throw new Error("Something went wrong... Reloading");
            }

            const data = await response.json();

            console.log(data);

            const loadedMovies = [];

            for (const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate,
                });
            }

            setMovies(loadedMovies);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    const addMovieHandler = useCallback(async (movie) => {
        const response = await fetch(
            "https://sharpener-projects-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
            {
                method: "POST",
                body: JSON.stringify(movie),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        // const data = response.json();
        // console.log(data);
    }, []);

    let content = <p>Loading...</p>;
    if (!isLoading && movies.length > 0) {
        content = <MoviesList movies={movies} />;
    }
    if (!isLoading && movies.length === 0 && !error) {
        content = <p>No Movies Found... </p>;
    }
    if (!isLoading && error) {
        content = <p>{error}</p>;
    }

    return (
        <React.Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </React.Fragment>
    );
}

export default App;
