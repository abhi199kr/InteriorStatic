import React from 'react'
import "./Blog.css"
const Blog = () => {
  return (
    <div className='container mt-5'>
    <h1 className="text-center o">Blog</h1>
    {/* Flex */}
    <div className="d-flex flex-md-row flex-column mt-5 gap-5">
        <div>
            <div className='bg-dark rounded-5 text-light p-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci corporis, error sed vitae quis fugiat quae maxime repellendus quod. Reprehenderit, sed adipisci! Et exercitationem blanditiis laudantium accusamus voluptates voluptatibus dicta.
            </div>
            <div className="im">
            <img src="https://media.istockphoto.com/id/1348130767/photo/drama-students-reading-a-script-in-a-theatre-class.jpg?b=1&s=170667a&w=0&k=20&c=WP3fosMyUtgZVxWU73v68WiZ8H9X_2qefh_2xosnM_M="
             alt="" />
            </div>
        </div>


        <div>
            <div className='bg-dark rounded-5 text-light p-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci corporis, error sed vitae quis fugiat quae maxime repellendus quod. Reprehenderit, sed adipisci! Et exercitationem blanditiis laudantium accusamus voluptates voluptatibus dicta.
            </div>
            <div className="im">
            <img src="https://media.istockphoto.com/id/1348130767/photo/drama-students-reading-a-script-in-a-theatre-class.jpg?b=1&s=170667a&w=0&k=20&c=WP3fosMyUtgZVxWU73v68WiZ8H9X_2qefh_2xosnM_M="
             alt="" />
            </div>
        </div>

        <div>
            <div className='bg-dark rounded-5 text-light p-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci corporis, error sed vitae quis fugiat quae maxime repellendus quod. Reprehenderit, sed adipisci! Et exercitationem blanditiis laudantium accusamus voluptates voluptatibus dicta.
            </div>
            <div className="im">
            <img src="https://media.istockphoto.com/id/1348130767/photo/drama-students-reading-a-script-in-a-theatre-class.jpg?b=1&s=170667a&w=0&k=20&c=WP3fosMyUtgZVxWU73v68WiZ8H9X_2qefh_2xosnM_M="
             alt="" />
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Blog
