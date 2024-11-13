//Componente Home que se usa en el index dentro del componente App

//Importamos el archivo js newsMock
import { newsMock } from "../../mocks/newsMock";
//Importamos el hook "useState"
import { useState } from "react";
//Importamos el componente Blog
import Blog from "./Blogs";

const Home = () => {

  //useEffect newsapi apikey
  //Aplicamos un  hook. En "blogs" vamos a tener los datos de "newsMock"
  const [blogs, setBlogs] = useState(newsMock);

  return (
    // Utilizamos map con js para recorrer blogs y colocamos en su interior el componente Blog con su repectiva key
    <div>
      <h1>Home</h1>
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.source.id} />
      ))}
    </div>
  );
};

// Exportamos Home para que pueda ser importado desde otros archivos
export default Home;