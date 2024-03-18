//Body Configuration
document.body.style.backgroundColor = '#000000'
document.body.style.height = '99.8%'
document.body.style.margin = '0'
document.body.style.padding = '0'
// document.body.style.overflow = 'hidden';


function App() {
    return (
        <div style={{
            height: '100%',
            display: 'grid',
            gridTemplateRows: '50% 45% 5%',
            border: '1px solid #000000'
        }}>
            <FirstRow />
            <PrimeraFila />
        </div>
    );
}


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

    var leftp = -50
    var topp = 20

    var fila = 1
    
    // Generar elementos img dinámicamente usando un ciclo for
    for (var i = 0; i < 32; i++) {
        if (i % 8 == 0 && fila == 1 && i != 0) {
            topp += 20
            leftp = -50
        } else if (i % 8 == 0 && fila == 2 && i != 8) {
            topp += 20
            leftp = -75
            fila = 1
        }
        imageElements.push(
            <img 
                key={i} 
                src={imageSource} 
                alt={`Imagen ${i + 1}`} 
                style={{ 
                    position: 'absolute',
                    top: topp +'px',
                    left: leftp + 'px',
                    width: '146px', 
                    height: '150px',
                    margin: '0 0px', // Reducir el espacio entre las imágenes
                }} 
            />
        );
        leftp += 48.5
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
            height: '75%',
            width: '80%',
            backgroundColor: 'white',
            filter: 'drop-shadow(0 0 50mm rgb(365, 365, 365))'  //applies shadow
       }}>
       </div> 
    )
}

// Renderizar el componente en el DOM
ReactDOM.render(
    <App />,
    document.getElementById('root')
    );
    

