import React from 'react'

const GiphyListItem = ({gif}) => {
  const gifImageInfo = gif.images.fixed_height_small
  return (
    <div className="Get infomations of gif">
      <img src={gifImageInfo.url} alt={gifImageInfo.slug} height={gifImageInfo.height} width="125"></img> {/*fix image height and width */}
    </div>
  )
}

export default GiphyListItem