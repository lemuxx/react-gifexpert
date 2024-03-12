import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        // No dispara dos renderizaciones, solo una
         setImages(newImages);
         setIsLoading(false);
     }

    // // Si se agrega un nuevo componente GifGrid si se pondrá lanzar getGifs porque se está creando el componente una nueva vez
    useEffect( () => {
    //     // getGifs(category).then( newImages => setImages(newImages));
         getImages();
     }, [  ]);


  return {
    images,
    isLoading
  }
}
