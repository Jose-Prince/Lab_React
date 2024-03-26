function ModalDelete({ onClose, blogs , DeleteMovie}) {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro semitransparente
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '2'
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '5px',
                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
            }}>
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
        event.preventDefault();
        const index = movies.findIndex(movie => movie.title === selectMovie);
        if (index !== -1) {
            DeleteMovie(index);
        }
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
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <button onClick={onClose} style={{
                    width: '30%',
                    fontSize: '15px'
                }}>Cerrar</button>
                <button type='submit' style={{
                    width: '30%',
                    fontSize: '15px'
                }}>Submit</button>
            </div>
        </form>
    );
}