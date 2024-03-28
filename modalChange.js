function Modify({blogs, id, onClose}) {

    const [blogContent, setBlogContent] = React.useState({ title: "", content: "" })

    
    React.useEffect(() => {
        async function fecthData() {
            try {
                const ids = blogs.map(element => element.id)
                const content = await obtainMoviesContent(ids[id])
                setBlogContent(content)
            } catch (error) {
                console.error("Error fetching blog content:", error)
            }
        }
        fecthData()
    }, [id])

    const handleChange = (value) => {
        setBlogContent((prevContent) => ({
            ...prevContent,
            content: value
        }))
    }

    return (
        <div style={{
            position: 'fixed',
            minHeight: '100px',
            minWidth: '100px',
            top: '25%',
            left: '29%',
            backgroundColor: 'white',
            zIndex: '2',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px'
            }}>
            {blogContent.title}
            <Content content={blogContent.content} handleChange={handleChange}/>
            <ButtonsC onClose={onClose} blogContent={blogContent} movies={blogs}/>
        </div>
    )
}

function Content({content, handleChange}) {
    return (
        <textarea type='text' value={content}
            onChange={(event) => handleChange(event.target.value)}
            style={{
                resize: 'none',
                height: '300px',
                width: '760px',
                fontSize: '15px',
                margin: '10px'
            }} />
    )
}

function ButtonsC({onClose, blogContent, movies}) {

    function handleSubmit() {
        const movie = movies.find(objeto => objeto.title === blogContent.title)
        modifyMovie(blogContent.content, movie.id)
        onClose()
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '100%'
        }}>
            <button onClick={onClose} style={{
                width: '30%',
                fontSize: '15px'
            }}>Cerrar</button>
            <button onClick={handleSubmit} style={{
                width: '30%',
                fontSize: '15px'
            }}>Submit</button>
        </div>
    )
}

//async function
async function modifyMovie(newContent, id){
    const data = await fetch(`http://127.0.0.1:3000/posts/${id}`,
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({newContent})
    })
}