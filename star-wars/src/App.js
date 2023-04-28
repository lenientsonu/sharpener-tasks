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
            const response = await fetch("https://swapi.dev/api/films/");
            console.log("request fetched");

            if (!response.ok) {
                throw new Error("Something went wrong... Reloading");
            }

            const data = await response.json();
            const transformedMovies = data.results.map((movieData) => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date,
                };
            });
            setMovies(transformedMovies);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    const addMovieHandler = (movie) => {
        console.log(movie);
    }

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
