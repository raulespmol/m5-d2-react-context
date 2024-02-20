import { createContext, useState, useEffect } from "react";

export const PicturesContext = createContext()

const PicturesProvider = ({children}) => {
  const [pictures, setPictures] = useState([])

  const getPictures = () => {
    const PHOTO_URL = "/photos.json";
    fetch(PHOTO_URL)
     .then(response => response.json())
     .then(data => setPictures(data.photos))
  }

  useEffect(() => {
    getPictures()
  }, [])

  return (
    <PicturesContext.Provider value={{pictures, setPictures}}>
      {children}
    </PicturesContext.Provider>
  )
}

export default PicturesProvider