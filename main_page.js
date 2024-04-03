//Body Configuration
document.body.style.backgroundColor = '#000000'
document.body.style.height = '99.8%'
document.body.style.margin = '0'
document.body.style.padding = '0'
document.body.style.overflow = 'hidden';

function App({ blogs, len }) {

    if (!Array.isArray(blogs)) {
        throw new Error('Propiedad "blogs" debe ser un array.')
    }

    if (typeof len !== 'number') {
        throw new Error('Propiedad "len" debe ser un número.')
    }

    const [isCreateOpen, setIsCreateOpen] = React.useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = React.useState(false)

    return (
        <div id='grid'>
            <FirstRow />
            <PrimeraFila len={len} blogs={blogs}/>
            <Buttons setIsCreateOpen={setIsCreateOpen} setIsDeleteOpen={setIsDeleteOpen}/>
            {isCreateOpen && <ModalCreate onClose={() => setIsCreateOpen(false)} blogs={blogs} addMovie={addMovie} /> } 
            {isDeleteOpen && <ModalDelete onClose={() => setIsDeleteOpen(false)} blogs={blogs} DeleteMovie={DeleteMovie}/>}
        </div>
    );
}

obtainMovies()

//Div flex
function FirstRow() {
    return(
        <div class='position'>
            <Screen />
        </div>
    )
}

function PrimeraFila({len, blogs}) {


    if (!Array.isArray(blogs)) {
        throw new Error('Propiedad "blogs" debe ser un array.')
    }

    if (typeof len !== 'number') {
        throw new Error('Propiedad "len" debe ser un número.')
    }
    
    // Ruta de la imagen
    const imageSource = "Seat.svg";
    
    // Arreglo para almacenar los elementos img
    const imageElements = [];
    
    var leftp = -237
    var topp = 115
    
    // Generar elementos img dinámicamente usando un ciclo for
    for (var i = 0; i < 32; i++) {  
        const [isPopOverVisible, setIsPopoverVisible] = React.useState(false)
        const [isModifyOpen, setIsModifyOpen] = React.useState(false)

        const onClickModify = () => {
            setIsModifyOpen(true)
            console.log('abrir')
        }

        const handleMouseEnter = () => {
            setIsPopoverVisible(true)
        }
    
        const handleMouseLeave = () => {
            setIsPopoverVisible(false)
        }
        
        if (i % 8 == 0 && i != 0) {
            topp += 85.7
            leftp = -237
        } 
        imageElements.push(
            <div>
                <img 
                    src={imageSource} 
                    style={{ 
                        position: 'fixed',
                        top: topp +'px',
                        left: leftp + 'px',
                        width: '716px', 
                        height: '720px',
                        margin: '0 0px', // Reducir el espacio entre las imágenes
                    }} 
                />
                <div id = {i} onMouseOver={handleMouseEnter}
                onMouseOut={handleMouseLeave} onClick={onClickModify}
                style={{
                    position: 'fixed',
                    height: '176px',
                    width: '234px',
                    top: topp + 373+'px',
                    left: leftp + 241 +'px',
                    cursor: 'pointer',
                    zIndex: '1'
                }}></div>
                {
                    isModifyOpen && <Modify blogs={blogs} id={i} onClose={() => setIsModifyOpen(false)}/>
                }
                    {isPopOverVisible && 
                    (<Information id={i} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} 
                        topp={topp} leftp={leftp} len={len} blogs={blogs}/>
                )}
            </div>
        )
        leftp += 240
    }

    // Renderizar los elementos de las imágenes
    return (
        <div>
            {imageElements}
        </div>
    )
}


//Screen where video'll be shown
function Screen() {
    return (
       <div id='screen'>
       </div> 
    )
}

function Buttons({ setIsCreateOpen, setIsDeleteOpen }) {
    return(
        <div class='buttonsDesign'>
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
        <App blogs={blogs} len={blogs.length}/>,
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

async function DeleteMovie(id){
    const data = await fetch(`http://127.0.0.1:3000/posts/${id}`,
    {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    })
}
