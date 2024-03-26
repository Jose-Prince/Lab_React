function ModalDelete({ onClose, blogs }) {
    return (
        <div onClick={onClose} style={{
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
                <ShowMovies props={blogs}/>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}

function ShowMovies({ props }) {

    console.log(props)

    const movieElements = [];
    
    // Generar elementos img dinámicamente usando un ciclo for
    for (var i = 0; i < 5; i++) {
        movieElements.push(
            <p>
                Hola
            </p>
        )
    }

    // Renderizar los elementos de las imágenes
    return (
        <div>
            {movieElements}
        </div>
    )
}


//Async functions
async function getMovies(){
    const data = await fetch('http://127.0.0.1:3000/posts',
    {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log('await', data)
    const blogs = await data.json()
    console.log(blogs)
    return blogs
    
}

async function DeleteMovie(id){
    const data = await fetch('http://127.0.0.1:3000/posts/${id}',
    {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    })
}