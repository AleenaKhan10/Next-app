import React from 'react'

interface Props {
    params : { id: number; PhotoId : number;}
}

const PhotoPage = ({params : {id, PhotoId}} : Props) => {
  return (
    <div>PhotoPage {id} {PhotoId}</div>
  )
}

export default PhotoPage