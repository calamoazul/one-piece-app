import React from "react"

function Gif({title, id, url}) {
    return (
        <div>
            <h2 className="title-gif">{title}</h2>
            <img key={id} alt={title} src={url}/>
        </div>
    )
}

export default Gif