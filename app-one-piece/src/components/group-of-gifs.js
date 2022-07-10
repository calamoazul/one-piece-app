import React, {useEffect, useState} from 'react';
import Gif from "./gif";
import setGifs from '../services/getGifs';

function GifTemplate({params}) {
  const [gifs, updateGif] = useState([]);
  const {keyword} = params
    useEffect(function(){
        setGifs({keyword}).then(gifs => updateGif(gifs))
      }, [keyword])
   return <div> (
  
      {
        gifs.map(singleGif => <Gif title={singleGif.title} id={singleGif.id} url={singleGif.url} /> )
      }
   
    
   ) </div>
}

export default GifTemplate