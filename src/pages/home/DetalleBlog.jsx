//Componente DetalleBlog

//Importamos useParms para obtener el id del la url
import { useParams } from "react-router-dom"
//Nos traemos el archivo js con los datos "newsMock"
import { newsMock } from "../../mocks/newsMock";
//importamos el hook useState para gurdar los estados
import { useState } from "react";
//Importamos la hoja de stilos "./DetalleBlog.css"
import "./DetalleBlog.css"
//Importamos para agregar links o botones
import { Link } from "react-router-dom";


const DetalleBlog = () => {
    //Gurdamos el id en la constante "id"
    const { id } = useParams()

    //Guardamos en "blog" el elemento filtrado segun el "id" proveneinte de newsMock. Los "..." me rompe el array y me deja solo el objeto
    const [blog, setBlog] = useState(...newsMock.filter((blog) => blog.source.id == id));
    console.log(blog);

    return (
        <div className="contenedorDetalle">
            <img src={blog.urlToImage} alt={blog.title} className="imagen" />
            <div className="datos">
                <h2 className="titulo">{blog.title}</h2>
                <div className="subtitulo">
                    <p className="autor">{blog.author}</p>
                    <p>{new Date(blog.publishedAt).toLocaleString("es")}</p>
                </div>
                <p className="description">{blog.description}</p>
                <p className="content">{blog.content}</p>
                <div className="Btn">
                    {/*Para que me lleve desde una targeta al index  */}
                    <Link to={`/`} className="verMas">Volver</Link>
                </div>
            </div>

        </div>
    )
}

export default DetalleBlog