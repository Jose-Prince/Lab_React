//Body Configuration
document.body.style.backgroundColor = '#000000'
document.body.style.height = '99.8%'
document.body.style.margin = '0'
document.body.style.padding = '0'


function App() {
    return (
        <div style={{
            height: '100%',
            display: 'grid',
            gridTemplateRows: '50% 50%',
            border: '1px solid #000000'
        }}>
            <FirstRow />
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
    

