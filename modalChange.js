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
        <div id='modifyDiv'>
            {blogContent.title}
            <Content content={blogContent.content} handleChange={handleChange}/>
            <ButtonsC onClose={onClose} blogContent={blogContent} movies={blogs}/>
        </div>
    )
}

function ContentC({content, handleChange}) {
    return (
        <textarea type='text' value={content}
            onChange={(event) => handleChange(event.target.value)}
            class='contentArea'/>
    )
}

function ButtonsC({onClose, blogContent, movies}) {

    function handleSubmit() {
        const movie = movies.find(objeto => objeto.title === blogContent.title)
        modifyMovie(blogContent.content, movie.id)
        onClose()
    }

    return (
        <div class='buttonDisplay'>
            <button onClick={onClose} class='buttons' >Cerrar</button>
            <button onClick={handleSubmit} class='buttons'>Submit</button>
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