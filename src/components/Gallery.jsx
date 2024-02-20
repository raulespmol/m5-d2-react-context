import { useContext } from "react";
import { PicturesContext } from "../PicturesContext";

const Gallery = () => {
  const {pictures, setPictures} = useContext(PicturesContext)

  return(
    <div className="gallery grid-columns-5 p-3">
      {pictures.map(pic => {
        return (
          <img src={pic.src.small} alt="" key={pic.id}/>
        )
      })}
    </div>
  ) 
  
};
export default Gallery;
