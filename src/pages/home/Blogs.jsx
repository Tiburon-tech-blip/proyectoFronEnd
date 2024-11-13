//Componente Blog

//Importamos el archivo de estilos Blogs.css
import "./Blogs.css";
//Importamos link para hacer un boton que nos mande a una targeta en particular
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
    console.log(blog)
    return (
        //Imagen, titulo, autor, fecha y descripcion
        <div className="contenedor">
            <img src={blog.urlToImage} alt={blog.title} className="imagen" />
            <div className="datos">
                <h2 className="titulo">{blog.title}</h2>
                <div className="subtitulo">
                    <p className="autor">{blog.author}</p>
                    {/* Para que la fecha se vea en nuestro formato */}
                    <p>{new Date(blog.publishedAt).toLocaleString("es")}</p>
                </div>
                <p className="description">{blog.description}</p>
                {/* Ponemos un link o boton que nos mande a una targeta en particular con el id de la misma en la url */}
                <Link to={`/blogs/${blog.source.id}`} className="verMas">Ver mas</Link>
            </div>

        </div>
    )

}

export default Blog;