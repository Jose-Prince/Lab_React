//Body Configuration
document.body.style.backgroundColor = '#000000'
document.body.style.height = '99.8%'
document.body.style.margin = '0'
document.body.style.padding = '0'
document.body.style.overflow = 'hidden';

function App() {
    const [isCreateOpen, setIsCreateOpen] = React.useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = React.useState(false);

    return (
        <div style={{
            height: '100%',
            display: 'grid',
            gridTemplateRows: '50% 47% 3%',
            border: '1px solid #000000'
        }}>
            <FirstRow />
            <PrimeraFila />
            <Buttons setIsCreateOpen={setIsCreateOpen} setIsDeleteOpen={setIsDeleteOpen}/>
            {isCreateOpen && <ModalCreate onClose={() => setIsCreateOpen(false)} addMovie={addMovie} /> } 
            {isDeleteOpen && <ModalDelete onClose={() => setIsDeleteOpen(false)} />}
        </div>
    );
}

obtainMovies()

//Div flex
function FirstRow() {
    return(
        <div style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end'
        }}>
            <Screen />
        </div>
    )
}

function PrimeraFila() {
    // Arreglo con la ruta de la imagen
    const imageSource = "Seat.svg";

    // Arreglo para almacenar los elementos img
    const imageElements = [];

    var leftp = -237
    var topp = 115
    
    // Generar elementos img dinámicamente usando un ciclo for
    for (var i = 0; i < 32; i++) {
        if (i % 8 == 0 && i != 0) {
            topp += 85.7
            leftp = -237
        } 
        imageElements.push(
            <img 
                key={i} 
                src={imageSource} 
                alt={`${i}`} 
                style={{ 
                    position: 'fixed',
                    top: topp +'px',
                    left: leftp + 'px',
                    width: '716px', 
                    height: '720px',
                    margin: '0 0px', // Reducir el espacio entre las imágenes
                }} 
            />
        );
        leftp += 240
    }

    // Renderizar los elementos de las imágenes
    return (
        <div>
            {imageElements}
        </div>
    );
}


//Screen where video'll be shown
function Screen() {
    return (
       <div style={{
            height: '90%',
            width: '50%',
            backgroundColor: 'white',
            filter: 'drop-shadow(0 0 50mm rgb(365, 365, 365))'  //applies shadow
       }}>
       </div> 
    )
}

function Buttons({ setIsCreateOpen, setIsDeleteOpen }) {
    return(
        <div style={{
            position: 'relative',
            height: '100%',
            width: '99.9%',
            gridRow: '3',
            backgroundColor: 'black',
            border: '1px solid #ffffff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
        }}>
            <Create setIsCreateOpen={setIsCreateOpen}/> | <Delete setIsDeleteOpen={setIsDeleteOpen}/>
        </div>
    )
}

function Create({ setIsCreateOpen }) {
    const [isHovered, setIsHovered] = React.useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const handleCreateClick = () => {
        setIsCreateOpen(true)
    }

    return (
        <button onClick={handleCreateClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                backgroundColor: 'black',
                border: 'none',
                color: isHovered ? 'blue' : 'white',
                fontSize: '20px',
                cursor: 'pointer'
        }}>Crear</button>
    )
}


function Delete({ setIsDeleteOpen }) {
    const [isHovered, setIsHovered] = React.useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const handleDeleteClick = () => {
        setIsDeleteOpen(true)
    }

    return (
        <button onClick={handleDeleteClick} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
            backgroundColor: 'black',
            border: 'none',
            color: isHovered ? 'blue' : 'white',
            fontSize: '20px',
            cursor: 'pointer'
        }}>Eliminar</button>
    )
}

function ModalDelete({ onClose }) {
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
            alignItems: 'center'
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '5px',
                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
            }}>
                <h2>Contenido del modal</h2>
                <p>Aquí puedes poner cualquier contenido que desees mostrar en el modal.</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}

//Async functions
async function obtainMovies(){
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
    
    // Renderizar el componente en el DOM
    ReactDOM.render(
        <App blogs={blogs}/>,
        document.getElementById('root')
    )
}

async function addMovie(object){
    const data = await fetch('http://127.0.0.1:3000/posts',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
}

