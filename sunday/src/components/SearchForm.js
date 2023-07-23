import React from 'react'

function SearchForm({ onSearch }) {
  return (
    <div>
        
            <div className='search'>
            <input className='' type="text" placeholder="Search transactions" onChange={onSearch} />
            </div>
        
        
    </div>
  )
}

export default SearchForm