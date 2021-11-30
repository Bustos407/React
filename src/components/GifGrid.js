import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GrifGridItem } from './GrifGridItem';

export const GifGrid = ({ category }) => {


  const {data :images,loading} = useFetchGifs(category);
  
    //Funcion para pasar datos y mostar los url de los gifs de giphy
   

    // getGifs();
    return (
         <>

        <h3 className = ' animate__animated animate__backInLeft animate_delay-2s'>{ category } </h3>

          {loading && <p className = 'animate__animated animate__flash animate_delay-2s'>loading</p>  }
 
        <div className='card-grid'>
               {
                   images.map(img => 
                     <GrifGridItem
                     key = {img.id}
                     {...img } />
                   )
               }
           
        </div>

        </>
    )
}
