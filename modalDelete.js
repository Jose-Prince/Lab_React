function ModalDelete({ onClose, blogs , DeleteMovie}) {
    return (
        <div id='shadow'>
            <div id='deleteDiv'>
                <h2>Escoja la película a eliminar</h2>
                <ShowMovies movies={blogs} onClose={onClose} DeleteMovie={DeleteMovie}/>
            </div>
        </div>
    );
}

function ShowMovies({ movies, onClose, DeleteMovie }) {
    const [selectMovie, setSelectMovie] = React.useState('');

    function onValueChange(event) {
        setSelectMovie(event.target.value);
    }

    function formSubmit(event) {
        event.preventDefault()
        const movie = movies.find(objeto => objeto.title === selectMovie)
        console.log(movie)
        DeleteMovie(movie.id)

        onClose(); // Cerrar el modal después de eliminar la película
    }

    const movieElements = movies.map((movie, index) => (
        <p key={index}>
            <label>
                <input type='radio' value={movie.title} onChange={onValueChange} /> {movie.title}
            </label>
        </p>
    ));

    return (
        <form onSubmit={formSubmit}>
            {movieElements}
            <div class='buttonDisplay'>
                <button onClick={onClose} class='buttons'>Cerrar</button>
                <button type='submit' class='buttons'>Submit</button>
            </div>
        </form>
    );
}