// import React from 'react'
// export default function Post({heading,author,body}) {
//   return (
//     <div className="post-container">
//         <h2>{heading}</h2>
//         <div>
//             <span className='text-gray'>By</span> <span className="text-blue">{author}</span>
//         </div>
//         <p>
//             {body}
//         </p>
//     </div>
//   )
// }


import React, { Component } from 'react'

export default class Post extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="post-container">
        <h2>{this.props.heading}</h2>
        <div>
            <span className='text-gray'>By</span> <span className="text-blue">{this.props.author}</span>
        </div>
        <p>
            {this.props.body}
        </p>
      </div>
    )
  }
}
