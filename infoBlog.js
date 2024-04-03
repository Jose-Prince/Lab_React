function Information({ id, handleMouseEnter, handleMouseLeave, topp, leftp, len, blogs }) {
    if (id >= len) {
        return null;
    }

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                position: 'fixed',
                top: topp + 170 + 'px',
                left: leftp + 241 + 'px',
            }}
        >
            <PopOver id={id} blogs={blogs} />
        </div>
    );
}

function InfoContainer({id, blogs}) {

    const [blogContent, setBlogContent] = React.useState("")

    
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

    return (
        <div
            id='containerPop'
        >
            <b>{blogContent.title}</b> <br></br><br></br>
            {blogContent.content}
        </div>
    )
}

function Triangle(){
    return (
        <div id='downTriangle'></div>
    )
}

function PopOver({id, blogs}) {
    return (
        <div class='elementsDisplay'>
            <InfoContainer id={id} blogs={blogs} />
            <Triangle />
        </div>
    )
}

//Async Functions
async function obtainMoviesContent(id){
    const data = await fetch(`http://127.0.0.1:3000/posts/${id}`,
    {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log('await', data)
    const blog = await data.json()
    console.log(blog.content)
    return blog
}