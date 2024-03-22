function Information({handleMouseEnter, handleMouseLeave, topp, leftp}) {
    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                position: 'fixed',
                height: '176px',
                width: '234px',
                top: topp + 373 + 'px',
                left: leftp + 241 + 'px',
                cursor: 'pointer',
                zIndex: '1',
                backgroundColor: 'blue', // Color del popover
                color: 'white', // Color del texto del popover
                textAlign: 'center', // Alineación del texto del popover
                paddingTop: '10px', // Espacio superior dentro del popover
                borderRadius: '5px', // Bordes redondeados del popover
            }}
        >
            Contenido del popover
        </div>
    )
}