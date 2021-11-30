import React from 'react'

//mostrar los gifs en en la pag

export const GrifGridItem = ({title,url}) => {
    console.log(title,url);
    return (
        <div className="card animate__animated animate__backInLeft animate_delay-2s">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
