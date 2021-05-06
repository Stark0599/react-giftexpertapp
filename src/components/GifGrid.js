import React from 'react';

import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({category}) => {

  const {data:images, loading} = useFetchGifs( category );

  //useEffect(()=>{
  //  getGifs(category)
  //    .then( setImages );
  //},[ category ])

  //se va a crear un custom hook

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <div className="card-grid">

        {
          images.map((img)=>(
            <GifGridItem
              key={img.id} 
              // img={ img }
              {...img}
            />
          ))
        }    

      </div>
    </>
  )
}
