import { useContext } from "react";
import { PicturesContext } from "../PicturesContext";

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
          <img 
            className="photo"
            src={pic.src.medium} 
            alt="pic.alt" 
            key={pic.id}
            onClick={() => toggleFav(pic.id)}
          />
        )
      })}
    </div>
  ) 
  
};
export default Gallery;
