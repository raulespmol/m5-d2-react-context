import { useContext } from "react";
import { PicturesContext } from "../PicturesContext";

const Favorites = () => {
  const {pictures} = useContext(PicturesContext)

  const likedPictures = pictures.filter(pic => pic.liked)

  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        { likedPictures.length ? (
        likedPictures.map(pic => (
          <div 
            key={pic.id}
            className="photo"
            style={{
              backgroundImage: `url(${pic.src.large})`,
              cursor: 'default'
            }}
          >
            <p className="title">{pic.alt}</p>
            <p>{pic.photographer}</p>
          </div>
          )
        )) : (
          <p className="message">No tienes fotos favoritas :(</p>
        )} 
      </div>
    </div>
  );
};
export default Favorites;

