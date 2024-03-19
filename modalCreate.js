function ModalCreate({ onClose }) {

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
            alignItems: 'center'
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
                <Name />
                <Trailer />
                <Image />
                <Content />
                <ModalOptions onClose={onClose}/>
            </div>
        </div>
    );
}

function Name() {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <p style={{
                margin: '50px'
            }}>Título: </p>
            <input style={{
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

function Trailer() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <p style={{
                margin: '50px'
            }}>Trailer: </p>
            <input style={{
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

function Image() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <p style={{
                margin: '50px'
            }}>Imagen: </p>
            <input style={{
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

function Content() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column'
        }}>
            <p>Contenido: </p>
            <textarea style={{
                resize: 'none',
                height: '300px',
                width: '760px',
                fontSize: '15px',
            }} 
            placeholder='Contenido de la película...'/>
        </div>
    )
}

function ModalOptions({ onClose }) {
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
            <button onClick={onClose} style={{
                width: '30%',
                fontSize: '20px'
            }}>Grabar</button>
        </div>
    )
}


