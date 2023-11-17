import ImageContext from "./ImageContext";



import React from 'react'

function ImageState(props) {
  return (
    <ImageContext.Provider value={{}}>
        {props.children}
    </ImageContext.Provider>
  )
}

export default ImageState