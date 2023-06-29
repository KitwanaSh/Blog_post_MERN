import React from 'react'

export default function Post() {
  return (
    <div className="post">
        <div className='image'>
          <img src="assets/post/1.jpg" alt="Post_1" />
        </div>
          <div className="texts">
            <h2>Full-house battery coming later this year</h2>
            <p className="info">
              <a href="" className="author">Driver Johns</a>
              <time>2023-06-28 20:00</time>
            </p>
            <p className='summary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus deserunt sed, ullam saepe laudantium alias fugiat eaque placeat labore, rem perferendis ipsa itaque corrupti ratione neque repellendus, assumenda aperiam voluptate!</p>
          </div>
      </div>
  )
}
