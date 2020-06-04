import React from 'react'
import News from './News'
import PropTypes from 'prop-types'

const NewsListing = ({ news }) => {
  return (
    <div className="row">
      {news.map(notice => (
        <News
          key={notice.url}
          notice={notice}
        />
      ))}
    </div>
  )
}

NewsListing.propTypes = {
  news: PropTypes.array.isRequired,
}

export default NewsListing
