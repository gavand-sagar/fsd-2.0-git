import React from 'react'

export default function Post({heading,author,body}) {
  return (
    <div className="post-container">
        <h2>{heading}</h2>
        <div>
            <span className='text-gray'>By</span> <span className="text-blue">{author}</span>
        </div>
        <p>
            {body}
        </p>
    </div>
  )
}
