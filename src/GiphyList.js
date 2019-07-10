import React from 'react'
import GiphyListItem from './GiphyListItem'

const GiphyList = ({gifs}) => {
  const gifList = gifs.map((gif, i) =>
    <div className="Get images" key={i}>
        <GiphyListItem gif={gif} key={gif.id} />
      </div>
  )

  return (
        <div className="Show images search">
          {gifList}
        </div>
  )
}

export default GiphyList