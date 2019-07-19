import React from 'react'
import ModalImage from './modal-image'

const GiphyListItem = ({gif}) => {
  const gifImageInfo = gif.images.original
  return (
    <div className="Get infomations of gif">
      <ModalImage
        src={gifImageInfo.url}
        alt={gifImageInfo.slug}
        ratio={'3.1'}
      />
    </div>
  )
}

export default GiphyListItem
