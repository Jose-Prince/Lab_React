var title = "" 
var trailer = ""
var image = ""
var content = ""

function ModalCreate({ onClose, addMovie, blogs }) {

    const [title, setTitle] = React.useState('')
    const [trailer, setTrailer] = React.useState('')
    const [image, setImage] = React.useState('')
    const [content, setContent] = React.useState('')

    const handleSubmit = async () => {
        const index = blogs.length
        const movieData = {
            title: title,
            trailer: trailer,
            image: image,
            content: content,
            date: getCurrentDate()
        }
        addMovie(movieData);
        onClose();
    }

    const getCurrentDate = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    };

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
                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <h2>Grabando película</h2>
                <Name value={title} handleChange={setTitle}/>
                <Trailer value={trailer} handleChange={setTrailer}/>
                <Image value={image} handleChange={setImage}/>
                <Content value={content} handleChange={setContent}/>
                <ModalOptions onClose={onClose} handleSubmit={handleSubmit} />
            </div>
        </div>
    );
}

function Name({ value, handleChange }) {
    return (
        <div id='N' style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <p style={{
                margin: '50px'
            }}>Título: </p>
            <input type='text' value={value} 
            onChange={(event) => handleChange(event.target.value)}
            style={{
                resize: 'none',
                height: '30px',
                width: '700px',
                fontSize: '15px',
                rows: '1',
            }} maxLength='255'
            placeholder='Título...'/>
        </div>
    )
}

function Trailer({ value, handleChange }) {

    return (
        <div id='T' style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <p style={{
                margin: '50px'
            }}>Trailer: </p>
            <input type='text' value={value}
            onChange={(event) => handleChange(event.target.value)}
            style={{
                resize: 'none',
                height: '30px',
                width: '700px',
                fontSize: '15px',
                rows: '1',
            }} maxLength='255'
            placeholder='Trailer...'/>
        </div>
    )
}

function Image({ value, handleChange }) {

    return (
        <div id='I' style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <p style={{
                margin: '50px'
            }}>Imagen: </p>
            <input type='text' value={value}
            onChange={(event) => handleChange(event.target.value)}
            style={{
                resize: 'none',
                height: '30px',
                width: '700px',
                fontSize: '15px',
                rows: '1',
            }} maxLength='255'
            placeholder='Imagen representativa...'/>
        </div>
    )
}

function Content({ value, handleChange }) {

    return (
        <div id='C' style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column'
        }}>
            <p>Contenido: </p>
            <textarea type='text' value={value}
            onChange={(event) => handleChange(event.target.value)}
            style={{
                resize: 'none',
                height: '300px',
                width: '760px',
                fontSize: '15px',
            }} 
            placeholder='Contenido de la película...'/>
        </div>
    )
}

function ModalOptions({ onClose, handleSubmit }) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '100%',
            margin: '15px'
        }}>
            <button onClick={onClose} style={{
                width: '30%',
                fontSize: '20px'
            }}>Cerrar</button>
            <button onClick={handleSubmit} style={{
                width: '30%',
                fontSize: '20px'
            }}>Grabar</button>
        </div>
    )
}


//Async functions
async function obtainMoviesLen(){
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
    
    return blogs.length
}

