import { useContext } from "react";
import { PicturesContext } from "../PicturesContext";

const Favorites = () => {
  const {pictures} = useContext(PicturesContext)

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {pictures.map(pic => {
          if(pic.liked){
            return(
              <div 
                key={pic.id}
                className="photo"
                style={{backgroundImage: `url(${pic.src.large})`}}
              >
                <p>{pic.photographer}</p>
                <p>{pic.alt}</p>
              </div>
            )
          }
        })}
      </div>
    </div>
  );
};
export default Favorites;
