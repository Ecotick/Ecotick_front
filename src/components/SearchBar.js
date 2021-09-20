import React from 'react'
import './SearchBar.css'

function SearchBar() {

  return (

        <div className="contener">
          <form role="search" method="get" className="search-form form" action>
            <label>
              <span className="screen-reader-text">Search for...</span>
              <input type="search" className="search-field" placeholder="Type something..." defaultValue name="s" title />
            </label>
            <input type="submit" className="search-submit button" defaultValue="" />
          </form>
        </div>
  )
}

export default SearchBar
