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
        <div id='shadow'>
            <div class='contentDiv'>
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
        <div id='N' class='elementAlign'>
            <p class='textIdentifier'>Título: </p>
            <input type='text' value={value} 
            onChange={(event) => handleChange(event.target.value)}
            class='inputText' maxLength='255'
            placeholder='Título...'/>
        </div>
    )
}

function Trailer({ value, handleChange }) {

    return (
        <div id='T' class='elementAlign'>
            <p class='textIdentifier'>Trailer: </p>
            <input type='text' value={value}
            onChange={(event) => handleChange(event.target.value)}
            class='inputText' maxLength='255'
            placeholder='Trailer...'/>
        </div>
    )
}

function Image({ value, handleChange }) {

    return (
        <div id='I' class='elementAlign'>
            <p class='textIdentifier'>Imagen: </p>
            <input type='text' value={value}
            onChange={(event) => handleChange(event.target.value)}
            class='inputText' maxLength='255'
            placeholder='Imagen representativa...'/>
        </div>
    )
}

function Content({ value, handleChange }) {

    return (
        <div id='C' class='elementsDisplay'>
            <p>Contenido: </p>
            <textarea type='text' value={value}
            onChange={(event) => handleChange(event.target.value)}
            class='contentArea'
            placeholder='Contenido de la película...'/>
        </div>
    )
}

function ModalOptions({ onClose, handleSubmit }) {
    return (
        <div class='buttonDisplay'>
            <button onClick={onClose} class='buttons'>Cerrar</button>
            <button onClick={handleSubmit} class='buttons'>Grabar</button>
        </div>
    )
}

