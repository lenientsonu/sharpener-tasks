import "./AddMovie.css";

const AddMovie = (props) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const movie = {
            id: Math.random().toString(),
            title: document.getElementById("title").value,
            openingText: document.getElementById("text").value,
            releaseDate: document.getElementById("date").value,
        };
        props.onAddMovie(movie);
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div className='control'>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' />
            </div>
            <div className='control'>
                <label htmlFor='text'>Opening Text</label>
                <input type='text' id='text' />
            </div>
            <div className='control'>
                <label htmlFor='date'>Release Date</label>
                <input type='date' id='date' />
            </div>
            <button>Add Movie</button>
        </form>
    );
};

export default AddMovie;
