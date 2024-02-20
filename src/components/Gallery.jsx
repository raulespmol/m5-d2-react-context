import { useContext } from "react";
import { PicturesContext } from "../PicturesContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const {pictures, setPictures} = useContext(PicturesContext)

  const toggleFav = (id) => { 
    const newPictures = pictures.map(picture => {
      if(picture.id === id){
        const isLiked = picture.liked
        return {...picture, liked: !isLiked}
      }
      return picture
    })
    setPictures(newPictures)
  }

  return(
    <div className="gallery grid-columns-5 p-3">
      {pictures.map(pic => {
        return (
          <div 
            key={pic.id}
            className="photo"
            onClick={() => toggleFav(pic.id)}
            style={{backgroundImage: `url(${pic.src.large})`}}
          >
            <IconHeart filled={pic.liked}/>
            <div className="desc">
              <p>{pic.alt}</p>
              <small>{pic.photographer}</small>
            </div>
          </div>
        )
      })}
    </div>
  ) 
  
};
export default Gallery;
