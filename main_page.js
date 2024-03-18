//Body Configuration
document.body.style.backgroundColor = '#000000'
document.body.style.height = '99.8%'
document.body.style.margin = '0'
document.body.style.padding = '0'
document.body.style.overflow = 'hidden';


function App() {
    return (
        <div style={{
            height: '100%',
            display: 'grid',
            gridTemplateRows: '50% 47% 3%',
            border: '1px solid #000000'
        }}>
            <FirstRow />
            <PrimeraFila />
            <Buttons />
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
                alt={`Imagen ${i + 1}`} 
                style={{ 
                    position: 'absolute',
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

function Buttons() {
    return(
        <div style={{
            height: '100%',
            width: '99.9%',
            gridRow: '3',
            backgroundColor: 'blue',
            border: '1px solid #ffffff',
        }}></div>
    )
}

// Renderizar el componente en el DOM
ReactDOM.render(
    <App />,
    document.getElementById('root')
    );
    

