import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    console.log({isLoading});

    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // // Si se agrega un nuevo componente GifGrid si se pondrá lanzar getGifs porque se está creando el componente una nueva vez
    // useEffect( () => {
    //     // getGifs(category).then( newImages => setImages(newImages));
    //     getImages();
    // }, [  ]);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            
            <div className="card-grid">
               {
                /*
                images.map(img => (
                    <li key={img.id}>{img.title}</li>
                )
                */
                images.map( (image) => (
                    //<li key={id}>{title}</li>
                    <GifItem key={image.id} 
                        //title={image.title}
                        //url={image.url}
                        {...image}
                    />
                ))
               }
            </div>
          
        </>
    )
}
